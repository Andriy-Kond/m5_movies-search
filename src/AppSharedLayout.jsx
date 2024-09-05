import { NavLink, Outlet } from "react-router-dom";

function AppSharedLayout() {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>

      {/* <NavLink to={"/movies/:movieId"}>Movie Name</NavLink> */}
      <Outlet />
    </>
  );
}

export default AppSharedLayout;
