import { createBrowserRouter } from "react-router-dom";
import App from "../components/HomePage.tsx.tsx";
import { HomeDetailPage } from "../components/HomeDetailPage";
import { MainRoute } from "../MainRoute";
import Contact from "../components/Contact.tsx";
import { Admin } from "../components/Admin.tsx";
import { InputSets } from "../components/admin/InputSets.tsx";
import Login from "../components/admin/Login.tsx";
import AdminList from "../components/admin/AdminList.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import GetSale from "../components/GetSale/GetSale.tsx";
import GetRental from "../components/GetRental/GetRental.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    children: [
      { path: "/", element: <App /> },
      { path: "/forsale", element: <GetSale /> },
      { path: "/forrent", element: <GetRental /> },
      { path: "/home/:id", element: <HomeDetailPage /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        children: [
          { path: "/admin/list", element: <AdminList /> },
          { path: "/admin/input", element: <InputSets /> },
        ],
      },
    ],
  },
]);
export default router;
