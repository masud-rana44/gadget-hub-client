import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id}>
          <div>
            <img
              className="h-[200px]"
              src={product.image}
              alt={`Image of ${product.name}`}
            />
          </div>
          {product.name}
          {product.brandName}
          {product.type}
          {product.price}
          {product.rating}
          <div className="flex items-center justify-between">
            <button>
              <Link
                to={`/brands/${product.brandName}/products/${product._id}/update`}
              >
                Update
              </Link>
            </button>
            <button>
              <Link to={`/brands/${product.brandName}/products/${product._id}`}>
                Details
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductCards.propTypes = {
  products: PropTypes.array,
  brandId: PropTypes.string,
};
