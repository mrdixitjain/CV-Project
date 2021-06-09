import React from 'react';
import "../styles/input.css";

const EducationDetails = (props) => {
  let educations = props.educations;
  console.log(educations);

  return(
    <div className="container" style={{display: "inline-block", width: "100%"}}>
      <h2>Education</h2>
      {educations.map((education, index) => {
        return (
          <div style={{display: 'flex', marginTop: "10px",  paddingLeft: "15px"}}>
            <div style={{width: "15%", fontWeight: "bold"}}>
              {education.from} - {education.to}
            </div>
            <div style={{width: "50%", textAlign: "left",}}>
              <div style={{ fontWeight: "bold"}}>
                {education.university}, {education.city}
              </div>
              <div>
                Degree: {education.degree}
              </div>
              <div>
                Subject: {education.subject}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default EducationDetails;