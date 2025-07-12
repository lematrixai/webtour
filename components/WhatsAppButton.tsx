'use client';

import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+255778878787';
  const message = 'Hello! I would like to inquire about your luxury adventure tours.';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 bg-green-500 hover:bg-green-600 text-white px-8 rounded-l-lg shadow-lg transition-colors duration-200"
      aria-label="Contact us on WhatsApp"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      <span className="text-lg font-medium">Whats App</span>
    </button>
  );
};

export default WhatsAppButton; 