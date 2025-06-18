import React from 'react';
import { Link } from 'react-router-dom';
import { teamBuilding } from '../assets/images'; // Using a placeholder image

const About = () => {
  const coreValues = [
    {
      title: 'Accessibility',
      description: 'We are committed to making education available to everyone, everywhere in Nigeria, with flexible learning options that fit diverse needs.',
    },
    {
      title: 'Innovation',
      description: 'We continuously explore and implement cutting-edge technology and teaching methods to create an engaging and effective learning experience.',
    },
    {
      title: 'Excellence',
      description: 'We uphold the highest standards in our curriculum, our teaching, and our support services to ensure our learners achieve their full potential.',
    },
  ];

  return (
    <div className="bg-background font-body text-text">
      <header className="bg-secondary text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold font-headline mb-4">About VIRTUAL SCHOOL OF NIGERIA</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Empowering Nigerians through accessible, quality education.</p>
      </header>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-secondary font-headline mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>The VIRTUAL SCHOOL OF NIGERIA was born from a simple yet powerful idea: to bridge the educational gap and make quality learning accessible to every Nigerian, regardless of their location or background.</p>
              <p>We saw the immense potential in our people and the need for a platform that could support learners at every stage of their journey—from primary school students building their foundational knowledge to adults seeking to master new skills for the digital age.</p>
              <p>Our mission is to create a robust, inclusive, and supportive online ecosystem that connects passionate educators with eager learners across the nation. We believe in leveraging technology to break down barriers, foster a love for learning, and empower the next generation of leaders, innovators, and thinkers.</p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src={teamBuilding} alt="A diverse team collaborating on a project" className="rounded-lg shadow-2xl w-full max-w-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold text-primary font-headline mb-4">Our Vision</h3>
            <p className="text-lg">To be Nigeria's leading online learning platform, recognized for our commitment to excellence, innovation, and educational equity.</p>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-200 pt-10 md:pt-0 md:pl-10">
            <h3 className="text-3xl font-bold text-accent font-headline mb-4">Our Mission</h3>
            <p className="text-lg">To provide a dynamic and comprehensive learning environment that offers quality education, fosters skill development, and supports remote learning for all Nigerians.</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary font-headline mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-background p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2">
                <h4 className="text-2xl font-bold text-secondary font-headline mb-3">{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white font-headline mb-4">Join Our Team</h2>
          <p className="text-xl text-white mb-8">Are you passionate about education and technology? Help us shape the future of learning in Nigeria.</p>
          <Link to="/contact" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-button shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">Become a Contributor</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
