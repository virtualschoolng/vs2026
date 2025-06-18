import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import useForm from '../hooks/useForm';

const WHATSAPP_LINK = "https://wa.me/2348012345678?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20the%20Virtual%20School%20of%20Nigeria.";

const ContactInfoItem = ({ icon, text, href }) => (
  <a href={href} className="flex items-center space-x-4 text-text-light hover:text-primary transition-colors">
    <span className="text-accent text-xl">{icon}</span>
    <span className="font-body">{text}</span>
  </a>
);

const Contact = () => {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = "Name is required.";
    if (!values.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!values.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // EmailJS credentials are loaded from environment variables
    const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_APP_EMAILJS_USER_ID;

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    setStatus('Sending...');

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setStatus('Message sent successfully!');
        alert('Message sent successfully!');
        resetForm();
        setTimeout(() => setStatus(''), 5000);
      }, (err) => {
        setStatus('Failed to send message. Please try again later.');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <div className="bg-background py-16 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary font-headline">Get in Touch</h1>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">Have a question or want to work with us? We'd love to hear from you. Fill out the form below or reach out through our contact channels.</p>
        </div>

        <div className="bg-surface rounded-card shadow-card overflow-hidden lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Contact Information Section */}
          <div className="p-8 sm:p-12 bg-primary/5">
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">Contact Information</h2>
            <div className="space-y-6">
              <ContactInfoItem icon={<FaMapMarkerAlt />} text="Oyo, Nigeria" href="#" />
              <ContactInfoItem icon={<FaPhone />} text="+234 80 123 45678" href="tel:+2348012345678" />
              <ContactInfoItem icon={<FaEnvelope />} text="virtualschool.com.ng@gmail.com" href="mailto:virtualschool.com.ng@gmail.com" />
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-primary mb-4 font-headline">Or chat with us directly:</h3>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-button shadow-md hover:bg-green-600 transition-all transform hover:scale-105">
                <FaWhatsapp className="mr-3 text-xl" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6 font-headline">Send Us a Message</h2>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-text mb-2">Full Name</label>
                <input type="text" name="name" id="name" value={values.name} onChange={handleChange} className={`block w-full px-4 py-3 bg-background border ${errors.name ? 'border-red-500' : 'border-border'} rounded-button focus:outline-none focus:ring-2 focus:ring-accent`} required />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-text mb-2">Email Address</label>
                <input type="email" name="email" id="email" value={values.email} onChange={handleChange} className={`block w-full px-4 py-3 bg-background border ${errors.email ? 'border-red-500' : 'border-border'} rounded-button focus:outline-none focus:ring-2 focus:ring-accent`} required />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-text mb-2">Message</label>
                <textarea name="message" id="message" rows="5" value={values.message} onChange={handleChange} className={`block w-full px-4 py-3 bg-background border ${errors.message ? 'border-red-500' : 'border-border'} rounded-button focus:outline-none focus:ring-2 focus:ring-accent`} required></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <div>
                <button type="submit" disabled={status === 'Sending...'} className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-button shadow-md text-lg font-bold text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all disabled:opacity-50">
                  <FaPaperPlane className="mr-3" />
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>
                {status && status !== 'Sending...' && <p className={`mt-4 text-center text-sm ${status.includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
