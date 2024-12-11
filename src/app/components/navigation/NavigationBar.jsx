"use client"
import React, { useState } from "react";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-amber-950 bg-opacity-0 text-foreground shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
            <a href="/">
                <img src="/qn-logo-yellow.svg" alt="Qetsia's Logo" className="w-20 h-auto object-cover" />
            </a>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          {["About", "Projects", "Contact", "Resume"].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="hover:text-white cursor-pointer"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-icons">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["About", "Projects", "Contact", "Resume"].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="hover:text-teal-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
