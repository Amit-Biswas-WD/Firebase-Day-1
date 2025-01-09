import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './../Firebase/firebase.init';


export const AuthContext = createContext(null);

const Main = () => {
  const googleProvider = new GoogleAuthProvider()

  const createGoogleProvider = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const totalValue = {
    createGoogleProvider
  };

  return (
    <AuthContext.Provider value={totalValue}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default Main;
