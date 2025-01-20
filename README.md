# GeoTech

GeoTech is an innovative marketplace platform designed to empower users in transitioning to renewable energy by facilitating the purchase of solar panels. The platform offers advanced tools and features to calculate solar energy output and estimate the cost of setting up solar panels at a given location. With GeoTech, users can make informed decisions about their investment in solar energy and access essential documentation for various government and private schemes.

## Workflow
![GeoTech Banner](../workflow.jpeg "GeoTech Platform")


## Features

### 1. **Marketplace for Solar Panels**
   - A curated selection of high-quality solar panels available for purchase.
   - Detailed product descriptions and reviews to help users make informed choices.

### 2. **Scheme Documentation**
   - Access to detailed documentation of various solar energy schemes and subsidies offered by governments and private organizations.

### 3. **Advanced Solar Energy Calculator**
   - **Input Parameters**:
     - Longitude and Latitude for precise location-based calculations.
     - State of residence.
     - Average monthly electricity bill.
     - Total available rooftop area (in square meters or square feet).
     - Investment budget.
     - Required solar plant capacity (in kW).
     - Sanctioned load (in kW).
   - **Output**:
     - Estimated photovoltaic output (PVout).
     - Comprehensive cost analysis for solar panel installation.

### 4. **Machine Learning Model for Solar Metrics**
   - The platform leverages an advanced machine learning model to calculate:
     - **PVout**: Photovoltaic output.
     - **DNI**: Direct Normal Irradiance.
     - **GTI**: Global Tilted Irradiance.
     - **GHI**: Global Horizontal Irradiance.
     - **OPTA**: Optimal Tilt Angle.
     - **DHI**: Diffuse Horizontal Irradiance.
   - Provides precise and location-specific solar metrics for better decision-making.

### 5. **Cost Estimation Tools**
   - Provides a breakdown of installation costs.
   - Includes detailed insights into long-term savings and return on investment.

---

## Technology Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Machine Learning**: Python-based advanced models for PV output prediction.
- **APIs**: RESTful API integration for seamless data exchange.

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or above)
- MongoDB
- Python (for machine learning model execution)

### Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/geotech.git
   cd geotech
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

4. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

5. Start the frontend development server:
   ```bash
   npm start
   ```

6. Set up the machine learning model:
   - Navigate to the `ml-model` directory.
   - Install Python dependencies using `pip install -r requirements.txt`.
   - Run the model server:
     ```bash
     python app.py
     ```

### Configuration
Update the `.env` files in both the `backend` and `frontend` directories with the appropriate configurations, such as database credentials and API keys.

---

## Usage
1. Navigate to the homepage to explore available solar panels.
2. Use the solar energy calculator to estimate your energy needs and costs.
3. Access detailed documentation about schemes and subsidies.
4. Add your selected solar panels to the cart and proceed to checkout.

---

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your forked repository.
4. Submit a pull request for review.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any inquiries or support, please contact us at:
- Email: support@geotech.com
- GitHub: [GeoTech Repository](https://github.com/your-username/geotech)

---

## Acknowledgements
- Thanks to our contributors and the open-source community for their support.
- Special appreciation for the developers who created the underlying machine learning model and APIs.

