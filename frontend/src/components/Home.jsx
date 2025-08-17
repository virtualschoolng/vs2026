import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaShieldAlt, FaMobileAlt, FaUserTie, FaBookOpen, FaGraduationCap, FaQuran, FaUserPlus, FaLaptopCode, FaBullhorn, FaTasks, FaQuoteLeft } from 'react-icons/fa';
import FeaturedCourses from './FeaturedCourses.jsx';
import Marquee from './Marquee.jsx';

// Reusable component for feature points in "What You'll Learn"
const LearningFeature = ({ icon, title, description }) => (
  <div className="bg-surface p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-accent text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-text font-headline mb-2">{title}</h3>
    <p className="text-text-light text-sm">{description}</p>
  </div>
);

// Reusable component for testimonials
const TestimonialCard = ({ quote, author, location }) => (
    <div className="bg-surface p-8 rounded-card shadow-card relative">
        <FaQuoteLeft className="text-gray-200 text-6xl absolute top-4 left-4 -z-10" />
        <p className="text-text italic text-lg mb-4 z-10 relative">"{quote}"</p>
        <p className="font-extrabold text-primary text-right">– {author}, {location}</p>
    </div>
);

const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <Marquee />

    {/* About Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Virtual School of Nigeria</h2>
        <p className="text-lg text-text-light leading-relaxed">
          Virtual School of Nigeria is an innovative online educational platform dedicated to providing interactive classes,
          comprehensive exam preparations, and personalized consultations for Nigerian students nationwide.
          We are committed to empowering students with quality education and preparing them for academic excellence and future success.
        </p>
      </div>
    </section>

    {/* Programs Section */}
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Educational Programs
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Western Education */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 p-4 rounded-full w-max mx-auto mb-6">
              <FaGraduationCap className="text-primary text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Western Education</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Primary - Secondary Curriculum</li>
              <li>STEM Subjects</li>
              <li>WAEC/JAMB Prep</li>
            </ul>
          </div>

          {/* Arabic/Islamic Education */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 p-4 rounded-full w-max mx-auto mb-6">
              <FaQuran className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Arabic & Islamic Studies</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Qur'an Recitation</li>
              <li>Tajweed & Fiqh</li>
              <li>Arabic Language</li>
            </ul>
          </div>

          {/* Computer Education */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 p-4 rounded-full w-max mx-auto mb-6">
              <FaLaptopCode className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Digital Skills Training</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Basic Computer Literacy</li>
              <li>Programming Fundamentals</li>
              <li>Advanced ICT Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-background text-center py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-accent font-headline mb-4 leading-tight">
          Welcome to Virtual School of Nigeria
        </h1>
        <p className="text-xl md:text-2xl text-text font-semibold mb-6">
          Nigeria’s #1 online platform for learning, teaching, and future skills.
        </p>
        <p className="text-lg text-text-light max-w-3xl mx-auto mb-10">
          From Nursery 1 to SS3 – plus ICT, AI, Leadership, and Project Management courses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/register?trial=true"
            className="bg-accent text-white font-bold py-3 px-8 rounded-button shadow-md hover:bg-accent-dark transition duration-300 ease-in-out inline-flex items-center w-full sm:w-auto justify-center"
          >
            Start Free Trial
          </Link>
          <Link
            to="/pricing"
            className="bg-accent text-white font-bold py-3 px-8 rounded-button shadow-md hover:bg-accent-hover transition duration-300 ease-in-out inline-flex items-center w-full sm:w-auto justify-center"
          >
            View Subscription Plans
          </Link>
          <a
            href="https://wa.me/2347062314302"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white font-bold py-3 px-8 rounded-button shadow-md hover:bg-whatsapp-dark transition duration-300 ease-in-out inline-flex items-center w-full sm:w-auto justify-center"
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent font-headline mb-3">
            What You’ll Learn
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">A complete curriculum designed for academic success and real-world skills.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-surface p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-accent text-4xl mb-4"><FaBookOpen /></div>
            <h3 className="text-xl font-bold text-text font-headline mb-2">Nigerian Curriculum</h3>
            <p className="text-text-light text-base">Full coverage of all subjects from Nursery 1 to SS3, following the official NERDC curriculum.</p>
          </div>
          <div className="bg-surface p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-accent text-4xl mb-4"><FaLaptopCode /></div>
            <h3 className="text-xl font-bold text-text font-headline mb-2">Web, AI & Digital Skills</h3>
            <p className="text-text-light text-base">Master in-demand technologies like Web Design, AI, Cybersecurity, and other critical digital skills.</p>
          </div>
          <div className="bg-surface p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-accent text-4xl mb-4"><FaBullhorn /></div>
            <h3 className="text-xl font-bold text-text font-headline mb-2">Life & Leadership Skills</h3>
            <p className="text-text-light text-base">Develop essential soft skills including Public Speaking, Time Management, and effective leadership.</p>
          </div>
          <div className="bg-surface p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-accent text-4xl mb-4"><FaTasks /></div>
            <h3 className="text-xl font-bold text-text font-headline mb-2">Career & Project Management</h3>
            <p className="text-text-light text-base">Gain practical knowledge in Project Management and career planning to prepare for the future.</p>
          </div>
        </div>
      </div>
    </section>

    <FeaturedCourses />

    {/* Testimonials Section */}
    <section className="bg-background py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent font-headline">Hear From Our Community</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-surface p-8 rounded-card shadow-card relative hover:shadow-card-hover transition-shadow duration-300">
              <FaQuoteLeft className="text-gray-200 text-6xl absolute top-4 left-4 -z-10" />
              <p className="text-text italic text-lg mb-4 z-10 relative">"My children learn every day now — even better than at regular school!"</p>
              <p className="font-extrabold text-accent text-right">– Aisha, Abuja</p>
          </div>
          <div className="bg-surface p-8 rounded-card shadow-card relative hover:shadow-card-hover transition-shadow duration-300">
              <FaQuoteLeft className="text-gray-200 text-6xl absolute top-4 left-4 -z-10" />
              <p className="text-text italic text-lg mb-4 z-10 relative">"The AI and ICT courses are a blessing to my teenage son."</p>
              <p className="font-extrabold text-accent text-right">– Mr. Okoro, Lagos</p>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Section */}
    <section className="py-20 bg-surface">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center bg-surface p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <FaUserTie className="text-accent text-5xl mb-4" />
            <h3 className="text-xl font-bold text-text mb-2">Certified Nigerian Educators</h3>
            <p className="text-text-light">Learn from the best tutors, vetted for excellence and experience.</p>
          </div>
          <div className="flex flex-col items-center bg-surface p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <FaMobileAlt className="text-accent text-5xl mb-4" />
            <h3 className="text-xl font-bold text-text mb-2">Safe, Mobile-Friendly Learning</h3>
            <p className="text-text-light">Access courses anytime, anywhere, on any device in a secure environment.</p>
          </div>
          <div className="flex flex-col items-center bg-surface p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
            <FaShieldAlt className="text-accent text-5xl mb-4" />
            <h3 className="text-xl font-bold text-text mb-2">Backed by Real Skills</h3>
            <p className="text-text-light">Our curriculum is designed to provide practical, applicable knowledge for the future.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
