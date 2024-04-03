import React from 'react';
import data from "../../data/index.json";
import './Certification.css';

function Certification() {
  return (
    <div className="certification-container">
      <h1>Certifications</h1>
      <div className="certification-list">
        {data.certification.map((cert, index) => (
          <div className="certification-item" key={index}>
            <div className="certification-logo">
              <img src={cert.Logo} alt="" />
            </div>
            <div className="certification-details">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <h2>{cert.Heading}</h2>
              </a>
              <p>{cert.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
