import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { User } from "./User";
import { Button } from "./ui/Button";
import { DarkModeToggle } from "./DarkModeToggle";
import { Logo } from "./Logo";
import { useAuth } from "../contexts/AuthContext";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Add Product",
    href: "/products/new",
  },
  {
    label: "My Cart",
    href: "/cart",
  },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = location;

  const handleToggle = () => setIsOpen((open) => !open);

  const allLinks = (
    <>
      {links.map((link) => (
        <li
          key={link.href}
          onClick={() => {
            navigate(link.href);
            setIsOpen(false);
          }}
          className={`${
            pathname === link.href
              ? "text-[#4338ca] dark:text-indigo-500"
              : "cursor-pointer"
          }`}
        >
          {link.label}
        </li>
      ))}
    </>
  );

  return (
    <nav className="fixed w-full h-[80px] bg-gray-100 text-slate-600 dark:bg-slate-700 dark:text-white px-4 md:px-0 flex items-center z-50">
      {/* left side */}
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex space-x-2 items-center">
          {user && (
            <div onClick={handleToggle} className=" cursor-pointer md:hidden">
              {!isOpen ? <BiMenu size={28} /> : <AiOutlineClose size={28} />}
            </div>
          )}
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {user && (
          <>
            {/* middle --- MOBILE */}
            <ul
              className={`md:hidden flex flex-col absolute  left-0 items-center  space-y-5 pt-8 pb-14 w-full font-medium  z-10 transition duration-400 transform translate-y-32 bg-gray-100 text-slate-600 dark:bg-slate-700 dark:text-white  ${
                isOpen ? " opacity-100" : "opacity-0"
              }`}
            >
              {allLinks}
            </ul>

            {/* middle --- DESKTOP */}
            <ul className="hidden md:flex items-center justify-between space-x-12 font-medium">
              {allLinks}
            </ul>
          </>
        )}

        {/* right side */}
        <div className="flex items-center space-x-3 md:space-x-7">
          <DarkModeToggle />
          {user ? (
            <div className="flex items-center gap-x-3">
              <User />
              <FiLogOut
                size={22}
                onClick={logOut}
                className="text-slate-800 dark:text-gray-200 hover:opacity-75 font-medium cursor-pointer transition-colors"
              />
            </div>
          ) : (
            <div>
              <Link to="/login">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
