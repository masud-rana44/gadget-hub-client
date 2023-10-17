import { Link, useLocation } from "react-router-dom";

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
  {
    label: "Login",
    href: "/login",
  },
];

export const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="fixed w-full h-[80px] bg-zinc-500 text-white px-5 flex items-center">
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
        </ul>
      </div>
    </nav>
  );
};
