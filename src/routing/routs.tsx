import { createBrowserRouter } from "react-router-dom";
import App from "../components/HomePage.tsx.tsx";
import { HomeDetailPage } from "../components/HomeDetailPage";
import { MainRoute } from "../MainRoute";
import Contact from "../components/Contact.tsx";
import { Admin } from "../components/Admin.tsx";
import { InputSets } from "../components/admin/InputSets.tsx";
import Login from "../components/admin/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    children: [
      { path: "/", element: <App /> },
      { path: "/home/:id", element: <HomeDetailPage /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "/admin", element: <Login /> },
      { path: "/admin/input", element: <InputSets /> },
    ],
  },
]);
export default router;
