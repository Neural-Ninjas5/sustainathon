import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './../../Components/Card/card';
import './features.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesContainer = () => {
  const servicesContainerRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const cardsRef = useRef([]);

  // Sample data for cards
  const servicesData = [
    {
      imageUrl: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/65b09ad15d89e-pradhan-mantri-suryodaya-yojana-what-is-the-cost-of-installing-rooftop-solar-panel-check-subsidy-240623703-16x9.jpg?size=948:533',
      title: 'Service 1',
      description: 'Description for Service 1.',
    },
    {
      imageUrl: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/65b09ad15d89e-pradhan-mantri-suryodaya-yojana-what-is-the-cost-of-installing-rooftop-solar-panel-check-subsidy-240623703-16x9.jpg?size=948:533',
      title: 'Service 2',
      description: 'Description for Service 2.',
    },
    {
      imageUrl: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/65b09ad15d89e-pradhan-mantri-suryodaya-yojana-what-is-the-cost-of-installing-rooftop-solar-panel-check-subsidy-240623703-16x9.jpg?size=948:533',
      title: 'Service 3',
      description: 'Description for Service 3.',
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
