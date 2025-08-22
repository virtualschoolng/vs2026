import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const NavLinks = ({ className, linkClassName, onLinkClick }) => {
  const links = [
    { to: "/learn", text: "Learn" },
    { to: "/teach", text: "Teach" },
    { to: "/courses", text: "Courses" },
    { to: "/ai-courses", text: "AI & ICT" },
    { to: "/faq", text: "FAQs" },
    { to: "/contact", text: "Contact" },
    { to: "/pricing", text: "Pricing" },
  ];

  const baseLinkClasses = "hover:text-accent transition-colors duration-300";
  const activeLinkClasses = "text-accent font-semibold";

  return (
    <nav className={className}>
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onLinkClick}
          className={({ isActive }) => `${baseLinkClasses} ${linkClassName} ${isActive ? activeLinkClasses : 'text-text-light'}`}
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`bg-surface/80 backdrop-blur-lg text-text sticky top-0 z-50 font-body transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
          <img src={logo} className="h-10" alt="Virtual School of Nigeria Logo" />
          <span className="self-center text-xl font-bold whitespace-nowrap font-headline text-accent">
            VIRTUAL SCHOOL OF NIGERIA
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks className="flex items-center space-x-8 font-medium" />
          <Link to="/login" className="font-medium text-text-light hover:text-accent transition-colors duration-300">Login</Link>
          <Link to="/register" className="bg-accent text-white font-bold py-2 px-5 rounded-button shadow-md hover:bg-accent-dark transition-all transform hover:scale-105">Get Started</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-2xl text-text">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-surface transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center px-4 py-8">
          <NavLinks
            className="flex flex-wrap justify-center w-full gap-x-2 gap-y-4
            linkClassName="text-lg w-1/3 text-center py-2"
            onLinkClick={closeMenu}
          />
          <div className="flex flex-col items-center space-y-6 pt-6 w-full">
            <Link to="/login" onClick={closeMenu} className="font-medium text-xl text-text-light hover:text-accent">Login</Link>
            <Link to="/register" onClick={closeMenu} className="bg-accent text-white font-bold py-3 px-8 rounded-button shadow-lg text-xl w-full text-center">Get Started</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
