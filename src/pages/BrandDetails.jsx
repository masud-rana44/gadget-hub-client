import { useLoaderData } from "react-router-dom";
import { BrandDetailsBanner } from "../components/BrandDetailsBanner";

const BrandDetails = () => {
  const { data } = useLoaderData();

  const brand = data.data;

  console.log(brand);
  return (
    <div>
      <BrandDetailsBanner advertisements={brand.advertishments} />
    </div>
  );
};

export default BrandDetails;
