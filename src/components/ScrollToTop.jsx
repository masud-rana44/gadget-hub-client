import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

ScrollToTop.propTypes = {
  children: PropTypes.node,
};
