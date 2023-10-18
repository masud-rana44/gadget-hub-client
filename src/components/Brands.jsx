import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Brands = ({ brands }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-20 p-8 ">
      {brands.map((brand) => (
        <Link
          to={`/brands/${brand.brandName}`}
          key={brand._id}
          className="hover:bg-indigo-200 hover:border rounded-full"
        >
          <div className="h-[200px] w-[200px]">
            <img
              className="w-full"
              src={`../${brand.brandName.toLowerCase()}.svg`}
            />
          </div>
          <h2>{brand.brandName}</h2>
        </Link>
      ))}
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};
