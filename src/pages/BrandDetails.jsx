import { useLoaderData } from "react-router-dom";
import { BrandDetailsBanner } from "../components/BrandDetailsBanner";
import { ProductCards } from "../components/ProductCards";

const BrandDetails = () => {
  const { data } = useLoaderData();

  const brand = data.data;

  console.log(brand);
  return (
    <div>
      <BrandDetailsBanner advertisements={brand.advertishments} />
      <ProductCards products={brand.products} />
    </div>
  );
};

export default BrandDetails;
