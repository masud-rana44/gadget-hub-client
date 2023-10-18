import { useLoaderData } from "react-router-dom";
import { BrandDetailsBanner } from "../components/BrandDetailsBanner";
import { ProductCards } from "../components/ProductCards";
import { useBrand } from "../contexts/BrandContext";

const BrandDetails = () => {
  const { brands } = useBrand();
  const { data } = useLoaderData();
  const products = data?.data || [];

  return (
    <div>
      <BrandDetailsBanner advertisements={brands.advertishments} />
      <ProductCards products={products} />
    </div>
  );
};

export default BrandDetails;
