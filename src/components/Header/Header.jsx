import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center gap-8">
      <NavLink key={`/`} className="btn bg-accent" to={`/`}>
        Home
      </NavLink>
      <NavLink key={`login`} className="btn bg-accent" to={`/login`}>
        Login
      </NavLink>
      <NavLink key={`sign-up`} className="btn bg-accent" to={`/sign-up`}>
        Sign Up
      </NavLink>
    </div>
  );
};

export default Header;
