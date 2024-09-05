import { NavLink, useLocation } from "react-router-dom";

function MovieDetails() {
  return (
    <>
      <h1>MovieDetails</h1>
      <NavLink to={"movies/:movieId/cast"}>Cast</NavLink>
      <NavLink to={"movies/:movieId/reviews"}>Reviews</NavLink>
    </>
  );
}

export default MovieDetails;
