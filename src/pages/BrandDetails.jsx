import { useLoaderData, useParams } from "react-router-dom";
import { BrandDetailsBanner } from "../components/BrandDetailsBanner";
import { ProductCards } from "../components/ProductCards";
import { useBrand } from "../contexts/BrandContext";
import { SectionHeader } from "../components/SectionHeader";
import { Loader } from "../components/Loader";

const BrandDetails = () => {
  const { brandName } = useParams();
  const { brands, isLoading } = useBrand();
  const { data } = useLoaderData();
  const products = data?.data || [];

  const brand = brands.filter((brand) => brand.brandName === brandName);

  if (isLoading) return <Loader />;

  return (
    <div>
      {!!brand.length && (
        <BrandDetailsBanner advertisements={brand[0]?.advertishments} />
      )}

      <div className="container  mx-auto px-4 md:px-0 mt-20">
        <SectionHeader
          title={`Featured Products of ${brandName}`}
          description="Explore the Best Featured Products for You"
        />
        <ProductCards products={products} />
      </div>
    </div>
  );
};

export default BrandDetails;
