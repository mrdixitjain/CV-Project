import React from 'react';
import "../styles/input.css";

class Skill extends React.Component {

  render() {
    let skills = this.props.skills;
    let skill = this.props.skill;
    return (
      <div className="container a b">
        <h2>Skills</h2>
        <ul>
            {skills.map((skill, index) => {
            return (
                <li style={{fontWeight: "bold", fontSize: "larger"}}>
                    {skill}
                    <button className="h" onClick={() => this.props.deleteSkill(index)}>DELETE</button> 
                </li> 
            )
            })}  
        </ul>     
        <form onSubmit={this.props.addSkill} className="f">
          <input
            placeholder='Skill'
            value={skill}
            onChange={this.props.onChangeSkill}
            required
          />
          <br />
          <button type="submit" className="e">ADD</button>  
        </form>    
      </div>
    );
  }
}

export default Skill;