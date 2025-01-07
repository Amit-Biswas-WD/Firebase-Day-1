import { createBrowserRouter } from "react-router-dom";
import Main from './../Main/Main';
import Login from "../Login/Login";
import SingUp from "../SingUp/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/sign-up",
            element: <SingUp/>
        },
    ]
  },
]);
