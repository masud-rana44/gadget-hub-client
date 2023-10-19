import { Navigate, useLoaderData, useParams } from "react-router-dom";
import { BrandDetailsBanner } from "../components/BrandDetailsBanner";
import { ProductCards } from "../components/ProductCards";
import { useBrand } from "../contexts/BrandContext";
import { SectionHeader } from "../components/SectionHeader";

const BrandDetails = () => {
  const { brandName } = useParams();
  const { brands } = useBrand();
  const { data } = useLoaderData();
  const products = data?.data || [];

  const brand = brands.filter((brand) => brand.brandName === brandName);

  if (!brand.length) return Navigate("/");

  return (
    <div>
      <BrandDetailsBanner advertisements={brand[0].advertishments} />
      <div className="container mx-auto px-4 md:px-0 mt-20">
        <SectionHeader title={`Featured Products of ${brand[0].brandName}`} />
        <ProductCards products={products} />
      </div>
    </div>
  );
};

export default BrandDetails;
