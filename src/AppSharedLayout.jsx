import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import PreLoader from "components/Preloader";

function AppSharedLayout() {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>

      <Suspense fallback={<PreLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default AppSharedLayout;
