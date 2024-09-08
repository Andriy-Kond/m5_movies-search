import { useEffect, useState } from "react";

import fetchMovies from "services/fetchMovies";
import MoviesList from "components/MoviesList";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // http запит за популярними фільмами
    async function fetchPopularMovies() {
      const timeWindow = "day"; // "day" or "week"
      const currentRequestUrl = `trending/movie/${timeWindow}`;

      const result = await fetchMovies(currentRequestUrl);
      setMovies(result.data.results);
    }

    fetchPopularMovies();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {movies && <MoviesList list={movies} />}
    </>
  );
}

export default Home;
