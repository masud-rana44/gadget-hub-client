import PropTypes from "prop-types";

export const Button = ({ children, size, ...rest }) => {
  return (
    <button
      className={`${
        size === "sm" ? "py-2 px-3" : "px-6 py-[10px]"
      } bg-indigo-700 hover:bg-indigo-800 transition text-white w-full font-medium rounded-md`}
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
