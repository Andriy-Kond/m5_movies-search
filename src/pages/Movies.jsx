import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import fetchMovies from "services/fetchMovies";
import MoviesList from "components/MoviesList";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchValue = searchParams.get("query") ?? "";
  const arrToObjSearchParams = Object.fromEntries([...searchParams]);

  const changeSearchValue = searchValue =>
    setSearchParams(searchValue === "" ? {} : { query: searchValue });

  async function searchCurrentMovie(e) {
    e.preventDefault();
    const currentRequestUrl = `search/movie`;
    const result = await fetchMovies(currentRequestUrl, arrToObjSearchParams);
    setMovies(result.data.results);
  }

  return (
    <>
      <h1>Movies</h1>
      <form onSubmit={searchCurrentMovie}>
        <input
          type="text"
          value={searchValue}
          onChange={e => changeSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MoviesList list={movies} />}
    </>
  );
}

export default Movies;
