import { Route, Routes } from "react-router-dom";

import AppSharedLayout from "AppSharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Cast from "pages/Cast";
import Reviews from "pages/Reviews";
import NoтExistentPage from "pages/NoтExistentPage";

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
