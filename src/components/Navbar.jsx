import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-section">
        <div className="logo-navbar">
          <div className="logo-title">logo</div>
        </div>
        <div className="navbar-details">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "route-sec active" : "route-sec"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "route-sec active" : "route-sec"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/details"
            className={({ isActive }) =>
              isActive ? "route-sec active" : "route-sec"
            }
          >
            Details
          </NavLink>
          <NavLink
            to="/contact us"
            className={({ isActive }) =>
              isActive ? "route-sec active" : "route-sec"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
