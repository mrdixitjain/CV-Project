import React from 'react';
import "../styles/input.css";

class Education extends React.Component {

  render() {
    let educations = this.props.educations;
    let education = this.props.education;
    return (
      <div className="container a b">
        <h2>Education</h2>
        {educations.map((education, index) => {
          return (
            <form className="f" disabled>
              <input
                placeholder='University'                
                value={education.university}                
                readOnly               
              />
              <br />
              <input
                placeholder='City'                
                value={education.city}                
                readOnly               
              />
              <br />
              <input
                placeholder='Degree'                
                value={education.degree}                
                readOnly               
              />
              <br />
              <input
                placeholder='Subject'                
                value={education.subject}                
                readOnly               
                /> 
              <br />
              <input
                placeholder='From'                
                value={education.from} 
                readOnly               
              />  
              <br />
              <input
                placeholder='To'                
                value={education.to}                
                readOnly               
              />
              <br />
              <button className="e" onClick={() => this.props.deleteEducation(index)}>DELETE</button>  
            </form>    
          )
        })}       
        <form onSubmit={this.props.addEducation} className="f">
          <input
            placeholder='College/University/School'
            value={education.university}
            id="university"
            onChange={this.props.onChangeEducation}
            required
          />
          <br />
          <input
            placeholder='City'
            value={education.city}
            id="city"
            onChange={this.props.onChangeEducation}
            required
          />
          <br />
          <input
            placeholder='Degree'
            value={education.degree}
            id="degree"
            onChange={this.props.onChangeEducation}
            required
          />
          <br />
          <input
            placeholder='Subject'
            value={education.subject}
            id="subject"
            onChange={this.props.onChangeEducation}
            required
          /> 
          <br />
          <input
            placeholder='From'
            value={education.from}
            id="from"
            onChange={this.props.onChangeEducation}
            required
          />  
          <br />
          <input
            placeholder='To'
            value={education.to}
            id="to"
            onChange={this.props.onChangeEducation}
            required
          />
          <br />
          <button type="submit" className="e">ADD</button>  
        </form>    
      </div>
    );
  }
}

export default Education;