import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import fetchMovies from "services/fetchMovies";

function Home() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    // http запит за популярними фільмами
    async function fetchPopularMovies() {
      const timeWindow = "day"; // "day" or "week"
      const currentRequestUrl = `trending/movie/${timeWindow}`;

      const getMovies = await fetchMovies(currentRequestUrl);
      setMovies(getMovies.data.results);
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {movies.map(
          ({
            id,
            backdrop_path,
            poster_path,
            original_language,
            original_title,
            release_date,
            vote_average,
          }) => (
            <li key={id}>
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  alt={`Poster of ${original_title} movie`}
                />
              </p>
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={`Poster of ${original_title} movie`}
                />
              </p>
              <p>Language: {original_language}</p>
              <p>
                Title:{" "}
                <Link to={`movies/${id}`} state={{ from: location }}>
                  {" "}
                  {original_title}
                </Link>
              </p>
              <p>Release date: {release_date}</p>
              <p>TMDB rating: {vote_average},</p>
            </li>
          ),
        )}
      </ul>
    </>
  );
}

// adult: false
// ​​backdrop_path: "/p5kpFS0P3lIwzwzHBOULQovNWyj.jpg"
// ​​genre_ids: Array [ 80, 53 ]
// ​​id: 1032823
// ​​media_type: "movie"
// ​​original_language: "en"
// ​original_title: "Trap"
// ​​overview: "A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event."
// ​​popularity: 1308.217
// ​​poster_path: "/jwoaKYVqPgYemFpaANL941EF94R.jpg"
// ​​release_date: "2024-07-31"
// ​​title: "Trap"
// ​​video: false
// ​​vote_average: 6.527
// ​​vote_count: 768

export default Home;
