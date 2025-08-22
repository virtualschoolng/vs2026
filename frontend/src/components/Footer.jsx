import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const FooterLink = ({ to, children }) => (
    <Link to={to} className="text-text-light hover:text-accent transition-colors duration-300">
      {children}
    </Link>
  );

  const SocialLink = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-text-light hover:text-accent transition-colors duration-300">
      {icon}
    </a>
  );

  return (
    <footer className="bg-background text-white font-body">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} className="h-12" alt="Virtual School of Nigeria Logo" />
              <span className="text-2xl font-extrabold font-headline text-accent">VIRTUAL SCHOOL OF NIGERIA</span>
            </Link>
            <p className="text-text-light max-w-sm text-base">
              Virtual School of Nigeria offers <strong class="text-primary-dark">online tutoring</strong>, <strong class="text-primary-dark">WAEC, NECO, JAMB, BECE, Common Entrance exam preparation</strong>, and <strong class="text-primary-dark">skills development courses</strong> for Nigerian students. We provide <strong class="text-primary-dark">affordable online classes</strong> with <strong class="text-primary-dark">expert Nigerian tutors</strong>, focusing on <strong class="text-primary-dark">academic excellence</strong> and <strong class="text-primary-dark">future success</strong>.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase mb-4 text-text">Quick Links</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/courses">Courses</FooterLink></li>
              <li><FooterLink to="/tutors">Our Tutors</FooterLink></li>
              <li><FooterLink to="/pricing">Pricing Plans</FooterLink></li>
              <li><FooterLink to="/blog">Blog</FooterLink></li>
              <li><FooterLink to="/contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase mb-4 text-text">Contact Info</h3>
            <ul className="space-y-3 text-text-light">
              <li>Email: info@virtualschool.com.ng</li>
              <li>Phone: +234 801 234 5678</li>
              <li>Address: 123 School Road, Abuja, Nigeria</li>
              <li>
                <a href="https://wa.me/2347062314302" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-accent transition-colors duration-300 flex items-center">
                  <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase mb-4 text-text">Company</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/faq">FAQs</FooterLink></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider uppercase mb-4 text-text">Legal</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink to="/faq">FAQ</FooterLink></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-1 md:col-span-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase mb-4 text-text">Ready to Start?</h3>
            <p className="text-text-light mb-4">Join our community of learners today!</p>
            <a
              href="https://forms.gle/uo2e8iha1F1etHED6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-button shadow-sm text-white bg-accent hover:bg-accent-dark transition-colors duration-300"
            >
              Book Free Trial Class 🚀
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-text-light text-sm">
            &copy; {new Date().getFullYear()} VIRTUAL SCHOOL OF NIGERIA. All Rights Reserved.
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <SocialLink href="#" icon={<FaFacebook size={24} />} label="Facebook" />
            <SocialLink href="#" icon={<FaTwitter size={24} />} label="Twitter" />
            <SocialLink href="#" icon={<FaLinkedin size={24} />} label="LinkedIn" />
            <SocialLink href="#" icon={<FaInstagram size={24} />} label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
