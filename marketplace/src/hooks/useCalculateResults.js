import { useState } from 'react';

const useCalculateResults = () => {
    const [results, setResults] = useState(null);

    const calculateResults = (formData) => {
        const dailyConsumption = parseFloat(formData.dailyConsumption); // kWh
        const peakSunHours = 5;
        const panelEfficiency = 0.18; // Update this value as needed
        const inverterEfficiency = 0.95;

        const requiredCapacity = dailyConsumption / peakSunHours / (panelEfficiency * inverterEfficiency); // kW

        const panelCostPerWatt = 35; // Rs.
        const installationCostPerWatt = 20; // Rs.
        const totalPanelCost = requiredCapacity * 1000 * panelCostPerWatt; // Rs.
        const totalInstallationCost = requiredCapacity * 1000 * installationCostPerWatt; // Rs.
        const totalCost = totalPanelCost + totalInstallationCost; // Rs.

        const projectCost = totalCost;
        const subsidy = projectCost * 0.6; // Assume 60% subsidy
        const consumerShare = projectCost - subsidy;
        const financialSavings = dailyConsumption * 3; // Rs. per day savings, assuming Rs. 3 per kWh
        const emissionSavings = requiredCapacity * 28; // Assume 28 Tonne CO2 savings per kW over 25 years

        const pvout = 4; // Random value for pvout (kWh per panel per day)
        const panelsNeeded = Math.ceil(dailyConsumption / pvout);

        setResults({
            capacity: requiredCapacity.toFixed(2),
            paybackPeriod: (totalCost / (dailyConsumption * 365 * 3)).toFixed(2), // Payback period in years
            projectCost,
            subsidy,
            consumerShare,
            rooftopArea: formData.roofArea,
            electricityGeneration: (requiredCapacity * peakSunHours).toFixed(2), // kWh/day
            financialSavings: financialSavings.toFixed(2),
            emissionSavings: emissionSavings.toFixed(2),
            panelsNeeded
        });
    };

    return { results, calculateResults };
};

export default useCalculateResults;
