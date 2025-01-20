// src/components/SolarCalculator/Form.js
import React, { useState } from 'react';
import './style.css';

const Form = ({ calculateResults }) => {
    const [state, setState] = useState('');
    const [category, setCategory] = useState('');
    const [monthlyBill, setMonthlyBill] = useState('');
    const [roofArea, setRoofArea] = useState('');
    const [investment, setInvestment] = useState('');
    const [capacity, setCapacity] = useState('');
    const [sanctionLoad, setSanctionLoad] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateResults({ state, category, monthlyBill, roofArea, investment, capacity, sanctionLoad });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Solar Rooftop Calculation Form</h2>
               
               
                <div>
                    <label htmlFor="monthlyBill">Your Average Monthly Bill</label>
                    <input
                        type="number"
                        id="monthlyBill"
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="roofArea">Total Available Roof Top Area (sq.m or sq.ft)</label>
                    <input
                        type="number"
                        id="roofArea"
                        value={roofArea}
                        onChange={(e) => setRoofArea(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="investment">How much do you want to invest?</label>
                    <input
                        type="number"
                        id="investment"
                        value={investment}
                        onChange={(e) => setInvestment(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="capacity">Required Solar Plant Capacity (in kW)</label>
                    <input
                        type="number"
                        id="capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                    />
                </div>
                {/* <div>
                    <label htmlFor="sanctionLoad">Sanction Load (in kW)</label>
                    <input
                        type="number"
                        id="sanctionLoad"
                        value={sanctionLoad}
                        onChange={(e) => setSanctionLoad(e.target.value)}
                    />
                </div> */}
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
};

export default Form;
