import PropTypes from "prop-types";

export const Input = ({ id, label, type, value, onChange, ...rest }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium leading-6 ">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required
          {...rest}
          className="block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset dark:bg-slate-600 outline-none  text-black dark:text-gray-100 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset  sm:text-sm sm:leading-6 "
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rest: PropTypes.any,
};
