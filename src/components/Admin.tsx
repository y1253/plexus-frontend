import { Outlet } from "react-router-dom";
import { AdminNavBar } from "./admin/AdminNavBar";

export const Admin = () => {
  return (
    <>
      <AdminNavBar />
      

      <Outlet />
    </>
  );
};
