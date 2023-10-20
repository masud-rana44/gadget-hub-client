import PropTypes from "prop-types";

import { TbCurrencyTaka } from "react-icons/tb";

export const FormatPrice = ({ price }) => {
  return (
    <div className="text-xl font-medium flex items-center ">
      <TbCurrencyTaka />
      <span>{price}</span>
    </div>
  );
};

FormatPrice.propTypes = {
  price: PropTypes.string,
};
