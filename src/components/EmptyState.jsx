import notFound from "../assets/notFound.svg";

export const EmptyState = () => {
  return (
    <>
      <img src={notFound} className="h-40 mx-auto mb-4" />
      <div className="flex text-base md:text-xl items-center justify-center h-full w-full text-neutral-400 dark:text-gray-400 text-center">
        No products found.
      </div>
    </>
  );
};
