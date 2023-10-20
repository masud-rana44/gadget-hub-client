import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { FormatPrice } from "./ui/FormatPrice";
import { EmptyState } from "./EmptyState";

export const ProductCards = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10">
        {!!products.length &&
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white dark:bg-slate-700 group cursor-pointer rounded-xl border  space-y-4"
            >
              {/* Image & actions */}
              <div className="rounded-xl bg-gray-100 dark:bg-slate-700 relative flex items-center justify-center">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-full h-[350px] object-cover rounded-md"
                />
              </div>
              {/* Description */}
              <div className="p-2">
                <div className="text-gray-500 dark:text-gray-100">
                  <div className="flex items-center justify-between space-x-2">
                    <p className="font-semibold text-lg">{product.name}</p>
                    <FormatPrice price={product.price} />
                  </div>
                  <div className="w-full mt-4 flex flex-col space-y-1">
                    <div className="flex space-x-2 items-center">
                      {" "}
                      <p className="font-medium">Category:</p>
                      <p className="text-sm ">{product.type}</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <p className="font-medium">Brand:</p>
                      <p className="text-sm ">{product.brandName}</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <p className="font-medium">Rating:</p>
                      <p className="text-sm ">{product.rating}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 space-x-6">
                  <button
                    size="sm"
                    className="bg-gray-300 dark:bg-gray-800 w-full rounded-md 
        border
        border-transparent
        disabled:cursor-not-allowed 
        disabled:opacity-50
        font-semibold
        hover:opacity-75
        transition py-[6px] px-3"
                  >
                    <Link
                      to={`/${product.brandName}/products/${product._id}/update`}
                    >
                      Update
                    </Link>
                  </button>
                  <Button size="sm" className="w-full">
                    <Link to={`/${product.brandName}/products/${product._id}`}>
                      Details
                    </Link>
                  </Button>
                </div>
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
