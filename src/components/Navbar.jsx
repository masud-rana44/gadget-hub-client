import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { User } from "./User";
import { Button } from "./ui/Button";

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
  const location = useLocation();
  const { user, logOut } = useAuth();

  const { pathname } = location;

  return (
    <nav className="fixed w-full h-[80px] bg-zinc-500 text-white px-5 flex items-center z-50">
      <div className="container mx-auto flex items-center justify-between ">
        <Link to="/">LOGO</Link>
        <ul className="flex items-center justify-between space-x-12">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`${
                  pathname === link.href ? "text-indigo-200 font-medium" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            {" "}
            {user ? (
              <div className="flex items-center gap-x-2">
                <User />
                <FiLogOut
                  size={22}
                  onClick={logOut}
                  className="text-white font-medium cursor-pointer hover:opacity-80"
                />
              </div>
            ) : (
              <div>
                <Button className="bg-gradient-to-r from-[#66b8dd] via-[#8e7fe9] to-[#e17497]">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
