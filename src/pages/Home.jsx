import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import fetchMovies from "services/fetchMovies";

function Home() {
  const [movies, setMovies] = useState();

  const location = useLocation();

  useEffect(() => {
    // http запит за популярними фільмами
    const getMovies = fetchMovies();

    setMovies(getMovies);
  }, []);

  return (
    <>
      <ul>
        {movies?.map(movie => (
          <li key={movie}>movie {movie}</li>
        ))}
      </ul>
      <h1>Home</h1>
    </>
  );
}

export default Home;
