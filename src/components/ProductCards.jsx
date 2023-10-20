import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { FormatPrice } from "./ui/FormatPrice";
import { EmptyState } from "./EmptyState";

export const ProductCards = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-10">
        {!!products.length &&
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white dark:bg-slate-700 group cursor-pointer rounded-xl border p-3 space-y-4"
            >
              {/* Image & actions */}
              <div className="aspect-square rounded-xl bg-gray-100 dark:bg-slate-700 relative flex items-center justify-center">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="aspect-square object-cover rounded-md"
                />
              </div>
              {/* Description */}
              <div className="text-gray-500 dark:text-gray-100">
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-sm ">{product.type}</p>
                <p className="text-sm ">{product.brandName}</p>
                <p className="text-sm ">{product.rating}</p>
              </div>
              {/* Price & Reiew */}
              <div className="flex items-center justify-between">
                <FormatPrice price={product.price} />
              </div>
              <div className="flex items-center justify-between">
                <Button size="sm">
                  <Link
                    to={`/${product.brandName}/products/${product._id}/update`}
                  >
                    Update
                  </Link>
                </Button>
                <Button size="sm">
                  <Link to={`/${product.brandName}/products/${product._id}`}>
                    Details
                  </Link>
                </Button>
              </div>
            </div>
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
