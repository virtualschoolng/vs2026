import React from 'react';
import { Link } from 'react-router-dom';
import { ictIcon, aiIcon } from '../assets/images';

const courseData = {
  'ICT Skills': {
    icon: ictIcon,
    courses: [
      { title: 'Website Design & Development', description: 'Build modern websites using HTML, CSS, JavaScript, and responsive design principles.', level: 'Beginner', tags: ['ICT', 'Web Development'] },
      { title: 'Cybersecurity Essentials', description: 'Learn how to protect yourself and organizations from cyber threats and data breaches.', level: 'Intermediate', tags: ['ICT', 'Cybersecurity'] },
      { title: 'Computer Basics & Internet Literacy', description: 'For beginners: how to use a computer, email, browser, and basic office tools.', level: 'Beginner', tags: ['ICT', 'Basics'] },
      { title: 'Digital Marketing & Social Media', description: 'Understand how to grow online using SEO, content marketing, ads, and more.', level: 'Intermediate', tags: ['ICT', 'Marketing'] },
      { title: 'Networking Fundamentals (Cisco-based)', description: 'Learn about LAN, WAN, IP addressing, and basic router/switch configuration.', level: 'Intermediate', tags: ['ICT', 'Networking'] },
      { title: 'Mobile App Development', description: 'Design and build apps using no-code/low-code tools and basic programming.', level: 'Beginner', tags: ['ICT', 'Mobile'] },
      { title: 'Data Analysis & Microsoft Excel', description: 'Learn how to organize, analyze, and visualize data effectively with Excel.', level: 'Intermediate', tags: ['ICT', 'Data'] },
    ],
  },
  'AI Skills': {
    icon: aiIcon,
    courses: [
      { title: 'Introduction to Artificial Intelligence', description: 'Learn the fundamentals of AI, including machine learning, robotics, and automation.', level: 'Beginner', tags: ['AI', 'ML'] },
      { title: 'Machine Learning with Python', description: 'Hands-on guide to using Python for predictive modeling and data analysis.', level: 'Intermediate', tags: ['AI', 'Python'] },
      { title: 'Natural Language Processing (NLP)', description: 'Teach machines how to understand human language—used in chatbots, voice assistants, etc.', level: 'Advanced', tags: ['AI', 'NLP'] },
      { title: 'AI for Beginners – No Coding Required', description: 'A simple introduction for non-tech users interested in understanding AI’s role in the world.', level: 'Beginner', tags: ['AI', 'Non-Technical'] },
      { title: 'AI in Education and Business', description: 'How AI is transforming learning and business management—suitable for teachers, leaders.', level: 'Intermediate', tags: ['AI', 'Business'] },
    ],
  },
};

const getSkillLevelClass = (level) => {
  switch (level.toLowerCase()) {
    case 'beginner': return 'bg-success-light text-success-dark';
    case 'intermediate': return 'bg-warning-light text-warning-dark';
    case 'advanced': return 'bg-error-light text-error-dark';
    default: return 'bg-surface text-text-light';
  }
};

const CourseCard = ({ course }) => (
  <div className="bg-background rounded-card shadow-card overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-lg">
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center mb-4">
        <img src={course.icon} alt={`${course.category} icon`} className="w-8 h-8 mr-3" />
        <span className="text-sm font-semibold text-text-light">{course.category}</span>
      </div>
      <h3 className="text-xl font-extrabold font-headline mb-2 text-accent">{course.title}</h3>
      <p className="text-text-light mb-4 flex-grow">{course.description}</p>
      <div className="flex justify-between items-center mt-auto pt-4">
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getSkillLevelClass(course.level)}`}>
          {course.level}
        </span>
        <Link to="/learn" className="bg-accent text-white font-bold py-2 px-4 rounded-button shadow-md hover:bg-accent-dark transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const AiCourses = () => {
  return (
    <div className="bg-background min-h-screen font-body">
      <header className="bg-accent text-white text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold font-headline mb-4">AI & ICT Courses</h1>
        <p className="text-xl text-text-light font-body">Explore cutting-edge courses in Artificial Intelligence and ICT.</p>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {Object.entries(courseData).map(([category, data]) => (
          <section key={category} className="mb-16">
            <h2 className="text-3xl font-extrabold font-headline text-accent mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.courses.map((course, index) => (
                <CourseCard key={index} course={{ ...course, category, icon: data.icon }} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default AiCourses;
