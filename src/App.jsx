import { Route, Routes } from "react-router-dom";

import AppSharedLayout from "AppSharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import NoтExistentPage from "pages/NoтExistentPage";

import MovieDetails from "components/MovieDetails";
import Cast from "components/Cast";
import Reviews from "components/Reviews";

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
