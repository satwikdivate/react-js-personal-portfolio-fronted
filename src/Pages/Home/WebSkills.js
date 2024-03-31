import React from 'react'
import data from "../../data/index.json";
function WebSkills() {
  return (

        <section className="skills--section" id="mySkills">
            <h1>Web Skills</h1>  
          <div className="skills--section--container">
    
            {data?.Web?.map((item, index) => (
              <div key={index} className="skills--section--card">
                <div className="skills--section--img">
                  <img src={item.src} alt="Product Chain" />
                </div>
                <div className="skills--section--card--content">
                  <h3 className="skills--section--title">{item.title}</h3>
                  <p className="skills--section--description">{item.description}</p>
                </div>
              </div>
            ))}
            
          </div>
          
        </section>
  )
}

export default WebSkills