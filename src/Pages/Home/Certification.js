import React from 'react'
import data from "../../data/index.json";

function Certification() {
  return (
    <div>
    <h1>Certifications</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px", alignItems: "center" }}>
      <div style={{ width: "45%", display: "flex", flexDirection: "column", gap: "14px" }}>
        {data.certification.map((ele, i) => {
          return (
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }} key={i}>
              <div style={{ display: "flex", gap: "6px" }} key={i}>
              <div style={{ 
  width: "72px", 
  height: "72px", 
  backgroundColor: "#fff", 
  borderRadius: "80%", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  boxShadow: "0 0 62px rgba(0, 0, 0, 0.12), 0 0 30px rgba(0, 0, 0, 0)" 
}}>
                   <img src={ele.Logo} alt="" style={{ 
    width: "100%", 
    height: "100%", 
    objectFit: "cover", /* or "contain" depending on your preference */ 
    borderRadius: "50%" /* ensure the image keeps the circular shape */ 
  }} />
                </div>
                <div>
                  <a href={ele.link} target='_blank'> <h2 style={{ fontWeight: "600", fontSize: "25px" ,margin:"10px"}}>
                             {ele.Heading}</h2>
                             </a>
                  <p style={{ fontSize: "20px" ,margin:"10px"}}>{ele.Description}</p>
                  {/* <a href={ele.link}>Link</a> */}
                </div>
              </div>
              <div
                style={{ display: data.certification.length - 1 === i ? "none" : "block", height: "14px", border: "dotted", borderWidth: "0px 1px 0px 0px", borderColor: "rgba(0, 0, 0, 0.12)", backgroundColor: "rgba(0, 0, 0, 0)", width: "26px" }}
              ></div>
            </div>
          );
        })}
      </div>
      
    </div>
  </div>
  )
}

export default Certification