export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="../../../logo.svg" alt="Logo of GadgetHub" />
      <h3 className="hidden md:block font-bold text-[#4338ca]  dark:text-[#6366f1] text-xl">
        GadgetHub
      </h3>
    </div>
  );
};
