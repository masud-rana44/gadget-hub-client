import { useAuth } from "../contexts/AuthContext";
import { RxAvatar } from "react-icons/rx";

export const User = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="text-white flex items-center gap-x-2">
      <div>
        {user.photoURL ? (
          <img
            src={user.photoURL || "./placeholder.svg"}
            alt="User photo"
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <RxAvatar size={26} className="font-medium" />
        )}
      </div>
      <p className="font-medium text-slate-800 dark:text-gray-200">
        {user.displayName}
      </p>
    </div>
  );
};
