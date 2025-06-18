import React from 'react';
import Slider from 'react-slick';


const carouselImages = [
  {
    src: 'https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Focused female student learning online with Virtual School of Nigeria',
    caption: 'Access Quality Education, Anywhere in Nigeria',
  },
  {
    src: 'https://images.pexels.com/photos/8423043/pexels-photo-8423043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'A group of Nigerian students collaborating on laptops with Virtual School of Nigeria',
    caption: 'Collaborate and Learn with Peers Across the Nation',
  },
  {
    src: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'A smiling student engaging with Virtual School of Nigeria content',
    caption: 'Engaging and Interactive Virtual Classrooms',
  },
  {
    src: 'https://images.pexels.com/photos/7646813/pexels-photo-7646813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'A student wearing headphones participating in an online class with Virtual School of Nigeria',
    caption: 'Expert Tutors Guiding You Every Step of the Way',
  },
  {
    src: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'A male student taking notes from his laptop at home with Virtual School of Nigeria',
    caption: 'Flexible Learning Schedules that Fit Your Life',
  },
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    appendDots: dots => (
      <div style={{ bottom: '30px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index} className="relative h-[60vh] md:h-[80vh]">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white text-center font-headline max-w-4xl mx-auto p-4">
                {image.caption}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
