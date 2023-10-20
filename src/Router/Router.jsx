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
import ProductDetails from "../pages/ProductDetails";
import ProductUpdate from "../pages/ProductUpdate";
import { PrivateRoutes } from "../components/PrivateRoutes";
import { PublicRoutes } from "../components/PublicRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/new",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/brands/:brandName",
        element: <BrandDetails />,
        loader: async ({ params }) =>
          await axios.get(
            `https://brand-shop-server-one.vercel.app/api/brands/${params.brandName}/products`
          ),
      },
      {
        path: "/:brandName/products/:productId",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          await axios.get(
            `https://brand-shop-server-one.vercel.app/api/products/${params.productId}`
          ),
      },
      {
        path: "/:brandName/products/:productId/update",
        element: (
          <PrivateRoutes>
            <ProductUpdate />
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          await axios.get(
            `https://brand-shop-server-one.vercel.app/api/products/${params.productId}`
          ),
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoutes>
            <Register />
          </PublicRoutes>
        ),
      },
    ],
  },
]);

export default router;
