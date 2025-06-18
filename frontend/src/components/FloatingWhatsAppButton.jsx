import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_LINK = 'https://wa.me/2349049656467';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
