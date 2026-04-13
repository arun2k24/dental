import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 border-2 border-teal-400 flex items-center justify-center rounded-md">
          <img 
            src="to.png" 
            alt="logo" 
            className="w-full h-full object-contain animate-spin"
          />
        </div>
        <div>
          <h1 className="text-teal-600 font-bold text-lg leading-tight">
            Dr. Simm's
          </h1>
          <p className="text-sm text-gray-600 leading-tight">
            Smile & 
          </p>
          <p className="text-teal-600 font-semibold text-sm">
            Dental Clinic
          </p>
        </div>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                : "hover:text-teal-600"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                : "hover:text-teal-600"
            }
          >
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/service" 
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                : "hover:text-teal-600"
            }
          >
            Service
          </NavLink>
        </li>

        {/* Contact Button */}
        <li>
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
              Contact
            </button>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;