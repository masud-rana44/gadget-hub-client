import PropTypes from "prop-types";

export const FormRow = ({ label, children }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="font-medium mb-[6px]">{label}</label>}
      {children}
    </div>
  );
};

FormRow.propTypes = {
  label: PropTypes.string,

  children: PropTypes.node,
};
