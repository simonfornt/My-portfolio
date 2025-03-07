import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-600 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl">Simon Piar</h1>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex gap-6 text-white font-semibold ${
          isOpen ? "block" : "hidden"
        } md:block`}>
          <li><Link to="/" className="block py-2 px-4 hover:bg-teal-700 rounded-md">Home</Link></li>
          <li><Link to="/about" className="block py-2 px-4 hover:bg-teal-700 rounded-md">About</Link></li>
          <li><Link to="/blog" className="block py-2 px-4 hover:bg-teal-700 rounded-md">Blog</Link></li>
          <li><Link to="/skills" className="block py-2 px-4 hover:bg-teal-700 rounded-md">Skills</Link></li>
          <li><Link to="/contact" className="block py-2 px-4 hover:bg-teal-700 rounded-md">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
