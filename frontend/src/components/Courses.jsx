import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { curriculumIcon, ictIcon, aiIcon, cryptoIcon, guidesIcon, leadershipIcon } from '../assets/images';

const courseData = {
  'Nursery & Primary': {
    icon: curriculumIcon,
    courses: [
      { title: 'Nursery English', description: 'Alphabet, phonics, and basic vocabulary for early learners.', level: 'Beginner', tags: ['Nursery', 'English', 'Language'] },
      { title: 'Nursery Mathematics', description: 'Counting, number recognition, and simple shapes.', level: 'Beginner', tags: ['Nursery', 'Mathematics', 'Math'] },
      { title: 'Primary English Language', description: 'Grammar, comprehension, and creative writing for primary pupils.', level: 'Beginner', tags: ['Primary', 'English', 'Language'] },
      { title: 'Primary Mathematics', description: 'Arithmetic, measurements, and data handling.', level: 'Beginner', tags: ['Primary', 'Mathematics', 'Math'] },
      { title: 'Basic Science and Technology', description: 'Exploring the world around us, from living things to simple machines.', level: 'Beginner', tags: ['Primary', 'Science', 'Technology'] },
    ],
  },
  'Junior Secondary': {
    icon: curriculumIcon,
    courses: [
      { title: 'JSS English Language', description: 'Advanced grammar, literature, and communication skills.', level: 'Intermediate', tags: ['JSS', 'English', 'Language'] },
      { title: 'JSS Mathematics', description: 'Algebra, geometry, and statistics for junior secondary students.', level: 'Intermediate', tags: ['JSS', 'Mathematics', 'Math'] },
      { title: 'Basic Science', description: 'Integrated science covering biology, chemistry, and physics.', level: 'Intermediate', tags: ['JSS', 'Science', 'Basic Science'] },
      { title: 'Business Studies', description: 'Introduction to commerce, finance, and office practice.', level: 'Intermediate', tags: ['JSS', 'Business'] },
    ],
  },
  'Senior Secondary': {
    icon: curriculumIcon,
    courses: [
      { title: 'SS English Language', description: 'Mastering essay writing, comprehension, and lexical skills for exams.', level: 'Advanced', tags: ['SS', 'English', 'Language'] },
      { title: 'SS Mathematics', description: 'Calculus, trigonometry, and advanced algebra.', level: 'Advanced', tags: ['SS', 'Mathematics', 'Math'] },
      { title: 'Biology', description: 'In-depth study of living organisms, genetics, and ecosystems.', level: 'Advanced', tags: ['SS', 'Biology', 'Science'] },
      { title: 'Chemistry', description: 'Exploring chemical reactions, periodic table, and organic chemistry.', level: 'Advanced', tags: ['SS', 'Chemistry', 'Science'] },
      { title: 'Physics', description: 'Understanding motion, energy, electricity, and magnetism.', level: 'Advanced', tags: ['SS', 'Physics', 'Science'] },
      { title: 'Economics', description: 'Principles of microeconomics and macroeconomics.', level: 'Advanced', tags: ['SS', 'Economics', 'Social Science'] },
    ],
  },
  'Tech & ICT Skills': {
    icon: ictIcon,
    courses: [
      { title: 'Website Design & Development', description: 'Build modern websites using HTML, CSS, JavaScript, and responsive design principles.', level: 'Beginner', tags: ['ICT', 'Web Development', 'HTML', 'CSS'] },
      { title: 'Cybersecurity Essentials', description: 'Learn how to protect yourself and organizations from cyber threats and data breaches.', level: 'Intermediate', tags: ['ICT', 'Cybersecurity'] },
      { title: 'Digital Marketing & Social Media', description: 'Understand how to grow online using SEO, content marketing, ads, and more.', level: 'Intermediate', tags: ['ICT', 'Marketing', 'SEO'] },
      { title: 'Data Analysis & Microsoft Excel', description: 'Learn how to organize, analyze, and visualize data effectively with Excel.', level: 'Intermediate', tags: ['ICT', 'Data', 'Excel'] },
    ],
  },
  'AI & Machine Learning': {
    icon: aiIcon,
    courses: [
      { title: 'Introduction to Artificial Intelligence', description: 'Learn the fundamentals of AI, including machine learning, robotics, and automation.', level: 'Beginner', tags: ['AI', 'ML', 'Artificial Intelligence'] },
      { title: 'Machine Learning with Python', description: 'Hands-on guide to using Python for predictive modeling and data analysis.', level: 'Intermediate', tags: ['AI', 'Python', 'Data Science'] },
      { title: 'Natural Language Processing (NLP)', description: 'Teach machines how to understand human language—used in chatbots, voice assistants, etc.', level: 'Advanced', tags: ['AI', 'NLP', 'Text'] },
    ],
  },
  'Skills Development': {
    icon: leadershipIcon,
    courses: [
      { title: 'Leadership Skills for Youths', description: 'Develop the confidence and skills to lead projects and teams.', level: 'Intermediate', tags: ['Leadership', 'Life Skills', 'Soft Skills'] },
      { title: 'Public Speaking', description: 'Build confidence and deliver powerful speeches and presentations.', level: 'Beginner', tags: ['Public Speaking', 'Life Skills', 'Communication'] },
      { title: 'Financial Literacy', description: 'Learn budgeting, saving, investing, and financial planning.', level: 'Intermediate', tags: ['Finance', 'Life Skills', 'Money'] },
      { title: 'Introduction to Project Management', description: 'Learn the fundamentals of planning, executing, and closing projects.', level: 'Intermediate', tags: ['Project Management', 'Professional', 'PMP'] },
    ],
  },
};

const allCourses = Object.entries(courseData).flatMap(([category, data]) => 
  data.courses.map(course => ({ ...course, category, icon: data.icon }))
);

const categories = ['All', ...Object.keys(courseData)];

const getSkillLevelClass = (level) => {
  switch (level.toLowerCase()) {
    case 'beginner': return 'bg-green-100 text-green-800';
    case 'intermediate': return 'bg-yellow-100 text-yellow-800';
    case 'advanced': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2">
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
        <Link to="/learn" className="bg-primary text-white font-bold py-2 px-4 rounded-button shadow-md hover:bg-primary-hover transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (course.tags && course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-background min-h-screen font-body">
      <header className="bg-secondary text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold font-headline mb-4">Explore Our Courses</h1>
        <p className="text-xl text-gray-300 font-body">Find the perfect course to boost your knowledge and skills.</p>
      </header>

      {/* Search and Filter Bar */}
      <div className="bg-white shadow-md sticky top-[76px] z-40">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-secondary">No Courses Found</h3>
            <p className="text-text mt-2">Try adjusting your search or filter settings.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Courses;
