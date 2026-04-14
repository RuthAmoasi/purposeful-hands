import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Purposeful Hands Logo" className="logo" />
      </Link>

      {/* <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </div> */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/opportunities"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Opportunities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Link to="/opportunities" className="navbar-get-involved btn btn-primary">
        Get Involved
      </Link>
    </nav>
  );
}

export default Navbar;
