import PropTypes from "prop-types";

export const IconButton = ({ onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition ${className}`}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  className: PropTypes.string,
};
