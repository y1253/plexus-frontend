import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  if (!localStorage.getItem("x-auth-token")) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
