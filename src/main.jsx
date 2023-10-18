import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./Router/Router";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrandProvider } from "./contexts/BrandContext";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrandProvider>
        <Toaster />
        <RouterProvider router={router} />
      </BrandProvider>
    </AuthProvider>
  </React.StrictMode>
);
