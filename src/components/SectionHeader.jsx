import PropTypes from "prop-types";

export const SectionHeader = ({ title }) => {
  return (
    <div className="w-full">
      <h2 className="text-center text-[#1e1b4b] dark:text-slate-200 text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};
