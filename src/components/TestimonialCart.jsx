import { StartIcon } from "./StartIcon";

const TestimonialCart = ({ review }) => {
  return (
    <div className="flex flex-col overflow-hidden shadow-xl">
      <div className="flex flex-col justify-between flex-1 p-6 bg-gray-100 dark:bg-slate-700 dark:text-gray-200 text-gray-900 lg:py-8 lg:px-7">
        <div className="flex-1">
          <div className="flex items-center">
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
          </div>

          <blockquote className="flex-1 mt-8">
            <p className="text-lg font-normal leading-relaxed ">
              {review.review}
            </p>
          </blockquote>
        </div>

        <div className="flex items-center mt-8">
          <img
            className="flex-shrink-0 object-cover rounded-full w-11 h-11"
            src={review.image}
            alt={`Image of ${name}`}
          />
          <div className="ml-4">
            <p className="text-base font-bold">{review.name}</p>
            <p className="mt-0.5 text-sm font-pj text-gray-600 dark:text-gray-400">
              {review.profession}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCart;
