import { useAuth } from "../contexts/AuthContext";
import { RxAvatar } from "react-icons/rx";

export const User = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="text-white flex items-center gap-x-[6px]">
      <div>
        {user?.photoURL ? (
          <img
            src={user?.photoURL || "./placeholder.svg"}
            alt="User photo"
            className="h-7 w-7 rounded-full object-cover"
          />
        ) : (
          <RxAvatar size={26} className="font-medium" />
        )}
      </div>
      <p className="font-medium  text-slate-800 dark:text-gray-200">
        {user?.displayName?.split(" ")[0]}
      </p>
    </div>
  );
};
