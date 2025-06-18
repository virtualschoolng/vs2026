import React from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaLaptopCode, FaClock, FaHeart, FaUserCheck, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';
import { happyTutor } from '../assets/images'; // Placeholder for a happy tutor

const benefits = [
  { title: 'Competitive Earnings', description: 'Earn a 70% revenue share on your courses. We succeed when you succeed.', icon: <FaDollarSign className="w-10 h-10 mx-auto text-accent" /> },
  { title: 'Teach Your Way', description: 'Enjoy the flexibility to create courses and teach from anywhere, on your own schedule.', icon: <FaLaptopCode className="w-10 h-10 mx-auto text-accent" /> },
  { title: 'Tools for Success', description: 'Utilize our intuitive platform, AI tools, and resources to create engaging learning experiences.', icon: <FaRocket className="w-10 h-10 mx-auto text-accent" /> },
  { title: 'Make an Impact', description: 'Inspire the next generation of learners and share your passion with students across Nigeria.', icon: <FaHeart className="w-10 h-10 mx-auto text-accent" /> },
];

const steps = [
    { title: 'Submit Your Application', description: 'Tell us about your expertise and teaching experience.', icon: <FaUserCheck className="w-12 h-12 text-primary" /> },
    { title: 'Get Verified', description: 'Our team will review your application and guide you through the verification process.', icon: <FaChalkboardTeacher className="w-12 h-12 text-primary" /> },
    { title: 'Start Teaching', description: 'Once approved, you can create your courses, set your schedule, and start earning.', icon: <FaRocket className="w-12 h-12 text-primary" /> },
];

const testimonials = [
    {
        quote: 'The platform is incredibly user-friendly, and the support from the VSN team is outstanding. I was able to launch my first course in days!',
        name: 'Mrs. Funke Adebayo',
        subject: 'Chemistry Tutor',
        image: 'https://i.pravatar.cc/150?img=47',
    },
    {
        quote: 'I love the flexibility. I can teach from home and still reach so many students. It has been a rewarding experience.',
        name: 'Mr. Emeka Nwosu',
        subject: 'Mathematics & AI Tutor',
        image: 'https://i.pravatar.cc/150?img=68',
    },
];

const Teach = () => {
  return (
    <div className="bg-background font-body">
      <header className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-white font-headline mb-4">Share Your Passion. Shape the Future.</h1>
            <p className="text-xl text-gray-300 font-body mb-8">Join our community of expert tutors and empower learners across Nigeria. Earn, inspire, and grow with us.</p>
            <Link to="/register" className="bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-105 inline-block">
              Become a Tutor Today
            </Link>
          </div>
          <div className="hidden md:flex justify-center">
            <img src={happyTutor} alt="A happy Nigerian tutor teaching online" className="rounded-lg shadow-2xl w-full max-w-md object-cover"/>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-secondary font-headline">Why Teach With Us?</h2>
            <p className="mt-4 text-lg text-text max-w-3xl mx-auto">We provide the platform, you provide the expertise. Together, we create unparalleled learning experiences.</p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-background p-8 rounded-xl shadow-lg text-center transform transition-transform hover:-translate-y-2">
                {benefit.icon}
                <h3 className="text-xl font-bold text-secondary font-headline mt-6 mb-2">{benefit.title}</h3>
                <p className="text-text">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-secondary font-headline">How to Get Started</h2>
                <p className="mt-4 text-lg text-text">Our simple three-step process makes it easy to join our community.</p>
            </div>
            <div className="mt-16 space-y-12">
                {steps.map((step, index) => (
                    <div key={step.title} className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0 bg-primary-light p-4 rounded-full">{step.icon}</div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-secondary font-headline">Step {index + 1}: {step.title}</h3>
                            <p className="mt-2 text-text">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary font-headline">Hear From Our Tutors</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-background p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover border-4 border-accent mb-4" />
                <p className="text-text italic text-lg mb-4">“{testimonial.quote}”</p>
                <cite className="font-bold text-secondary not-italic text-xl">{testimonial.name}</cite>
                <p className="text-gray-500">{testimonial.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary text-white text-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold font-headline mb-4">Ready to Inspire?</h2>
            <p className="text-xl text-gray-300 mb-8">Join a vibrant community of educators and start making a difference today. Your journey starts here.</p>
            <Link to="/register" className="bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-105 inline-block">
              Apply to Be a Tutor
            </Link>
        </div>
      </section>
    </div>
  );
};


export default Teach;
