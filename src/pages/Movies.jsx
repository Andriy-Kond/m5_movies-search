import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import fetchMovies from "services/fetchMovies";
import MoviesList from "components/MoviesList";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchValue = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!searchValue) {
      setMovies([]);
      return;
    }

    const arrToObjSearchParams = Object.fromEntries([...searchParams]);

    async function searchCurrentMovie() {
      const currentRequestUrl = `search/movie`;
      const result = await fetchMovies(currentRequestUrl, arrToObjSearchParams);
      setMovies(result.data.results);
    }

    searchCurrentMovie();
  }, [searchParams, searchValue]);

  const filteredMovies = movies.filter(movie =>
    movie.original_title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const submitSearchMovie = e => {
    e.preventDefault();

    const searchString =
      e.currentTarget.elements.movieSearch.value === ""
        ? {}
        : { query: e.currentTarget.elements.movieSearch.value };

    e.currentTarget.reset();

    setSearchParams(searchString);
  };

  return (
    <>
      <h1>Movies</h1>
      <form onSubmit={submitSearchMovie}>
        <input
          type="text"
          name="movieSearch"
          // value={searchValue}
          // onChange={e => changeSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MoviesList list={filteredMovies} />}
    </>
  );
}

export default Movies;
