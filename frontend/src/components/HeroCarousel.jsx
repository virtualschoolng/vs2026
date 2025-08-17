import React from 'react';
import Slider from 'react-slick';

// Import local images
import africachild from '../images/africachild.jpg';
import coper from '../images/coper.jpg';
import istockphoto from '../images/istockphoto-1481374672-1024x1024.jpg';
import logo from '../images/logo.jpg';

const carouselImages = [
  {
    src: africachild,
    alt: 'African child learning with Virtual School of Nigeria',
    caption: 'Access Quality Education, Anywhere in Nigeria',
  },
  {
    src: coper,
    alt: 'Students engaging with Virtual School of Nigeria',
    caption: 'Collaborate and Learn with Peers Across the Nation',
  },
  {
    src: istockphoto,
    alt: 'Students engaging with Virtual School of Nigeria content',
    caption: 'Engaging and Interactive Virtual Classrooms',
  },
  {
    src: logo,
    alt: 'Virtual School of Nigeria',
    caption: 'Expert Tutors Guiding You Every Step of the Way',
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end justify-center pb-20">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center font-headline max-w-4xl mx-auto p-4 leading-tight drop-shadow-lg">
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
