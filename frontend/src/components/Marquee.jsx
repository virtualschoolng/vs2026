import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Marquee = () => {
  const updates = [
    "WAEC goes Hybrid in 2026 – Virtual School of Nigeria is fully prepared for this transition.",
    "Registration now open for WAEC, NECO, UTME, and BECE classes.",
    "Flexible online and hybrid learning for all levels – Basic, Junior Secondary, Senior Secondary.",
    "Join us today and prepare smarter for your future!"
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust speed as needed
    vertical: true, // For vertical scrolling
    verticalSwiping: true,
    arrows: false,
    cssEase: 'linear',
    pauseOnHover: true,
    speed: 1000, // Speed of the transition between slides
  };

  return (
    <div className="bg-blue-800 text-white py-3 overflow-hidden shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4">
        <Slider {...settings}>
          {updates.map((update, index) => (
            <div key={index} className="text-center text-lg font-medium">
              {update}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Marquee;
