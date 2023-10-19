import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="font-bold text-lg">
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
};
