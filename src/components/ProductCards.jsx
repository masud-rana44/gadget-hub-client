import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

export const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-10">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
        >
          {/* Image & actions */}
          <div className="aspect-square rounded-xl bg-gray-100 relative flex items-center justify-center">
            <img
              src={product.image}
              alt={`Image of ${product.name}`}
              className="aspect-square object-cover rounded-md"
            />
            {/* <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
              <div className="flex gap-x-6 justify-center">
                <IconButton
                  // onClick={onPreview}
                  icon={<BiExpand size={20} className="text-gray-600" />}
                />
                <IconButton
                  // onClick={onAddToCart}
                  icon={<BiExpand size={20} className="text-gray-600" />}
                />
              </div>
            </div> */}
          </div>
          {/* Description */}
          <div>
            <p className="font-semibold text-lg">{product.name}</p>
            <p className="text-sm text-gray-500">{product.type}</p>
          </div>
          {/* Price & Reiew */}
          <div className="flex items-center justify-between">
            {/* <Currency value={data?.price} /> */}
            <p>{product.price}</p>
          </div>
          <div className="flex items-center justify-between">
            <Button size="sm">
              <Link
                to={`/brands/${product.brandName}/products/${product._id}/update`}
              >
                Update
              </Link>
            </Button>
            <Button size="sm">
              <Link to={`/brands/${product.brandName}/products/${product._id}`}>
                Details
              </Link>
            </Button>
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
