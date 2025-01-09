import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Main/Main";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { createLogin, createGoogleProvider, createGithubProvider } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setErrorMessage("Password should be 6 characters or longer");
      return;
    }

    createLogin(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () => {
    createGoogleProvider()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleGithubLogin = () => {
    createGithubProvider()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="hero bg-gray-500 min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body bg-gray-500">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered bg-gray-500"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="password"
              className="input input-bordered bg-gray-500"
              required
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute top-12 right-4"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </p>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Login</button>
          </div>
          <p className="text-end my-2">
            Go to
            <Link className="text-green-500 mx-2" to={`/sign-up`}>
              Sign Up
            </Link>
            Page.
          </p>
        </form>
        <div>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </div>
        <div className="flex justify-around px-14 py-4 bg-gray-500">
          <div
            onClick={handleGoogleLogin}
            className="flex gap-2 items-center btn btn-accent"
          >
            Google <FaGoogle />
          </div>
          <div
            onClick={handleGithubLogin}
            className="flex gap-2 items-center btn btn-accent"
          >
            Github <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
