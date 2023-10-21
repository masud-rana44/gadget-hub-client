import PropTypes from "prop-types";
import { EmptyState } from "./EmptyState";
import { ProductCard } from "./ProductCard";

export const ProductCards = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-16">
        {!!products.length &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
      {!products.length && <EmptyState />}
    </>
  );
};

ProductCards.propTypes = {
  products: PropTypes.array,
  brandId: PropTypes.string,
};
