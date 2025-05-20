import React, { useState, useEffect } from "react";

export default function Header() {
  const navItems = [
    "Home",
    "Features",
    "Services",
    "Reviews",
    "Team",
    "Pricing",
    "Contact",
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 px-8 py-4 flex items-center justify-between transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ borderBottom: scrolled ? "none" : "1px solid #e5e7eb" }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-green-600">Sedap.</span>
      </div>

      {/* Nav Links */}
      <nav>
        <ul className="flex space-x-6 text-sm font-medium text-slate-900">
          {navItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:text-green-500 transition ${
                item === "Features" ? "text-white-500" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Create Account Button */}
      <button className="bg-green-400 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-green-500 transition border-none focus:outline-none">
        Login
      </button>
    </header>
  );
}
