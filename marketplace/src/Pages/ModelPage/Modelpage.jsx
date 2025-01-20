// import React, { useState } from 'react';
// import "./Modelpage.css";
// import Header from '../../Components/Header/Header';


// import pvoutImage from '../../assets/images/PVOUT.png';
// import dniImage from '../../assets/images/DNI.png';
// import ghiImage from '../../assets/images/GHI.png';
// import gtiImage from '../../assets/images/GTI.png';
// import optaImage from '../../assets/images/OPTA.png';
// import tempImage from '../../assets/images/TEMP.png';

// const imageMap = {
//   PVOUT:pvoutImage,
//   DNI: dniImage,
//   GHI: ghiImage,
//   GTI: gtiImage,
//   OPTA: optaImage,
//   TEMP: tempImage,
// };

// const Modelpage = () => {
//   const [longitude, setLongitude] = useState(0);
//   const [latitude, setLatitude] = useState(0);
//   const [responses, setResponses] = useState([]);
//   const [selectedField, setSelectedField] = useState(''); // Track the selected field
//   const [image, setImage] = useState(''); // Track the image to be displayed

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Dummy response data
//       const dummyResponse = {
//         PVOUT: {
//           DNI: '300 W/m²',
//           GHI: '500 W/m²',
//           GTI: '450 W/m²',
//           OPTA: '20%',
//           TEMP: '25°C',
//         }
//       };

//       // Add the dummy response to the responses array
//       setResponses(prevResponses => [...prevResponses, dummyResponse]);
//     } catch (error) {
//       console.log("Error Fetching the API: ", error);
//     }
//   };

//   const handleFieldClick = (field) => {
//     setSelectedField(field);
//     setImage(imageMap[field]); // Update the image based on the selected field
//   };

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <div className="header">
//           <h1>Enter Your Cordinates</h1>
//         </div>
//         <div className="main_content">
//           <div className="input_section">
//             <div className="card">
//               <form className="input_form" onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   placeholder="Enter Longitude"
//                   value={longitude}
//                   onChange={(e) => setLongitude(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder='Enter Latitude'
//                   value={latitude}
//                   onChange={(e) => setLatitude(e.target.value)}
//                 />
//                 <button type="submit">Submit</button>
//               </form>
//             </div>
//           </div>
//           <div className="image_section card">
//             <img src={image || "default-image.jpg"} alt="Description" />
//           </div>
//         </div>
//         <div className="response_section">
//           {responses.map((response, index) => (
//             <div key={index} className="card response">
//               <h2>API Response {index + 1}</h2>
//               <table>
//                 <thead>
//                   <tr>
//                   <th onClick={() => handleFieldClick('PVOUT')}>PVOUT</th>
//                     <th onClick={() => handleFieldClick('DNI')}>DNI</th>
//                     <th onClick={() => handleFieldClick('GHI')}>GHI</th>
//                     <th onClick={() => handleFieldClick('GTI')}>GTI</th>
//                     <th onClick={() => handleFieldClick('OPTA')}>OPTA</th>
//                     <th onClick={() => handleFieldClick('TEMP')}>TEMP</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td></td>
//                     <td>{response.PVOUT.DNI}</td>
//                     <td>{response.PVOUT.GHI}</td>
//                     <td>{response.PVOUT.GTI}</td>
//                     <td>{response.PVOUT.OPTA}</td>
//                     <td>{response.PVOUT.TEMP}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modelpage;













// import React, { useState } from 'react';
// import axios from 'axios';

// const Modelpage = () => {
//   const [longitude, setLongitude] = useState("");
//   const [latitude, setLatitude] = useState("");
//   const [responses, setResponses] = useState([]);
//   const [selectedField, setSelectedField] = useState(''); // Track the selected field
//   const [image, setImage] = useState(''); // Track the image to be displayed
//   // Assuming imageMap is defined somewhere in your code or external file
//   const imageMap = {
//     // field: imageUrl
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Make API request using axios
//       const response = await axios.post('http://localhost:3001/calculate-sum', {
//         x: parseFloat(longitude),
//         y: parseFloat(latitude)
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         maxBodyLength: Infinity
//       });

//       // Add the response data to the responses array
//       setResponses(prevResponses => [...prevResponses, response.data]);
//     } catch (error) {
//       console.log("Error Fetching the API: ", error);
//     }
//   };

