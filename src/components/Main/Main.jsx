import { createContext } from "react";
import { Outlet } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../Firebase/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

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

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const totalValue = {
    createUser,
    createLogin,
    createGoogleProvider,
    createGithubProvider,
  };

  return (
    <AuthContext.Provider value={totalValue}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default Main;
