import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className=" flex items-center justify-center h-screen bg-gray-100 dark:bg-slate-800">
      <div className="text-center container mx-auto px-4 md:px-0">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-lg  text-gray-600 dark:text-gray-300 mb-8">
          {error?.error?.message ||
            "We apologize for the inconvenience. Please try again later."}
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-lg text-white font-medium text-sm bg-rose-500 transition hover:opacity-80 mb-10"
        >
          Back to home
        </button>
        <img
          src="https://i.imgur.com/yW2W9SC.png"
          alt="Error Illustration"
          className="w-auto md:max-w-[300px] mx-auto"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
