import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  console.log(localStorage.getItem("x-auth-token"));

  if (!localStorage.getItem("x-auth-token")) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
