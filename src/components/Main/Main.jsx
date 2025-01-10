import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../Firebase/firebase.init";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import Header from "../Header/Header";

export const AuthContext = createContext(null);

const Main = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const totalValue = {
    user,
    createUser,
    createLogin,
    createGoogleProvider,
    createGithubProvider,
  };

  return (
    <AuthContext.Provider value={totalValue}>
     <Header/>
    </AuthContext.Provider>
  );
};

export default Main;
