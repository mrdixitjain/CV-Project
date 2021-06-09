import React from 'react';
import "../styles/input.css";

const ExperienceDetails = (props) => {
  let experiences = props.experiences;
  console.log(experiences);

  return(
    <div className="container" style={{display: "inline-block", width: "100%"}}>
      <h2>Experience</h2>
      {experiences.map((experience, index) => {
        return (
          <div style={{display: 'flex', marginTop: "10px",  paddingLeft: "15px"}}>
            <div style={{width: "15%", fontWeight: "bold"}}>
              {experience.from} - {experience.to}
            </div>
            <div style={{width: "50%", textAlign: "left",}}>
              <div style={{ fontWeight: "bold"}}>
                {experience.position}
              </div>
              <div>
                {experience.company}, {experience.city}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default ExperienceDetails;