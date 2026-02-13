import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ variant = "default", isDark = false }) => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const getNavClass = () => {
    if (variant === "glass") {
      return "fixed top-0 w-full z-50 glass-nav";
    }
    return "sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10";
  };

  return (
    <nav className={getNavClass()}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-icons text-white">bolt</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white dark:text-white uppercase">
            Amica
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="hover:text-primary transition-colors text-white dark:text-slate-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/25">
          Book AI Growth Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
