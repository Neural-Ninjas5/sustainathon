import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const aboutUsRef = useRef(null);

  useEffect(() => {
    const element = aboutUsRef.current;

    gsap.fromTo(
      element.querySelector('.about-us-text'),
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      element.querySelector('.about-us-image'),
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className='setcc' ref={aboutUsRef}>
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              Welcome to Geo Tech, your trusted partner in harnessing the power of the sun! We are pioneers in the solar energy industry, committed to providing top-quality solar panels and solar goods tailored to your unique energy needs. What sets us apart is our innovative approach: leveraging advanced machine learning models, we determine the optimal number of solar panels required for your specific situation. This ensures you receive the most efficient and cost-effective solar energy solution available. At Geo Tech, we are dedicated to making renewable energy accessible and efficient for everyone, paving the way towards a sustainable future. Join us in our mission to transform the world with clean, green energy!
            </p>
            <div className="check-boxes">
              <p>&#9989; Get personalised solar panel buying guide based on your location through our advanced Machine Learning algorithm</p>
              <p>&#9989; Get a wide range of vendors to choose from</p>
            </div>
            <button className="view-all-button">Learn More</button>
          </div>
          <div className="about-us-image">
            {/* Add your image source here */}
            {/* <img src="/path-to-your-image.jpg" alt="About Us" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
