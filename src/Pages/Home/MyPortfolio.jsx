import React from 'react';
import Slider from '../../Component/Slider'; // Assuming you have created a Slider component
import data from "../../data/index.json";
import './MyPortfolio.css'; // Import the CSS file for MyPortfolio component

export default function MyPortfolio() {
  const projects = data?.projects || []; // Ensure projects array is available

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="portfolio--section--title">Projects</h1>
        </div>
        <div className="portfolio--section--container">
          <div className="portfolio--section--center">
            <Slider items={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
