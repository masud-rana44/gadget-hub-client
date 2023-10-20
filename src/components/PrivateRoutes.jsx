import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loader } from "./Loader";
import PropTypes from "prop-types";

export const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
