import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./Home.css";
import Header from '../../Components/Header/Header';
import Features from '../Features/Features';
import Footer from "../../Components/Footer/Footer";
import AboutUs from '../AboutUs/AboutUs';
import SolarEnergyComponent from '../../Components/WhySolar/whySolar';
import TestimonialComponent from '../../Components/Testmonial/TestimonialComponent';
import ContactUsComponent from '../ContactUs/ContactUs';
// import Product from '../Product/Product';

function Home() {
    const headerRef = useRef(null);
    const subHeaderRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        gsap.from(headerRef.current, { duration: 1, opacity: 0, y: -50 });
        gsap.from(subHeaderRef.current, { duration: 1, opacity: 0, x: -50, delay: 0.5 });
        gsap.from(textRef.current, { duration: 1, opacity: 0, x: 50, delay: 1 });
        gsap.from(buttonRef.current, { duration: 1, opacity: 0, y: 50, delay: 1.5 });
    }, []);

    return (
        <>
            <Header />

            <div className='hero-section text-white' style={{ backgroundImage: "url('/image2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='hero-content max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <p ref={headerRef} className='text-[#73c347] font-bold p-2'>
                        Embracing the Future with
                    </p>
                    <h1 ref={subHeaderRef} className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        GeoTech
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p ref={textRef} className='md:text-5xl text-gray-500 sm:text-4xl text-xl font-bold py-4'>
                            a user-friendly platform that
                        </p>
                    </div>
                    <p ref={textRef} className='md:text-2xl text-xl font-bold'>helps individuals and businesses to make informed decisions about adopting solar energy solutions.</p>
                    <button ref={buttonRef} className='bg-[#73c347] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                </div>
            </div>

            <Features />
            <AboutUs />
            <SolarEnergyComponent />
            <TestimonialComponent />
            <ContactUsComponent />
            <Footer />
        </>
    );
}

export default Home;
