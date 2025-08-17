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
    case 'beginner': return 'bg-success-light text-success-dark';
    case 'intermediate': return 'bg-warning-light text-warning-dark';
    case 'advanced': return 'bg-error-light text-error-dark';
    default: return 'bg-surface text-text-light';
  }
};

const FeaturedCourseCard = ({ course }) => (
  <div className="bg-background rounded-card shadow-card overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1 hover:shadow-card-hover h-full">
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center mb-4">
        <img src={course.icon} alt={`${course.category} icon`} className="w-10 h-10 mr-3" />
        <span className="text-base font-semibold text-accent">{course.category}</span>
      </div>
      <h3 className="text-xl font-bold font-headline mb-2 text-text">{course.title}</h3>
      <p className="text-text-light mb-4 flex-grow text-base">{course.description}</p>
      <div className="flex justify-between items-center mt-auto pt-4">
        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getSkillLevelClass(course.level)}`}>
          {course.level}
        </span>
        <Link to="/courses" className="bg-accent text-white font-bold py-2 px-4 rounded-button shadow-md hover:bg-accent-hover transition duration-300 ease-in-out">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-3 font-headline">
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
          <Link to="/courses" className="bg-accent text-white font-bold py-3 px-8 rounded-button shadow-md hover:bg-accent-dark transition duration-300 ease-in-out inline-flex items-center">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
