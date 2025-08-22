import React from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
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

const Home = () => {
  usePageMetadata({
    title: 'Virtual School of Nigeria | Best Online Tutors for WAEC, NECO, JAMB',
    description: 'Learn online with expert Nigerian tutors. Affordable online lessons for WAEC, NECO, JAMB, BECE & Common Entrance. Book a free trial class today!'
  });

  return (
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

    {/* Curriculum Section */}
    <section id="curriculum" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Comprehensive Curriculum
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Academic Programs */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Academic Programs</h3>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Primary & Secondary Education (NERDC Compliant)</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Nursery 1 - SS3: Full subject coverage including Mathematics, English, Sciences, Arts, and Commercial subjects.</li>
                  <li>Special focus on core subjects: English Language, Mathematics, Physics, Chemistry, Biology, Economics, Government, Literature.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Exam Preparation & Remedial Classes</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>WAEC/NECO: Intensive coaching for all subjects, past questions analysis, and mock exams.</li>
                  <li>UTME/JAMB: Comprehensive preparation for university entrance examinations.</li>
                  <li>Common Entrance: Specialized classes for primary school leavers.</li>
                  <li>BECE (JSCE): Junior Secondary School Certificate Examination preparation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Development Programs */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills Development Programs</h3>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Digital & ICT Skills</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Basic Computer Literacy: Microsoft Office Suite (Word, Excel, PowerPoint).</li>
                  <li>Programming Fundamentals: Python, JavaScript, Web Development (HTML, CSS, React).</li>
                  <li>Advanced ICT: Cybersecurity, Data Science, Artificial Intelligence (AI) basics.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Life & Leadership Skills</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Public Speaking & Communication.</li>
                  <li>Time Management & Study Techniques.</li>
                  <li>Leadership & Teamwork.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Arabic & Islamic Studies</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Qur'an Recitation & Memorization.</li>
                  <li>Tajweed & Fiqh.</li>
                  <li>Arabic Language & Islamic History.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-background text-center py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight font-headline">
          Virtual School of Nigeria – Best Online Tutors & Classes for WAEC, NECO, JAMB & More
        </h1>
        <p className="mt-4 text-xl text-white max-w-2xl">
          Affordable online lessons, live tutorials, and expert tutors across Nigeria. Prepare for WAEC, NECO, UTME, BECE, and Common Entrance with trusted guidance.
        </p>
        <p className="text-lg text-text-light max-w-3xl mx-auto mb-10">
          From Nursery 1 to SS3 – plus ICT, AI, Leadership, and Project Management courses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://forms.gle/uo2e8iha1F1etHED6"
            target="_blank"
            rel="noopener noreferrer"
            title="Join Free Trial Class at Virtual School of Nigeria"
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-green-600 transition duration-300 ease-in-out inline-flex items-center w-full sm:w-auto justify-center"
          >
            <span className="text-xl mr-2">📘</span> Book Free Trial Class
          </a>
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

    <section className="py-20 bg-blue-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Experience Quality Online Learning?
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Book a FREE trial class today and discover the Virtual School of Nigeria difference!
        </p>
        <a
          href="https://forms.gle/uo2e8iha1F1etHED6"
          target="_blank"
          rel="noopener noreferrer"
          title="Join Free Trial Class at Virtual School of Nigeria"
          className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center justify-center text-lg"
        >
          <span className="text-xl mr-2">🚀</span> Start Your Learning Journey Free
        </a>
      </div>
    </section>

    <FeaturedCourses />

    {/* Testimonials Section */}
    {/* Why Choose Us Section */}
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Why Choose Virtual School of Nigeria?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaShieldAlt className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accredited & Certified Tutors</h3>
            <p className="text-gray-600">Learn from highly qualified and experienced educators.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaMobileAlt className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Online Learning</h3>
            <p className="text-gray-600">Study anytime, anywhere, at your own pace with our accessible platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaBookOpen className="text-purple-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
            <p className="text-gray-600">Access a wide range of subjects and skills tailored to Nigerian students.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaUserPlus className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Support</h3>
            <p className="text-gray-600">Benefit from one-on-one attention and dedicated academic guidance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaGraduationCap className="text-yellow-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Success Record</h3>
            <p className="text-gray-600">Join a community of successful students achieving their academic goals.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-background py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent font-headline">Hear From Our Community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial Card 1 */}
          <div className="bg-surface p-8 rounded-card shadow-card relative hover:shadow-card-hover transition-shadow duration-300">
            <FaQuoteLeft className="text-gray-200 text-6xl absolute top-4 left-4 -z-10" />
            <p className="text-text italic text-lg mb-4 z-10 relative">"Virtual School of Nigeria has transformed my children's learning experience. They are more engaged and excelling academically!"</p>
            <p className="font-extrabold text-accent text-right">– Mrs. Adebayo, Parent</p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-surface p-8 rounded-card shadow-card relative hover:shadow-card-hover transition-shadow duration-300">
            <FaQuoteLeft className="text-gray-200 text-6xl absolute top-4 left-4 -z-10" />
            <p className="text-text italic text-lg mb-4 z-10 relative">"The flexibility of online classes combined with top-notch tutors made it possible for me to balance my studies and other commitments."</p>
            <p className="font-extrabold text-accent text-right">– Emeka, Student</p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-surface p-8 rounded-card shadow-card relative hover:shadow-card-hover transition-shadow duration-300">
            <FaQuoteLeft className="text-gray-200 text-6xl absolute top-4 left-4 -z-10" />
            <p className="text-text italic text-lg mb-4 z-10 relative">"I highly recommend VSN for anyone seeking quality education. The curriculum is comprehensive, and the support is exceptional."</p>
            <p className="font-extrabold text-accent text-right">– Dr. Ngozi, Educator</p>
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
