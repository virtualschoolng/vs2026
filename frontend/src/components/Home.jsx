import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaShieldAlt, FaMobileAlt, FaUserTie, FaBookOpen, FaLaptopCode, FaBullhorn, FaTasks, FaQuoteLeft } from 'react-icons/fa';
import FeaturedCourses from './FeaturedCourses.jsx';
import HeroCarousel from './HeroCarousel.jsx';

// Reusable component for feature points in "What You'll Learn"
const LearningFeature = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-primary text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-secondary font-headline mb-2">{title}</h3>
    <p className="text-text text-sm">{description}</p>
  </div>
);

// Reusable component for testimonials
const TestimonialCard = ({ quote, author, location }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg relative">
        <FaQuoteLeft className="text-gray-200 text-6xl absolute top-4 left-4 -z-10" />
        <p className="text-text-light italic text-lg mb-4 z-10 relative">"{quote}"</p>
        <p className="font-bold text-primary text-right">– {author}, {location}</p>
    </div>
);

const Home = () => {
  return (
    <div className="bg-background font-body text-text">
      <HeroCarousel />

      {/* Hero Section */}
      <section className="bg-white text-center py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary font-headline mb-4">
            Welcome to Virtual School of Nigeria
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Nigeria’s #1 online platform for learning, teaching, and future skills.
          </p>
          <p className="text-lg text-text-light max-w-3xl mx-auto mb-10">
            From Nursery 1 to SS3 – plus ICT, AI, Leadership, and Project Management courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/register?trial=true" // We can use a query param to trigger trial signup flow
              className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-primary-hover transition-all transform hover:scale-105 inline-flex items-center w-full sm:w-auto justify-center"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-accent-hover transition-all transform hover:scale-105 inline-flex items-center w-full sm:w-auto justify-center"
            >
              View Subscription Plans
            </Link>
            <a
              href="https://wa.me/2347062314302"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition-all transform hover:scale-105 inline-flex items-center w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="mr-2" /> Chat with Us
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-background">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary font-headline mb-3">
              What You’ll Learn
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">A complete curriculum designed for academic success and real-world skills.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LearningFeature
              icon={<FaBookOpen />}
              title="Nigerian Curriculum"
              description="Full coverage of all subjects from Nursery 1 to SS3, following the official NERDC curriculum."
            />
            <LearningFeature
              icon={<FaLaptopCode />}
              title="Web, AI & Digital Skills"
              description="Master in-demand technologies like Web Design, AI, Cybersecurity, and other critical digital skills."
            />
            <LearningFeature
              icon={<FaBullhorn />}
              title="Life & Leadership Skills"
              description="Develop essential soft skills including Public Speaking, Time Management, and effective leadership."
            />
            <LearningFeature
              icon={<FaTasks />}
              title="Career & Project Management"
              description="Gain practical knowledge in Project Management and career planning to prepare for the future."
            />
          </div>
        </div>
      </section>

      <FeaturedCourses />

      {/* Testimonials Section */}
      <section className="bg-surface py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary font-headline">Hear From Our Community</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <TestimonialCard
              quote="My children learn every day now — even better than at regular school!"
              author="Aisha"
              location="Abuja"
            />
            <TestimonialCard
              quote="The AI and ICT courses are a blessing to my teenage son."
              author="Mr. Okoro"
              location="Lagos"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaUserTie className="text-accent text-5xl mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Certified Nigerian Educators</h3>
              <p className="text-text-light">Learn from the best tutors, vetted for excellence and experience.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMobileAlt className="text-accent text-5xl mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Safe, Mobile-Friendly Learning</h3>
              <p className="text-text-light">Access courses anytime, anywhere, on any device in a secure environment.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-accent text-5xl mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Backed by Real Skills</h3>
              <p className="text-text-light">Our curriculum is designed to provide practical, applicable knowledge for the future.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
