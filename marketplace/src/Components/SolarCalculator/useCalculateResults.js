// src/components/SolarCalculator/useCalculateResults.js
import { useState } from 'react';

const useCalculateResults = () => {
    const [results, setResults] = useState(null);

    const calculateResults = ({ state, category, monthlyBill, roofArea, investment, capacity, sanctionLoad }) => {
        // Placeholder values for calculation
        const panelCostPerWatt = 35; // Rs/watt
        const installationCostPerWatt = 20; // Rs/watt
        const peakSunHours = 5; // Peak sun hours per day
        const panelEfficiency = 0.15; // Assuming 15% efficiency

        // Panel output and costs
        const panelOutput = 1.732; // Output per panel in kW
        const panelsNeeded = Math.ceil(capacity / panelOutput);
        const panelCost = panelsNeeded * panelOutput * 1000 * panelCostPerWatt;
        const installationCost = panelsNeeded * panelOutput * 1000 * installationCostPerWatt;
        const projectCost = panelCost + installationCost;

        const subsidy = 0.3 * projectCost; // 30% subsidy
        const consumerShare = projectCost - subsidy;

        // Calculations
        const electricityGeneration = panelsNeeded * panelOutput * peakSunHours;
        const financialSavings = electricityGeneration * 5; // Assuming Rs. 5 per kWh saved
        const emissionSavings = panelsNeeded * 0.3; // 0.3 Tonnes CO2 saved per panel in 25 years

        // Payback period in years
        const paybackPeriod = (consumerShare / financialSavings) / 365;

        // Set results with roofArea included
        setResults({
            capacity,
            paybackPeriod: paybackPeriod.toFixed(2),
            projectCost,
            subsidy,
            consumerShare,
            rooftopArea: roofArea, // Ensure rooftopArea is included
            electricityGeneration: electricityGeneration.toFixed(2),
            financialSavings: financialSavings.toFixed(2),
            emissionSavings: emissionSavings.toFixed(2),
            panelsNeeded
        });
    };

    return {
        results,
        calculateResults
    };
};

export default useCalculateResults;
