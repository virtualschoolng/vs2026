import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
// Import both logo formats for better browser compatibility
import logoJpg from '../assets/logo.jpg';
import logoSvg from '../assets/logo.svg';

const ExternalLink = ({ to, text, className, onClick }) => (
  <a 
    href={to} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`inline-block text-center ${className}`} 
    onClick={onClick}
  >
    {text}
  </a>
);

const NavLinks = ({ className, linkClassName, onLinkClick, isMobile }) => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/tutors", text: "Tutors" },
    { to: "/curriculum", text: "Curriculum" },
    { to: "/pricing", text: "Pricing" },
    { to: "/contact", text: "Contact Us" },
  ];

  const baseLinkClasses = "relative group transition-colors duration-200";
  const activeLinkClasses = "text-accent font-semibold";
  const hoverUnderline = "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full";

  return (
    <nav className={className}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onLinkClick}
          className={({ isActive }) =>
            `${baseLinkClasses} ${linkClassName} ${
              isActive ? activeLinkClasses : 'text-gray-700 hover:text-accent'
            } ${hoverUnderline} ${isMobile ? 'py-2 px-4 rounded-lg hover:bg-gray-50' : ''}`
          }
        >
          {link.text}
          {link.isBold && (
            <span className="ml-2 bg-accent text-white text-xs px-2 py-0.5 rounded-full">
              New
            </span>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('button[aria-label="Toggle menu"]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'spring',
        damping: 30,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: { 
        type: 'spring',
        damping: 30,
        stiffness: 300
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-all duration-300 shadow-sm ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center"
              onClick={closeMenu}
            >
              <div className="flex items-center">
                <picture>
                  <source srcSet={logoSvg} type="image/svg+xml" />
                  <img 
                    src={logoJpg} 
                    className="h-10 w-auto object-contain" 
                    alt="Virtual School of Nigeria"
                  />
                </picture>
                <span className="ml-2 text-base md:text-lg font-bold text-accent whitespace-nowrap">
                  VIRTUAL SCHOOL OF NIGERIA
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks 
              className="flex space-x-6" 
              linkClassName="px-3 py-2 text-sm font-medium"
            />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-accent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition-colors duration-200"
              aria-expanded="false"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              ref={menuRef}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <span className="text-lg font-bold text-accent">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                  >
                    <FaTimes className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="p-4 flex-1 overflow-y-auto">
                  <nav className="space-y-2">
                    <NavLinks
                      className="space-y-2"
                      linkClassName="block py-3 px-4 rounded-md text-gray-700 hover:bg-gray-50 hover:text-accent"
                      onLinkClick={closeMenu}
                      isMobile={true}
                    />
                  </nav>
                  {/* Removed login and signup buttons from mobile menu */}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
