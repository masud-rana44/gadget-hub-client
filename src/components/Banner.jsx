export const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 mt-6 h-[500px] bg-[url('../bg-1.png')] rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          Explore the Gadget Collection!
        </div>
      </div>
    </div>
  );
};
