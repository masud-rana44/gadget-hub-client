import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between bg-zinc-500 text-white py-4 ">
      <Link to="/">LOGO</Link>
      <ul className="flex items-center justify-between space-x-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/new">Add Product</Link>
        </li>
        <li>
          <Link to="/cart">My Cart</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
