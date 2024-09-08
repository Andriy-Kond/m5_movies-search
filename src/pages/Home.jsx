import { useEffect, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import fetchMovies from "services/fetchMovies";
import MoviesList from "components/MoviesList";

Notify.init({
  width: "300px",
  position: "right-bottom",
  timeout: 2000,
  clickToClose: false,
  cssAnimationStyle: "from-right",
});

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // http запит за популярними фільмами
    async function fetchPopularMovies() {
      const timeWindow = "day"; // "day" or "week"
      const currentRequestUrl = `trending/movie/${timeWindow}`;

      const result = await fetchMovies(currentRequestUrl);

      if (result.data.results.length === 0) {
        Notify.warning("We don't have any movies now. Sorry.");
        return;
      }

      setMovies(result.data.results);
    }

    try {
      fetchPopularMovies();
    } catch (error) {
      Notify.failure(error.message);
    }
  }, []);

  return (
    <>
      <h1>Home</h1>
      {movies && <MoviesList list={movies} />}
    </>
  );
}

export default Home;
