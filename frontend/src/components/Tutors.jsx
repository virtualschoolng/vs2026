import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';

const Tutors = () => {
  usePageMetadata({
    title: 'Virtual School of Nigeria | Expert Online Tutors',
    description: 'Meet our highly qualified and experienced online tutors for WAEC, NECO, JAMB, BECE, and Common Entrance exam preparation.'
  });
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Meet Our Expert Tutors
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Our dedicated team of experienced tutors is committed to providing personalized and effective online education.
        </p>
        {/* Placeholder for Tutor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tutor Card Example */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/150" alt="Experienced Mathematics online tutor in Lagos, Nigeria" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Tutor Name</h3>
            <p className="text-gray-700">Subject Expert</p>
            <p className="text-gray-500 text-sm mt-2">"Passionate about teaching and helping students achieve their full potential."</p>
          </div>
          {/* Add more tutor cards here */}
        </div>
      </div>
    </section>
  );
};

export default Tutors;