import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const brandContext = createContext();

const BrandProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const { data } = await axios.get("http://localhost:8080/api/brands");
      setBrands(data.data);
    };

    fetchBrands();
  }, []);
  return (
    <brandContext.Provider value={{ brands }}>{children}</brandContext.Provider>
  );
};

const useBrand = () => {
  const context = useContext(brandContext);
  if (!context)
    throw new Error("Brand context is accessed outside of brand provider");
  return context;
};

export { BrandProvider, useBrand };

BrandProvider.propTypes = {
  children: PropTypes.node,
};
