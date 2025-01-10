import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Main/Main";

const Header = () => {
  const { user } = useContext(AuthContext);

  const items = [
    <NavLink key={`/`} className="btn bg-accent" to={`/`}>
      Home
    </NavLink>,
    <NavLink key={`/login`} className="btn bg-accent" to={`/login`}>
      Login
    </NavLink>,
    <NavLink key={`/sign-up`} className="btn bg-accent" to={`/sign-up`}>
      Sign Up
    </NavLink>,
  ];
  return (
    <div>
      <Outlet/>
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>{items}</li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1">
          <li className="flex gap-4">{items}</li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">{user && user.email}</a>
      </div>
    </div>
    </div>
  );
};

export default Header;
