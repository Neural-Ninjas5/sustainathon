// src/components/SolarCalculator/Results.js
import React from 'react';

const Results = ({ results }) => {
    if (!results) return null;

    return (
        <div className="results-container">
            <h2>Results</h2>
            <p><strong>Recommended Capacity:</strong> {results.capacity} kW</p>
            <p><strong>Payback Period:</strong> {results.paybackPeriod} years</p>
            <p><strong>Project Cost:</strong> Rs. {results.projectCost.toLocaleString()}</p>
            <p><strong>Subsidy:</strong> Rs. {results.subsidy.toLocaleString()}</p>
            <p><strong>Consumer Share:</strong> Rs. {results.consumerShare.toLocaleString()}</p>
            <p><strong>Rooftop Area:</strong> {results.rooftopArea} Sq. m.</p>
            <p><strong>Electricity Generation:</strong> {results.electricityGeneration} kWh/day</p>
            <p><strong>Financial Savings:</strong> Rs. {results.financialSavings.toLocaleString()} /day</p>
            <p><strong>Emission Savings:</strong> {results.emissionSavings} Tonnes CO2 in 25 years</p>
            <p><strong>Number of Panels Needed:</strong> {results.panelsNeeded}</p>
        </div>
    );
};

export default Results;
