import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import fetchMovies from "services/fetchMovies";

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

  return (
    <>
      <Link to={backLink.current}>Повернутись назад</Link>
      <h2>
        <a href={movie.homepage}>{movie.original_title}</a>
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={`Poster of ${movie.original_title} movie`}
      />
      <p>
        Overview: <span>{movie.overview}</span>
      </p>

      <NavLink to={"cast"}>Cast</NavLink>
      <NavLink to={"reviews"}>Reviews</NavLink>

      <Outlet />
    </>
  );
}

export default MovieDetails;
