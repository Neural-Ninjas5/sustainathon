import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './../../Components/Card/card';
import './features.css';
import piccc from '../../assets/images/pic1.png'
import piccc2 from '../../assets/images/pic2.png'
import piccc3 from '../../assets/images/pic3.png'
gsap.registerPlugin(ScrollTrigger);

const ServicesContainer = () => {
  const servicesContainerRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const cardsRef = useRef([]);

  // Sample data for cards
  const servicesData = [
    {

      imageUrl:  piccc,
      title: 'Prediction Tools',
      description: 'Know all the details about the  solar panel from our advance AI model',
    },
    {
      imageUrl: piccc2,
      title: 'Setups & Maintenance ',
      description: 'Get the best Solar Panel available across the internet',
    },
    {
      imageUrl: piccc3,
      title: 'Financing',
      description: 'Get government scheme and financing support from us.',
    },
  ];

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      duration: 1,
      opacity: 0,
      y: -50
    });

    gsap.from(paraRef.current, {
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        scale: 0.5,
        delay: index * 0.2
      });
    });
  }, []);

  return (
    <div className="setcd">
      <div className='features-container'>
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div ref={servicesContainerRef} className="services-container">
          <h1 ref={titleRef}>OUR SERVICES</h1>
          <p ref={paraRef} className='para'>Quality and customer satisfaction matter for us!</p>
          <div className="cards-container">
            {servicesData.map((service, index) => (
              <Card
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                imageUrl={service.imageUrl}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
