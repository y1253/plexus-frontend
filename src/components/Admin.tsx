import { Outlet } from "react-router-dom";
import { InputSet4 } from "./admin/InputSet4";

export const Admin = () => {
  return (
    <>
      <h1>Admin</h1>

      <Outlet />
    </>
  );
};
