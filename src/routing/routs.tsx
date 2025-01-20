import { createBrowserRouter } from "react-router-dom";
import App from "../components/HomePage.tsx.tsx";
import { HomeDetailPage } from "../components/HomeDetailPage";
import { MainRoute } from "../MainRoute";
import Contact from "../components/Contact.tsx";
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
]);
export default router;
