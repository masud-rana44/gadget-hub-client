import PropTypes from "prop-types";

export const Button = ({ children, size, ...rest }) => {
  return (
    <button
      className={`${
        size === "sm" ? "py-[6px] px-3" : "px-6 py-[10px]"
      } bg-indigo-700 w-auto 
        rounded-md 
        border
        border-transparent
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.any,
};
