import React from 'react';

const adTexts = [
  'Unlock your potential: learn new skills anytime, anywhere.',
  'Share your expertise: become an instructor and inspire others.',
  'Explore a world of knowledge with our diverse course catalog.',
  'Join a community dedicated to lifelong learning and growth.',
  'The future of education is here. Start your journey today.'
];

const AdScroller = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-secondary border-t-2 border-b-2 border-gray-700 shadow-md">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-scroll">
          {adTexts.map((text, index) => (
            <span key={index} className="mx-8 text-lg font-medium text-white">{text}</span>
          ))}
          {adTexts.map((text, index) => (
            <span key={`duplicate-${index}`} className="mx-8 text-lg font-medium text-white">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default AdScroller;
