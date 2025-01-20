import React, { useEffect, useRef } from 'react';
import './SolarEnergyComponent.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './../Card/card';
import pic4 from '../../assets/images/pic4.png'
import pic5 from '../../assets/images/pic5.png'
import pic6 from '../../assets/images/pic6.png'
gsap.registerPlugin(ScrollTrigger);

const SolarEnergyComponent = () => {
  const solarEnergyRef = useRef(null);

  // Sample data for cards
  const solarEnergyData = [
    {
      title: 'Clean Energy',
      description: 'Solar energy is clean, renewable, and does not emit greenhouse gases during operation.',
      imageUrl: pic4,
    },
    {
      title: 'Cost Savings',
      description: 'Investing in solar energy can lead to significant cost savings on electricity bills over time.',
      imageUrl: pic5,
    },
    {
      title: 'Environmental Benefits',
      description: 'Solar energy reduces reliance on fossil fuels, helping to mitigate climate change and air pollution.',
      imageUrl: pic6,
    },
  ];

  useEffect(() => {
    const element = solarEnergyRef.current;
    gsap.fromTo(
      element.querySelectorAll('.card'),
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
    <div className='setcb' ref={solarEnergyRef}>
      <div className="solar-energy-container">
        <h2 className='why'>Why Solar Energy?</h2>
        <div className="solar-energy-cards">
          {solarEnergyData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolarEnergyComponent;
