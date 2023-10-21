import PropTypes from "prop-types";

import { TbCurrencyDollar } from "react-icons/tb";

export const FormatPrice = ({ price, className }) => {
  return (
    <div
      className={`text-xl text-gray-500 font-medium flex items-center -space-x-[3px] ${className}`}
    >
      <TbCurrencyDollar size={22} />
      <span>{price}</span>
    </div>
  );
};

FormatPrice.propTypes = {
  price: PropTypes.string,
  className: PropTypes.string,
};
