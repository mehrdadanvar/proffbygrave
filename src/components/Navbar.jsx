import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="flex text-base list-none gap-6">
        <li>
          <a href="/about">Sign up</a>
        </li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink>Pricing</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
