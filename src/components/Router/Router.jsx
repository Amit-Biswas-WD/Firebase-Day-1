import { createBrowserRouter } from "react-router-dom";
import Main from "./../Main/Main";
import Header from "./../Header/Header";
import Login from './../Login/Login';
import SingUp from './../SingUp/SingUp';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SingUp />,
      },
    ],
  },
]);
