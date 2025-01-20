import React from 'react';
import Styles from "./Schemes_styles.module.scss";

function Schemes() {
    return (
        <div className={Styles.container}>
            <h1 className={Styles.title}>GOVERNMENT SCHEMES</h1>
            <div className={Styles.flex_cont}>
                <div id="Solar" className={Styles.card}>
                    <h3 className={Styles.subtitle}>Solar Energy</h3>
                    <table border="1" className={Styles.solartable}>
                        <tr>
                            <th>SR.NO</th>
                            <th>SCHEME</th>
                            <th>CENTRAL FINANCIAL ASSISTANCE/SUBSIDY</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Scheme for Development of Solar Parks and Ultra Mega Solar Power Projects</td>
                            <td>
                                <ul>
                                    <li>Rs.20 lakhs/MW or 30% of the project cost including Grid-connectivity cost, whichever is lower</li>
                                    <li>CFA @ Rs 25.00 lakh per park for DPR preparation of solar parks, conducting surveys, etc.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Scheme for Setting up of 750 MW Grid-connected Solar PV Power Projects under Batch-1 of Phase-II of JNNSM with Viability Gap
                                Funding Support</td>
                            <td>
                                <ul>
                                    <li> The selection of the bidders has been based on the Viability Gap Funding (VGF) required for the project in an ascending order upto the full capacity. Viability Gap Funding (VGF) is limited to 30% of the project cost or 2.5 crore per MW, whichever is lower. </li>
                                    <li>
                                        Solar Energy Corporation of India (SECI) has signed PPA with such project developers for purchasing entire power from the project for 25 years at 5.45 Rs. per unit (4.75 Rs. per unit for projects availing accelerated depreciation).
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                Scheme for Setting up of 2000 MW Grid-connected Solar PV Power Projects under Batch-III of Phase-II of JNNSM with Viability Gap Funding Support
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        The Project developer is provided a viability gap funding based on his bid. The upper limit for VGF is kept at Rs.1.0 Crore/MW for open category (Rs. 1.31 Crore/MW for projects in DCR category).
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                Scheme for Setting up of 5000 MW Grid-connected Solar PV Power Projects under Batch-IV of Phase-II of JNNSM with Viability Gap Funding Support
                            </td>
                            <td>
                                <ul>
                                    <li>The Project developer is provided a Viability Gap Funding based on his bid. The upper limit for VGF is kept at Rs. 1.0 crore/MW for open category and
                                        Rs. 1.25 crore/MW for projects in DCR category.</li>
                                    <li>
                                        SECI will select projects through competitive ebidding based on minimum VGF sought (quoted in INR/MW), or there may be a provision for quoting
                                        a discounted tariff (quoted in INR/kWh).
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Grid Connected Rooftop</td>

                            <td>
                                <ul>
                                    <li>CFA is 30% of the benchmark cost for general and 70% CFA for North Eastern and Special Category States for residential, social and institutional sector.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Pilot-cum-demonstration project for development of grid connected solar PV power plants on canal
                                banks and canal tops</td>
                            <td>
                                <ul>
                                    <li>Financial support of Rs.3 crore/MW or 30% of the project cost, whichever is lower, for Canal Top SPV projects and Rs. 1.5 crore/MW or 30% of the project cost, whichever is lower, for Canal Bank
                                        SPV projects.</li>
                                    <li>
                                        Total CFA of upto Rs.225 crore for 100 MW (50 MW on Canal Tops and 50 MW on Canal Banks) to be disbursed over a period of maximum 2 years post
                                        sanctioning of the plants as under:
                                    </li>
                                    <li>
                                        upto 40% on sanctioning of the projects.
                                    </li>
                                    <li>
                                        60% on successful commissioning of the projects.
                                    </li>
                                    <li>
                                        Service charge to SECI @1% of project cost.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Scheme for setting up of 1000 MW of Grid-Connected Solar PV Power projects by Central Public Sector Undertakings (CPSUs) under Batch- V of Phase II of
                                JNNSM</td>
                            <td>
                                <ul>
                                    <li>
                                        Viability Gap Funding (VGF) provided through SECI at a fixed rate of Rs. 1 Cr/ MW for projects where domestically produced cells and modules are used and Rs. 50 lakh/ MW in cases where
                                        domestically produced modules are used.
                                    </li>
                                    <li>
                                        VGF released in two tranches as follows:
                                        <ol>
                                            <li>  50% on successful commissioning of the full capacity of project (COD).</li>
                                            <li>
                                                Balance 50% after one year of successful operation of the project.
                                            </li>
                                        </ol>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>PM-Kusum Yojana</td>
                            <td>
                                <ul>
                                    <li>PM-Kusum Yojana promotes solar energy adoption among Indian farmers, installing solar pumps and power plants on agricultural lands. It offers financial aid for installations, enabling surplus power sale to the grid for additional income. The scheme aims to reduce diesel dependency, mitigate emissions, and advance sustainable farming practices.</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="wind" className={Styles.card}>
                    <h3 className={Styles.subtitle}>Wind Energy</h3>
                    <table border="1" className={Styles.solartable}>
                        <tr>
                            <th>SR.NO</th>
                            <th>SCHEME</th>
                            <th>CENTRAL FINANCIAL ASSISTANCE/SUBSIDY</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Generation-Based Incentive (GBI)</td>

                            <td>
                                <ul>
                                    <li>This scheme provides incentives to wind power developers based on the generation of electricity from wind energy projects. It aims to encourage private investment in wind power generation.
                                    </li>

                                    <li>
                                        Under the scheme for wind power, a GBI @ Rs. 0.50 per unit of electricity fed into the grid is provided for a period not less than 4 years and a maximum period of 10 years with a cap of Rs. 62 lakhs per MW. The scheme is in parallel with accelerated depreciation but on a mutually exclusive manner. The total disbursement in a year should not exceed one fourth of the maximum limit of the incentive i.e. Rs. 15.50 lakhs per MW during the first four years. The Scheme includes captive wind power projects, but excludes third party sale, (viz. merchant power plants).
                                    </li>
                                </ul>
                            </td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Accelerated Depreciation Benefit</td>
                            <td>
                                <ul>
                                    <li>The government offers accelerated depreciation benefits to wind power project developers, allowing them to claim higher depreciation on their investments in wind turbines. This incentivizes investment in wind energy projects.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>National Wind-Solar Hybrid Policy</td>
                            <td>
                                <ul>
                                    <li>This policy promotes the development of hybrid wind-solar power projects by providing various incentives and support mechanisms. It aims to optimize land use, improve grid stability, and increase renewable energy penetration.</li>

                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Renewable Purchase Obligation (RPO)</td>
                            <td>
                                <ul>
                                    <li>
                                        RPO mandates utilities and power distribution companies to procure a certain percentage of their total electricity from renewable energy sources, including wind power. This creates demand for wind energy and drives investment in the sector.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <div className={Styles.sec3}>

                <center>
                    <p>For more information below are links to official government websites</p>
                    <br></br>
                    <p> <a href='https://mnre.gov.in/'>Ministry of New and Renewable Energy</a></p>
                    <br></br>
                    <p> <a href='https://pmsuryaghar.gov.in/'>National Portal for Rooftop Solar</a></p>
                    <br></br>
                    <p> <a href='https://www.seci.co.in/'>Solar Energy Corporation of India Limited (SECI)</a></p>
                    <br></br>
                    <p> <a href='https://niwe.res.in/'>National Institute of Wind Energy</a></p>
                    <br></br>
                    <p> <a href='https://www.energy.gov/eere/wind/wind-energy-technologies-office'>Department of Energy</a></p>
                </center>
            </div>
        </div>
    );
}

export default Schemes;
