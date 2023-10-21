import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";

export const Brands = ({ brands }) => {
  return (
    <div className="container mx-auto px-4 md:px-0 py-12  sm:py-16 lg:py-20 ">
      <SectionHeader
        title="Featured Brands"
        description="Discover Your Favorite Brand Collections at GadgetHub"
      />
      <div className="flex items-center justify-center flex-wrap gap-6 mt-10 md:mt-16">
        {brands.map((brand) => (
          <Link
            to={`/brands/${brand.brandName}`}
            key={brand._id}
            className="bg-white dark:bg-slate-800 group cursor-pointer rounded-xl border dark:border-slate-700 p-3 space-y-4"
          >
            <div className="aspect-square rounded-xl bg-gray-100 dark:bg-slate-700 relative flex items-center justify-center p-2">
              <img
                className="w-[160px] h-[100px]"
                src={`../${brand.brandName.toLowerCase()}.svg`}
              />
            </div>
            <h2 className="font-semibold text-lg text-center dark:text-gray-200">
              {brand.brandName}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};
