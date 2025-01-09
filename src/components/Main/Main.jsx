import { createContext } from "react";
import { Outlet } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../Firebase/firebase.init";

export const AuthContext = createContext(null);

const Main = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createGoogleProvider = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createGithubProvider = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const totalValue = {
    createGoogleProvider,
    createGithubProvider
  };

  return (
    <AuthContext.Provider value={totalValue}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default Main;
