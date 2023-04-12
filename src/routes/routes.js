import React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import RegisterPage from "../auth/RegisterPage";
import Home from "../components/home/Home";
import Main from "../layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "register",
          element: <RegisterPage />
        },
    ]
  },
]);
export default routes;