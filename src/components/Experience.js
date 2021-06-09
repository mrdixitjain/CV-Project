import React from 'react';
import "../styles/input.css";

class Experience extends React.Component {

  render() {
    let experiences = this.props.experiences;
    let experience = this.props.experience;
    return (
      <div className="container a b">
        <h2>Experience</h2>
        {experiences.map((experience, index) => {
          return (
            <form className="f" disabled>
              <input
                placeholder='Position'                
                value={experience.position}                
                readOnly               
              />
              <br />
              <input
                placeholder='Company'                
                value={experience.company}                
                readOnly               
              />
              <br />
              <input
                placeholder='City'                
                value={experience.city}                
                readOnly               
              />
              <br />
              <input
                placeholder='From'                
                value={experience.from}                
                readOnly               
                />  
              <br />
              <input
                placeholder='To'                
                value={experience.to}                
                readOnly               
              />
              <br />
              <button className="e" onClick={() => this.props.deleteExperience(index)}>DELETE</button>  
            </form>    
          )
        })}       
        <form onSubmit={this.props.addExperience} className="f">
          <input
            placeholder='Position'
            value={experience.position}
            id="position"
            onChange={this.props.onChangeExperience}
            required
          />
          <br />
          <input
            placeholder='Company'
            value={experience.company}
            id="company"
            onChange={this.props.onChangeExperience}
            required
          />
          <br />
          <input
            placeholder='City'
            value={experience.city}
            id="city"
            onChange={this.props.onChangeExperience}
            required
          />
          <br />
          <input
            placeholder='From'
            value={experience.from}
            id="from"
            onChange={this.props.onChangeExperience}
            required
          />  
          <br />
          <input
            placeholder='To'
            value={experience.to}
            id="to"
            onChange={this.props.onChangeExperience}
            required
          />
          <br />
          <button type="submit" className="e">ADD</button>
        </form>    
      </div>
    );
  }
}

export default Experience;