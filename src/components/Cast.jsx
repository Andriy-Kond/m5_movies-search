import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchMovies from "services/fetchMovies";
import imagesConfigurations from "services/imagesConfigurations";
import noUser from "../imgs/noUser.jpg";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    // https://api.themoviedb.org/3/movie/{movie_id}/credits
    async function getRequest() {
      const currentRequestUrl = `movie/${movieId}/credits`;
      const result = await fetchMovies(currentRequestUrl);
      console.log("getRequest >> result:::", result.data);
      setCast(result.data.cast);
      setCrew(result.data.crew);
    }
    getRequest();
  }, [movieId]);

  const { images } = imagesConfigurations;

  return (
    <>
      <h2>Cast</h2>
      <ul>
        {cast.length > 0 ? (
          cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `${images.secure_base_url}w185/${profile_path}`
                    : noUser
                }
                alt={`${name}`}
                width={185}
              />
              <h3>Actor: {name}</h3>
              <p>Character: {character}</p>
            </li>
          ))
        ) : (
          <h3>We don't have cast info for this movie</h3>
        )}
      </ul>
      <h2>Crew</h2>
      <ul>
        {crew.length > 0 ? (
          crew.map(({ name, job, profile_path }) => {
            console.log("crew.map >> profile_path:::", profile_path);

            return (
              <li>
                <img
                  src={
                    profile_path
                      ? `${images.base_url}w185/${profile_path}`
                      : noUser
                  }
                  alt={`${name}`}
                  width={185}
                />
                <h3>Actor: {name}</h3>
                <p>Job: {job}</p>
              </li>
            );
          })
        ) : (
          <h3>We don't have crew info for this movie</h3>
        )}
      </ul>
    </>
  );
}

export default Cast;