//   const handleFieldClick = (field) => {
//     setSelectedField(field);
//     setImage(imageMap[field]); // Update the image based on the selected field
//   };

//   // Function to handle longitude change
//   const handleLongitudeChange = (e) => {
//     setLongitude(e.target.value);
//   };

//   // Function to handle latitude change
//   const handleLatitudeChange = (e) => {
//     setLatitude(e.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Longitude:
//           <input type="text" value={longitude} onChange={handleLongitudeChange} />
//         </label>
//         <label>
//           Latitude:
//           <input type="text" value={latitude} onChange={handleLatitudeChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {responses.map((response, index) => (
//         <div key={index}>
//           <p>Response: {JSON.stringify(response)}</p>
//         </div>
//       ))}
//       <div>
//         {Object.keys(imageMap).map((field) => (
//           <button key={field} onClick={() => handleFieldClick(field)}>
//             {field}
//           </button>
//         ))}
//       </div>
//       {image && <img src={image} alt="Selected Field" />}
//     </div>
//   );
// };

// export default Modelpage;







import React, { useState } from 'react';
import axios from 'axios';
import "./Modelpage.css";
import Header from '../../Components/Header/Header';

import pvoutImage from '../../assets/images/PVOUT.png';
import dniImage from '../../assets/images/DNI.png';
import ghiImage from '../../assets/images/GHI.png';
import gtiImage from '../../assets/images/GTI.png';
import optaImage from '../../assets/images/OPTA.png';
import tempImage from '../../assets/images/TEMP.png';
import geoAi from "../../assets/images/geoAi.jpeg"

const imageMap = {
  PVOUT: pvoutImage,
  DNI: dniImage,
  GHI: ghiImage,
  GTI: gtiImage,
  OPTA: optaImage,
  TEMP: tempImage,
};

const Modelpage = () => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [responses, setResponses] = useState([]);
  const [selectedField, setSelectedField] = useState(''); // Track the selected field
  const [image, setImage] = useState(''); // Track the image to be displayed

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/calculate-sum', {
        x: parseFloat(longitude),
        y: parseFloat(latitude)
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        maxBodyLength: Infinity
      });

      // Add the actual response data to the responses array
      setResponses(prevResponses => [...prevResponses, response.data]);
     
      
    } catch (error) {
      console.log("Error Fetching the API: ", error);
    }
  };

  const handleFieldClick = (field) => {
    setSelectedField(field);
    setImage(imageMap[field]); // Update the image based on the selected field
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="header">
          <h1>Enter Your Coordinates</h1>
        </div>
        <div className="main_content">
          <div className="input_section">
            <div className="card">
              <form className="input_form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="image_section card">
            <img src={image || geoAi} alt="Description" />
          </div>
        </div>
        <div className="response_section">
          {responses.map((response, index) => (
            <div key={index} className="card response">
              <h2>API Response {index + 1}</h2>
              {/* <p>{JSON.stringify(response.prediction)}</p> */}
              <table>
                <thead>
                  <tr>
                    <th onClick={() => handleFieldClick('PVOUT')}>PVOUT</th>
                    <th onClick={() => handleFieldClick('DNI')}>DNI</th>
                    <th onClick={() => handleFieldClick('GHI')}>GHI</th>
                    <th onClick={() => handleFieldClick('GTI')}>GTI</th>
                    <th onClick={() => handleFieldClick('OPTA')}>OPTA</th>
                    <th onClick={() => handleFieldClick('TEMP')}>TEMP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{ JSON.stringify(response.prediction[0])} kwh</td>
                    <td>{response?.PVOUT?.DNI || JSON.stringify(response.prediction[1])}</td>
                    <td>{response?.PVOUT?.GHI || JSON.stringify(response.prediction[2])}</td>
                    <td>{response?.PVOUT?.GTI || JSON.stringify(response.prediction[3])}</td>
                    <td>{response?.PVOUT?.OPTA || JSON.stringify(response.prediction[4])}<span style={{color: 'black'}}> &#176;</span></td>
                    <td>{response?.PVOUT?.TEMP || JSON.stringify(response.prediction[5])} <span style={{color: 'black'}}> &#8451;</span> </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Modelpage;