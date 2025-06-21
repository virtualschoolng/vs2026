import React, { useState } from 'react';
import { FaCheckCircle, FaWhatsapp, FaLock, FaPaintBrush, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ScholarshipModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName: e.target.fullName.value,
      ageLevel: e.target.ageLevel.value,
      contact: e.target.contact.value,
      reason: e.target.reason.value,
    };

    try {
      const response = await fetch('http://localhost:5000/forms/scholarship-apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 3000);
      } else {
        // You could add more specific error handling here
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Failed to submit application:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        {submitted ? (
          <div className="text-center">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-secondary mb-2">Submission Received!</h2>
            <p className="text-gray-600">Thank you! We’ll contact you soon about your scholarship eligibility.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-secondary mb-4">Apply for Scholarship</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input type="text" id="fullName" name="fullName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div className="mb-4">
                <label htmlFor="ageLevel" className="block text-gray-700 font-semibold mb-2">Age / Class Level</label>
                <input type="text" id="ageLevel" name="ageLevel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div className="mb-4">
                <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">Parent or Sponsor's Contact (Phone or Email)</label>
                <input type="text" id="contact" name="contact" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div className="mb-6">
                <label htmlFor="reason" className="block text-gray-700 font-semibold mb-2">Reason for Scholarship Request</label>
                <textarea id="reason" name="reason" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button type="button" onClick={onClose} className="py-2 px-6 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                <button type="submit" className="py-2 px-6 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover">Submit Application</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [isScholarshipModalOpen, setScholarshipModalOpen] = useState(false);

  const plans = {
    monthly: {
      name: 'Virtual School of Nigeria Access – Monthly',
      price: 15750, // 5% increase from 15000
      description: 'Full access to all classes (Nursery to SS3), AI and ICT courses, life & leadership skills, assignments, support and weekly content updates. Cancel anytime.',
      features: [
        'Full access to all classes (Nursery to SS3)',
        'AI and ICT courses',
        'Life & leadership skills',
        'Assignments & support',
        'Weekly content updates',
        'Cancel anytime',
      ],
      link: 'https://paystack.shop/pay/zdudn2t22s',
    },
    quarterly: {
      name: 'Virtual School of Nigeria Access – Quarterly',
      price: 40000,
      description: '3-month full access to all academic and professional content. Ideal for serious learners following a school-term plan.',
      features: [
        'All Monthly Plan features',
        '3-month full access',
        'Ideal for term-based learning',
        'Save ₦5,000 vs. monthly',
      ],
      link: 'https://paystack.shop/pay/y0oykaap6z',
    },
    yearly: {
      name: 'Virtual School of Nigeria Access – Yearly',
      price: 120000,
      description: '12-month unlimited access to every course, subject, and skill on the platform. Includes certificates, mentorship, bonus content, and premium WhatsApp support.',
      features: [
        'All Quarterly Plan features',
        '12-month unlimited access',
        'Official certificates',
        'Exclusive mentorship',
        'Premium WhatsApp support',
        'Best value - Save ₦60,000 vs. monthly',
      ],
      popular: true,
      link: 'https://paystack.shop/pay/m4cni36j5l',
    },
  };

  const professionalServices = [
    {
      name: 'Website Design & Development',
      icon: <FaCode className="w-12 h-12 text-primary" />,
      description: 'From stunning landing pages to full-stack applications, we build fast, responsive, and SEO-friendly websites tailored to your brand. Includes frontend and backend development.',
      features: [
        'Custom UI/UX Design',
        'Frontend Development (React, Vue, etc.)',
        'Backend Development (Node.js, Python, PHP)',
        'E-commerce Solutions',
        'CMS Integration',
      ],
    },
    {
      name: 'Media Creation',
      icon: <FaPaintBrush className="w-12 h-12 text-primary" />,
      description: 'Engage your audience with high-quality videos, graphics, and animations. Our creative team produces compelling content for marketing, education, and social media.',
      features: [
        'Video Production & Editing',
        '2D/3D Animation',
        'Graphic Design (Logos, Banners)',
        'Content for Social Media',
        'Brand Identity Kits',
      ],
    },
  ];

  const selectedPlan = plans[billingCycle];

  return (
    <>
      <ScholarshipModal isOpen={isScholarshipModalOpen} onClose={() => setScholarshipModalOpen(false)} />
      <div className="bg-background min-h-screen font-body text-text">
        <header className="bg-secondary text-white text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Flexible Plans & Professional Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose a subscription or hire our expert team to bring your digital projects to life.
          </p>
        </header>

        {/* Free Trial & Scholarship Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-secondary font-headline mb-3">Start Your Learning Journey</h2>
              <p className="text-gray-600 mb-6">Get a 7-day free trial with access to sample lessons. No credit card required.</p>
              <Link to="/register?trial=true" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-primary-hover transition-all transform hover:scale-105">
                Start Free Trial
              </Link>
            </div>
            <div className="text-center bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-secondary font-headline mb-3">Need Financial Aid?</h2>
              <p className="text-gray-600 mb-6">We offer scholarships to eligible students. Click to fill out a simple application form.</p>
              <button onClick={() => setScholarshipModalOpen(true)} className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-accent-hover transition-all transform hover:scale-105">
                Apply for Scholarship
              </button>
            </div>
          </div>
        </section>

        {/* Subscription Plans Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary font-headline">Choose Your Plan</h2>
              <p className="text-xl text-gray-500 mt-2">Select the perfect subscription to unlock your potential.</p>
            </div>
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-1 shadow-md flex space-x-1">
                {Object.keys(plans).map((cycle) => (
                  <button
                    key={cycle}
                    onClick={() => setBillingCycle(cycle)}
                    className={`px-6 py-2 text-sm md:text-base font-bold rounded-full transition-colors ${billingCycle === cycle ? 'bg-primary text-white shadow' : 'text-text hover:bg-gray-100'}`}>
                    {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className={`bg-white rounded-xl shadow-2xl p-8 flex flex-col relative border-2 ${selectedPlan.popular ? 'border-primary' : 'border-transparent'}`}>
                {selectedPlan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Best Value</div>}
                <h3 className="text-3xl font-bold text-secondary font-headline mb-2 text-center">{selectedPlan.name}</h3>
                <div className="mb-6 text-center">
                  <span className="text-5xl font-bold text-text">₦{selectedPlan.price.toLocaleString()}</span>
                  <span className="text-lg font-medium text-gray-500">/{billingCycle.replace('ly', '')}</span>
                </div>
                <p className="text-center text-text mb-8">{selectedPlan.description}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {selectedPlan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0"><FaCheckCircle className="w-6 h-6 text-primary" /></div>
                      <span className="ml-3 text-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={selectedPlan.link} target="_blank" rel="noopener noreferrer" className={`w-full text-center font-bold py-4 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${selectedPlan.popular ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-accent text-white hover:bg-accent-hover'}`}>
                  Subscribe Now
                </a>
                <div className="flex items-center justify-center mt-6 text-gray-500 text-sm">
                  <FaLock className="mr-2" />
                  <span>Secure Payments by Paystack</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary font-headline">Professional Services</h2>
              <p className="text-xl text-gray-500 mt-2">Hire our expert team to build your vision.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {professionalServices.map((service, i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-secondary font-headline mb-4">{service.name}</h3>
                  <p className="text-text-light mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-3 text-left">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <FaCheckCircle className="w-5 h-5 text-primary mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp CTA Section */}
        <section className="bg-primary py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white font-headline mb-4">Have Questions?</h3>
            <p className="text-lg text-white mb-6">Our team is here to help. Chat with us directly for support.</p>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all transform hover:scale-105">
              <FaWhatsapp className="w-6 h-6 mr-3" />
              Chat on WhatsApp
            </a>
          </div>
        </section>

      </div>
    </>
  );
};

export default Pricing;
