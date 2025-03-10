import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors"
            >
              Simon Piar
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Me</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Link
                to="/addblog"
                className="ml-4 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Add Blog
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-600 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-600">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </MobileNavLink>
          <MobileNavLink to="/skills" onClick={() => setIsOpen(false)}>
            Skills
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileNavLink>
          <MobileNavLink
            to="/addblog"
            onClick={() => setIsOpen(false)}
            className="bg-black text-center text-indigo-600 hover:bg-gray-100"
          >
            Add Blog
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

// Reusable component for desktop navigation links
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
  </Link>
);

// Reusable component for mobile navigation links
const MobileNavLink = ({ to, children, onClick, className = "" }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500 transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;