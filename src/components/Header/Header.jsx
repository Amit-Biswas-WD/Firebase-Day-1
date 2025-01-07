import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-center my-4 gap-8">
        <NavLink className="btn bg-accent" to={`/login`}>Login</NavLink>
        <NavLink className="btn bg-accent" to={`/sign-up`}>Register</NavLink>
    </div>
  )
}

export default Header