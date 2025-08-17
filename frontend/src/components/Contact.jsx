import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const ContactInfoItem = ({ icon, text, href }) => (
  <a href={href} className="flex items-center space-x-4 text-text-light hover:text-accent transition-colors">
    <span className="text-accent text-xl">{icon}</span>
    <span className="font-body">{text}</span>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name} (${email})`;
    const body = message;
    window.location.href = `mailto:info@virtualschool.com.ng?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-background py-16 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent font-headline">Get in Touch</h1>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">Have a question or want to work with us? We'd love to hear from you. Reach out through our contact channels.</p>
        </div>

        <div className="bg-surface rounded-card shadow-card overflow-hidden lg:grid lg:grid-cols-2 lg:gap-x-12">
          {/* Contact Information Section */}
          <div className="p-8 sm:p-12 bg-background rounded-l-card">
            <h2 className="text-2xl font-extrabold text-accent mb-6 font-headline">Contact Information</h2>
            <div className="space-y-6">
              <ContactInfoItem icon={<FaEnvelope />} text="info@virtualschool.com.ng" href="mailto:info@virtualschool.com.ng" />
              <ContactInfoItem icon={<FaPhone />} text="+2347062314302" href="tel:+2347062314302" />
              <ContactInfoItem icon={<FaWhatsapp />} text="+2348148491058" href="https://wa.me/2348148491058" />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold text-accent mb-6 font-headline">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-input-background text-text"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-input-background text-text"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-input-background text-text"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-accent text-white font-bold py-3 px-8 rounded-button shadow-md hover:bg-accent-dark transition duration-300 ease-in-out w-full"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
