import PropTypes from "prop-types";

export const SectionHeader = ({ title, description }) => {
  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-[#1e1b4b] dark:text-slate-200 sm:text-4xl lg:text-[46px]">
          {title}
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
