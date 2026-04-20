import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-100 px-6 py-4">
      <div className="flex items-center justify-between">
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
            <p className="text-sm text-gray-600 leading-tight">Smile &</p>
            <p className="text-teal-600 font-semibold text-sm">
              Dental Clinic
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
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

          <li>
            <Link to="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
                Contact
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/service" onClick={() => setIsOpen(false)}>
            Service
          </NavLink>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full">
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
