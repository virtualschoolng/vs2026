import React, { useState, useMemo } from 'react';

const allFaqs = [
  {
    category: 'For Learners',
    question: 'What is the VIRTUAL SCHOOL OF NIGERIA?',
    answer: 'We are an online learning platform offering live classes, recorded lessons, and expert tutors across a wide range of subjects, from the Nigerian school curriculum to advanced tech skills.'
  },
  {
    category: 'For Learners',
    question: 'How do I enroll in a course?',
    answer: 'Simply visit our Learn page, choose a pricing plan that suits you, and complete the registration. You will get instant access to your chosen courses.'
  },
  {
    category: 'For Learners',
    question: 'Are the classes live or pre-recorded?',
    answer: 'We offer both! Our plans include access to live, interactive classes with tutors and a library of pre-recorded lessons you can watch anytime.'
  },
  {
    category: 'For Learners',
    question: 'Can I get a free trial?',
    answer: 'Yes! We offer a 7-day free trial for new users to explore our platform and experience our classes before committing to a plan.'
  },
  {
    category: 'For Tutors',
    question: 'How can I become a tutor?',
    answer: 'Visit our Teach page and fill out the application form. We will review your qualifications and get back to you. We are looking for passionate experts in various fields.'
  },
  {
    category: 'For Tutors',
    question: 'How much can I earn?',
    answer: 'Tutors earn a competitive 70% revenue share on all their courses and tutoring sessions. Your earning potential is directly tied to the number of students you teach.'
  },
  {
    category: 'For Tutors',
    question: 'What equipment do I need to teach?',
    answer: 'You will need a reliable computer, a stable internet connection, a good quality webcam, and a microphone. Our platform handles the rest!'
  }
];

const categories = ['All', 'For Learners', 'For Tutors'];

const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button onClick={onToggle} className="w-full flex justify-between items-center text-left py-5 px-2 text-lg font-extrabold text-text hover:text-accent focus:outline-none transition-colors">
      <span className="flex-1">{faq.question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
      <div className="pb-5 px-2 text-text">
        <p>{faq.answer}</p>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter(faq => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-background min-h-screen font-body">
      <header className="bg-gradient-to-r from-primary to-accent text-white text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold font-headline mb-4 text-white">Frequently Asked Questions</h1>
        <p className="text-xl text-text-light max-w-3xl mx-auto">Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.</p>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-4 border border-border rounded-button shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12 border-b border-gray-200">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-3 text-lg font-medium rounded-t-lg focus:outline-none transition-colors ${selectedCategory === category ? 'border-b-4 border-accent text-accent' : 'text-text-light hover:text-accent'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="bg-surface rounded-card shadow-card p-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} isOpen={activeIndex === index} onToggle={() => toggleFAQ(index)} />
            ))
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-extrabold text-text-light">No questions found.</h3>
              <p className="text-text-light mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};


export default FAQ;
