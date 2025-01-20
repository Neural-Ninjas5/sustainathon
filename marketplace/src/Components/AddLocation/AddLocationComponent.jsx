// import React from 'react';
// import './AddLocationComponent.css'; // Import your CSS file for styling

// const AddLocationComponent = () => {
//   return (
//     <div className='setca'>
//     <div className="add-location-container">
//       <h2>Add Your Location</h2>
//       <div className="location-input-container">
//         <input type="text" placeholder="Enter your location" className="location-input" />
//         <span className="location-icon">&#x1F4CD;</span> {/* This is the map pin emoji */}
//       </div>
//       <div className="map-container">
//         {/* You can replace this div with an actual map component or embed a map iframe */}
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.656696074862!2d-122.08424968469144!3d37.42206597982592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d75c8b0d5f%3A0xf1c1b0d7e0f10064!2sGoogleplex!5e0!3m2!1sen!2sus!4v1618880004893!5m2!1sen!2sus"
//           width="600"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//       <h2>Choose</h2>
//       <div className="choose-inputs">
//         <input type="text" placeholder="Option 1" className="choose-input" />
//         <input type="text" placeholder="Option 2" className="choose-input" />
//         <input type="text" placeholder="Option 3" className="choose-input" />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AddLocationComponent;

// import { useEffect, useState } from "react";
// import './AddLocationComponent.css';
// import axios from "axios";

// function AddLocationComponent() {
//   const [currLocation, setCurrLocation] = useState({});
//   useEffect(() => {
//     getLocation();
//   }, []);

//   const getLocation = async () => {
//     const location = await axios.get("https://ipapi.co/json");
//     setCurrLocation(location.data);
//   };



//   return (
//     <div>
//       <h1>Current Location</h1>
//       <p>Latitude: {currLocation.latitude}</p>
//       <p>Longitude: {currLocation.longitude}</p>
//       <p>City: {currLocation.city}</p>
//     </div>
//   );
// }

// export default AddLocationComponent;



import { useEffect, useState } from "react";
import axios from "axios";
import "./AddLocationComponent.css"; // Import your CSS file for styling

function AddLocationComponent() {
  const [currLocation, setCurrLocation] = useState({});
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const location = await axios.get("https://ipapi.co/json");
      setCurrLocation(location.data);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const handleCalculate = () => {
    // Example calculation based on inputs
    const calculatedResult = parseInt(input1) + parseInt(input2);
    setResult(`Result of ${input1} + ${input2} = ${calculatedResult}`);
  };

  return (
    <div>
      <h1>Power Calculation</h1>

      <div className="add-location-container">
        <div className="location-card">
          <h2>Current Location</h2>
          <div className="location-info">
            <p>City: {currLocation.city}</p>
            <p>Latitude: {currLocation.latitude}</p>
            <p>Longitude: {currLocation.longitude}</p>
          </div>
        </div>

        <div className="input-container">
          <h2>Enter Values</h2>
          <input
            type="text"
            placeholder="Input 1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Input 2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          <button onClick={handleCalculate}>Calculate</button>
        </div>

        {result && (
          <div className="result-container">
            <h2>Result</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddLocationComponent;
