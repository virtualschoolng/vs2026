import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Footer = () => {
  const FooterLink = ({ to, children }) => (
    <Link to={to} className="text-gray-300 hover:text-white transition-colors duration-300">
      {children}
    </Link>
  );

  const SocialLink = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-300 hover:text-accent transition-colors duration-300">
      {icon}
    </a>
  );

  return (
    <footer className="bg-primary text-white font-body">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} className="h-10" alt="Virtual School of Nigeria Logo" />
              <span className="text-xl font-bold font-headline">VIRTUAL SCHOOL OF NIGERIA</span>
            </Link>
            <p className="text-gray-300 max-w-sm">
              Redefining education for the Nigerian child and empowering the next generation of leaders, creators, and innovators.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/learn">Learn</FooterLink></li>
              <li><FooterLink to="/teach">Teach</FooterLink></li>
              <li><FooterLink to="/courses">Courses</FooterLink></li>
              <li><FooterLink to="/aitech">AI & Tech</FooterLink></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
              <li><FooterLink to="/faq">FAQs</FooterLink></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-md font-semibold tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-hover pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} VIRTUAL SCHOOL OF NIGERIA. All Rights Reserved.
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <SocialLink href="#" icon={<FaFacebook size={20} />} label="Facebook" />
            <SocialLink href="#" icon={<FaTwitter size={20} />} label="Twitter" />
            <SocialLink href="#" icon={<FaLinkedin size={20} />} label="LinkedIn" />
            <SocialLink href="#" icon={<FaInstagram size={20} />} label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
