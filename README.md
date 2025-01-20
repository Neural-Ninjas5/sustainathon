# GeoTech

GeoTech is an innovative marketplace platform designed to empower users in transitioning to renewable energy by facilitating the purchase of solar panels. The platform offers advanced tools and features to calculate solar energy output and estimate the cost of setting up solar panels at a given location. With GeoTech, users can make informed decisions about their investment in solar energy and access essential documentation for various government and private schemes.

## Workflow
<!-- ![GeoTech Workflow](https://i.ibb.co/mG4mBxS/Whats-App-Image-2025-01-20-at-14-04-10.jpg "GeoTech Workflow") -->
<img src = "https://i.ibb.co/mG4mBxS/Whats-App-Image-2025-01-20-at-14-04-10.jpg"/>

## Concept Map
<img src = "https://i.ibb.co/3TCMQQw/geotech-conceptmap-drawio.png"/>

## Technology Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Machine Learning**: Python-based advanced models for PV output prediction.
- **APIs**:  FAST API for integrating ml model with our main server and RESTful APIs.

## Novelty
Comprehensive Solar Panel Marketplace: Unlike traditional platforms, our website offers a one-stop solution for purchasing solar panels from over 10 different companies, allowing customers to compare prices, panel types, and specifications all in one place.

AI/ML-Driven Solar Panel Recommendation: We leverage an advanced AI/ML model that uses the user’s location and average electricity usage to calculate the optimal number of solar panels required, their cost, and other crucial metrics—something not commonly offered by current platforms.

Tailored Solar Solutions for Consumers: Our platform personalizes the solar panel buying experience by offering data-driven insights and custom recommendations, helping users make informed decisions on the right panel system for their needs.

Seamless Integration of Price Comparison and Sustainability: We uniquely combine cost-effectiveness with sustainability by not only offering detailed price comparisons but also emphasizing environmentally friendly energy solutions, empowering users to make eco-conscious choices.


## Solution

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

## Contact
For any inquiries or support, please contact us at:
- GitHub: [GeoTech Repository](https://github.com/Neural-Ninjas5/sustainathon.git)

---

## Acknowledgements
- Thanks to our contributors and the open-source community for their support.
- Special appreciation for the developers who created the underlying machine learning model and APIs.

