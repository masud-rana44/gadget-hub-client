import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./Router/Router";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrandProvider } from "./contexts/BrandContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrandProvider>
      <Toaster />
      <RouterProvider router={router} />
    </BrandProvider>
  </React.StrictMode>
);
