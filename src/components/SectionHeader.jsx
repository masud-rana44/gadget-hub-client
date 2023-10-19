import PropTypes from "prop-types";

export const SectionHeader = ({ title }) => {
  return (
    <div className="w-full mb-6">
      <h2 className="text-center dark:text-slate-200">{title}</h2>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};
