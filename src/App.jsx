import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import AppSharedLayout from "AppSharedLayout";

// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import MovieDetails from "components/MovieDetails";
// import Cast from "components/Cast";
// import Reviews from "components/Reviews";
// import NoтExistentPage from "pages/NoтExistentPage";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("components/MovieDetails"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));
const NoтExistentPage = lazy(() => import("pages/NoтExistentPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppSharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NoтExistentPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
