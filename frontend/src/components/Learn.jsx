import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const pricingPlans = [
  {
    name: 'Basic Learner',
    price: '₦5,000',
    period: 'per month',
    features: [
      'Access to all Primary & Secondary subjects',
      '2 Live classes per week',
      'Recorded lesson library',
      'Basic progress tracking',
    ],
    cta: 'Start with Basic',
    popular: false,
  },
  {
    name: 'Pro Learner',
    price: '₦15,000',
    period: 'per month',
    features: [
      'Everything in Basic, plus:',
      'Unlimited Live classes',
      'Personalized learning paths',
      'AI-powered homework help',
      'Monthly performance reports',
    ],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Premium Learner',
    price: '₦30,000',
    period: 'per month',
    features: [
      'Everything in Pro, plus:',
      'Access to specialized Tech/AI courses',
      'One-on-one mentorship sessions',
      'Career guidance & university prep',
      'Priority support',
    ],
    cta: 'Go Premium',
    popular: false,
  },
];

const testimonials = [
    {
        quote: 'The live classes are so engaging! I finally understand Mathematics, all thanks to my amazing tutor.',
        name: 'Chiamaka Okoro',
        class: 'SS2 Student',
        image: 'https://i.pravatar.cc/150?img=5',
    },
    {
        quote: 'VIRTUAL SCHOOL OF NIGERIA helped me prepare for my Common Entrance exams. I passed with flying colours!',
        name: 'David Adeleke',
        class: 'Primary 6 Pupil',
        image: 'https://i.pravatar.cc/150?img=12',
    },
];

const PricingCard = ({ plan }) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 flex flex-col ${plan.popular ? 'border-4 border-primary' : 'border border-gray-200'}`}>
    {plan.popular && (
      <div className="bg-primary text-white text-xs font-bold rounded-full px-4 py-1 self-center mb-4 -mt-12">MOST POPULAR</div>
    )}
    <h3 className="text-2xl font-bold text-secondary text-center font-headline">{plan.name}</h3>
    <p className="text-4xl font-bold text-center my-4">{plan.price} <span className="text-lg font-normal text-gray-500">{plan.period}</span></p>
    <p className="text-center text-gray-600 mb-6 h-12">{plan.description}</p>
    <ul className="space-y-4 text-text mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <FaCheckCircle className="text-primary w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/register" className={`mt-auto w-full text-center font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 ${plan.popular ? 'bg-primary text-white shadow-lg hover:bg-primary-dark' : 'bg-gray-200 text-secondary hover:bg-gray-300'}`}>
      {plan.cta}
    </Link>
  </div>
);

const Learn = () => {
  return (
    <div className="bg-background font-body">
      <header className="bg-secondary text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold font-headline mb-4">Unlock Your Potential</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">Join thousands of learners achieving their academic and career goals with our expert-led courses.</p>
        <Link to="/register" className="bg-primary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-105 inline-block">
          Start Your 7-Day Free Trial
        </Link>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-secondary font-headline">Choose Your Plan</h2>
            <p className="mt-4 text-lg text-text max-w-2xl mx-auto">Flexible plans for every learner. Start for free and upgrade anytime.</p>
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {pricingPlans.map(plan => <PricingCard key={plan.name} plan={plan} />)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary font-headline">What Our Learners Say</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover border-4 border-accent mb-4" />
                <p className="text-text italic text-lg mb-4">“{testimonial.quote}”</p>
                <cite className="font-bold text-secondary not-italic text-xl">{testimonial.name}</cite>
                <p className="text-gray-500">{testimonial.class}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Learn;
