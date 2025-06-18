import React from 'react';
import './Marquee.css';

const marqueeTexts = [
  'Interactive Courses',
  'Expert Instructors',
  'Flexible Learning',
  'Community Support',
  'Career Growth',
];

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-inner">
        {marqueeTexts.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
        {marqueeTexts.map((text, index) => (
          <span key={index + marqueeTexts.length}>{text}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
