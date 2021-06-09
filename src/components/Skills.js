import React from 'react';
import "../styles/input.css";

class Skills extends React.Component {

  render() {
    let skills = this.props.skills;
    return (
        <div className="container" style={{display: "inline-block", width: "100%"}}>
            <h2 style={{marginBottom: "-10px"}}>Skills</h2>
            <ul>
                {skills.map((skill, index) => {
                    return (
                        <li style={{width: "15%", fontWeight: "bold", display: "inline-block", marginTop: "20px"}}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
  }
}

export default Skills;