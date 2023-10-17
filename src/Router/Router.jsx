import axios from "axios";
import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../components/AppLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BrandDetails from "../pages/BrandDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => await axios.get("http://localhost:8080/api/brands"),
      },
      {
        path: "/products/new",
        element: <AddProduct />,
      },
      {
        path: "/cart",
        element: <MyCart />,
      },
      {
        path: "/brands/:id",
        element: <BrandDetails />,
        loader: async ({ params }) =>
          await axios.get(`http://localhost:8080/api/brands/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
