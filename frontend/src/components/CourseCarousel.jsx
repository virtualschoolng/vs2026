import React from 'react';
import { Carousel } from 'react-bootstrap';

const courses = [
  {
    title: 'Full-Stack Web Development: From WAEC to Industry',
    description: 'Master the MERN stack and build real-world applications. This course is tailored for the Nigerian tech ecosystem.',
    image: 'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Introduction to AI & Data Science',
    description: 'Learn the fundamentals of Artificial Intelligence and Data Science to solve local problems and innovate for the future.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Certified ICT Professional (CompTIA A+)',
    description: 'Get globally recognized certification in ICT. We provide comprehensive training for the CompTIA A+ exams.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'The Nigerian Education System',
    description: 'Explore the structure and curriculum of the Nigerian education system, from primary to tertiary levels.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  }
];

function CourseCarousel() {
  return (
    <Carousel style={{ borderRadius: '15px', overflow: 'hidden' }}>
      {courses.map((course, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={course.image}
            alt={course.title}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '10px', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            <h3 className="h4">{course.title}</h3>
            <p className="d-none d-md-block">{course.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CourseCarousel;
