import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

import fetchMovies from "services/fetchMovies";
import imagesConfigurations from "services/imagesConfigurations";
import noPoster from "imgs/noPoster.webp";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // http запит за поточним фільмом
    async function fetchPopularMovies() {
      const currentRequestUrl = `movie/${movieId}`;

      const getCurrentMovie = await fetchMovies(currentRequestUrl);
      setMovie(getCurrentMovie.data);
    }

    fetchPopularMovies();
  }, [movieId]);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  const { images } = imagesConfigurations;

  const { homepage, original_title, backdrop_path, overview } = movie;
  return (
    <>
      <Link to={backLink.current}>Повернутись назад</Link>
      <h2>
        <a href={homepage}>{original_title}</a>
      </h2>
      <img
        src={
          backdrop_path
            ? `${images.secure_base_url}w500/${backdrop_path}`
            : noPoster
        }
        alt={`Poster of ${original_title} movie`}
        width={500}
      />
      <p>
        Overview: <span>{overview}</span>
      </p>

      <NavLink to={"cast"}>Cast</NavLink>
      <NavLink to={"reviews"}>Reviews</NavLink>

      <Outlet />
    </>
  );
}

export default MovieDetails;
