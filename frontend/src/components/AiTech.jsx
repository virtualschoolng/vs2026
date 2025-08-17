import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaCode, FaDatabase, FaShieldAlt, FaRocket, FaProjectDiagram, FaUserTie } from 'react-icons/fa';
import { aiTechHeroImage } from '../assets/images';

const learningTracks = [
  {
    title: 'Artificial Intelligence',
    description: 'Explore neural networks, machine learning, and prompt engineering to build intelligent systems.',
    icon: <FaBrain className="w-12 h-12 text-accent" />,
  },
  {
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript, and modern frameworks like React to build stunning websites.',
    icon: <FaCode className="w-12 h-12 text-accent" />,
  },
  {
    title: 'Data Science',
    description: 'Learn to analyze data, create visualizations, and extract valuable insights with Python and SQL.',
    icon: <FaDatabase className="w-12 h-12 text-accent" />,
  },
  {
    title: 'Cybersecurity',
    description: 'Understand the fundamentals of digital security to protect networks and data from threats.',
    icon: <FaShieldAlt className="w-12 h-12 text-accent" />,
  },
];

const benefits = [
    { title: 'Hands-On Projects', description: 'Apply your skills by building real-world projects for your portfolio.', icon: <FaProjectDiagram className="w-10 h-10 text-accent" /> },
    { title: 'Expert Instructors', description: 'Learn from industry professionals with years of practical experience.', icon: <FaUserTie className="w-10 h-10 text-accent" /> },
    { title: 'Career-Ready Skills', description: 'Gain the in-demand skills needed to launch or advance your tech career.', icon: <FaRocket className="w-10 h-10 text-accent" /> },
];

const AiTech = () => {
  return (
    <div className="bg-background font-body">
      <header 
        className="relative bg-no-repeat bg-cover bg-center text-white text-center py-28 px-4"
        style={{ backgroundImage: `url(${aiTechHeroImage})` }}
      >
        <div className="absolute inset-0 bg-accent opacity-20"></div>
        <div className="relative z-10">
            <h1 className="text-5xl font-extrabold font-headline mb-4 text-white">Step into the Future of Technology</h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">Master in-demand AI and tech skills with expert-led courses designed for the next generation of innovators in Nigeria.</p>
            <Link to="/courses" className="bg-accent text-white font-bold py-4 px-8 rounded-button shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-105 inline-block">
                Explore Tech Courses
            </Link>
        </div>
      </header>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-accent font-headline">Explore Our Learning Tracks</h2>
            <p className="mt-4 text-lg text-text-light max-w-3xl mx-auto">From AI to Cybersecurity, our curriculum is designed to make you a tech pro.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {learningTracks.map((track) => (
              <div key={track.title} className="bg-surface p-8 rounded-card shadow-card text-center transform transition-transform hover:-translate-y-2 hover:shadow-lg flex flex-col items-center">
                <div className="mb-6">{track.icon}</div>
                <h3 className="text-2xl font-extrabold text-text font-headline mb-3">{track.title}</h3>
                <p className="text-text-light flex-grow">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 text-center">
            {benefits.map(benefit => (
                <div key={benefit.title} className="flex flex-col items-center">
                    <div className="bg-surface p-5 rounded-full shadow-md mb-5">{benefit.icon}</div>
                    <h3 className="text-xl font-extrabold text-text font-headline mb-2">{benefit.title}</h3>
                    <p className="text-text-light">{benefit.description}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="bg-accent text-white text-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold font-headline mb-4 text-white">Ready to Build the Future?</h2>
            <p className="text-xl text-white mb-8">Your journey into tech starts now. Enroll today and gain the skills to create, innovate, and lead.</p>
            <Link to="/register" className="bg-background text-white font-bold py-4 px-8 rounded-button shadow-lg hover:bg-surface transition-transform transform hover:scale-105 inline-block">
              Start Learning Now
            </Link>
        </div>
      </section>
    </div>
  );
};


export default AiTech;
