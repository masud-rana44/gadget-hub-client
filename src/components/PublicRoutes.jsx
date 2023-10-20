import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "./Loader";

export const PublicRoutes = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};
