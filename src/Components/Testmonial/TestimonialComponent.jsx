import React, { useEffect, useRef } from 'react';
import './TestimonialComponent.css'; // Import your CSS file for styling
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialComponent = () => {
  const testimonialRef = useRef(null);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/100', // Replace with actual image URL
      text: 'Exceptional service! The machine learning model accurately predicted our solar needs. Highly recommend for anyone looking to go green.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/100', // Replace with actual image URL
      text: 'Great experience! Easy purchase process with top-notch products. The personalized solar panel recommendation saved us money and hassle.',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      avatar: 'https://via.placeholder.com/100', // Replace with actual image URL
      text: 'Amazing! The site’s unique approach made solar panel shopping easy and precise. Love the eco-friendly and cost-effective solution!',
    },
  ];

  useEffect(() => {
    const element = testimonialRef.current;
    gsap.fromTo(
      element.querySelectorAll('.testimonial-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className='bgis' ref={testimonialRef}>
      <div className="testimonial-container">
        <h2 className='head'>Testimonials</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
