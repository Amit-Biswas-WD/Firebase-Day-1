import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Main/Main";

const SingUp = () => {
  const { createGoogleProvider } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, photo, email, password);
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

  return (
    <div className="hero bg-gray-500 min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body bg-gray-500">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered bg-gray-500"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered bg-gray-500"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered bg-gray-500"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Sign Up</button>
          </div>
          <p className="text-end">
            Go to
            <Link className="text-green-500 mx-2" to={`/login`}>
              Login
            </Link>
            Page.
          </p>
        </form>
        <div className="flex justify-around px-14 py-4 bg-gray-500">
          <div
            onClick={handleGoogleLogin}
            className="flex gap-2 items-center btn btn-accent"
          >
            Google <FaGoogle />
          </div>
          <div className="flex gap-2 items-center btn btn-accent">
            Github <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
