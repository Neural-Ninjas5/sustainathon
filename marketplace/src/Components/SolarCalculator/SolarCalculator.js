// src/components/SolarCalculator/SolarCalculator.js
import React from 'react';
import './style.css';
import Form from './Form';
import Results from './Results';
import useCalculateResults from './useCalculateResults';
import Header from './../Header/Header'

const SolarCalculator = () => {
    const { results, calculateResults } = useCalculateResults();

    return (
        <>
        <Header/>
        <div className="App">
            <h1>Solar Rooftop Calculator</h1>
            <div className="calculator-container">
                <Form calculateResults={calculateResults} />
                <Results results={results} />
            </div>
        </div>
        </>
    );
};

export default SolarCalculator;
