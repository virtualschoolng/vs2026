import React from 'react';
import { Link } from 'react-router-dom';
import { curriculumIcon, ictIcon, aiIcon, leadershipIcon } from '../assets/images';

const featuredCourses = [
  {
    title: 'SS Mathematics',
    description: 'Calculus, trigonometry, and advanced algebra.',
    level: 'Advanced',
    category: 'Senior Secondary',
    icon: curriculumIcon,
  },
  {
    title: 'Website Design & Development',
    description: 'Build modern websites using HTML, CSS, and JavaScript.',
    level: 'Beginner',
    category: 'Tech & ICT Skills',
    icon: ictIcon,
  },
  {
    title: 'Introduction to Artificial Intelligence',
    description: 'Learn the fundamentals of AI, machine learning, and automation.',
    level: 'Beginner',
    category: 'AI & Machine Learning',
    icon: aiIcon,
  },
  {
    title: 'Leadership Skills for Youths',
    description: 'Develop the confidence and skills to lead projects and teams.',
    level: 'Intermediate',
    category: 'Skills Development',
    icon: leadershipIcon,
  }
];

const getSkillLevelClass = (level) => {
  switch (level.toLowerCase()) {
    case 'beginner': return 'bg-green-100 text-green-800';
    case 'intermediate': return 'bg-yellow-100 text-yellow-800';
    case 'advanced': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const FeaturedCourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 h-full">
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center mb-4">
        <img src={course.icon} alt={`${course.category} icon`} className="w-8 h-8 mr-3" />
        <span className="text-sm font-semibold text-primary">{course.category}</span>
      </div>
      <h3 className="text-xl font-bold font-headline mb-2 text-secondary">{course.title}</h3>
      <p className="text-text mb-4 flex-grow">{course.description}</p>
      <div className="flex justify-between items-center mt-auto pt-4">
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getSkillLevelClass(course.level)}`}>
          {course.level}
        </span>
        <Link to="/courses" className="bg-primary text-white font-bold py-2 px-4 rounded-button shadow-md hover:bg-primary-hover transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-headline">
            Featured Courses
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Explore some of our most popular courses and start learning today.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCourses.map((course, index) => (
            <FeaturedCourseCard key={index} course={course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/courses" className="bg-accent text-white font-bold py-3 px-8 rounded-button shadow-md hover:bg-accent-hover transition-all transform hover:scale-105 inline-flex items-center">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
