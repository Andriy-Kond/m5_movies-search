import { Link, useLocation } from "react-router-dom";

function MoviesList({ list }) {
  const location = useLocation();
  console.log("MoviesList >> location:::", location);

  const linkTo = location.pathname.includes("movies") ? "" : "/movies/";

  return (
    <>
      <ul>
        {list.map(
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
                Title:
                <Link to={`${linkTo}${id}`} state={{ from: location }}>
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

export default MoviesList;
