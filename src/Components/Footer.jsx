import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <h3>Develop By <span>S M Simon Piar</span></h3>
      </div>
    </footer>
  );
};

export default Footer;
