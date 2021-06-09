import './App.css';
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';
import EducationDetails from './components/EducationDetails';
import ExperienceDetails from './components/ExperienceDetails';
import PersonalInfoNavBar from './components/PersonalInfoNavbar';
import Skills from './components/Skills';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educations : [],
      education : {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: ""
      },
      experiences : [],
      experience : {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: ""
      },
      personalInfo : {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        currentProfile: ""
      },
      skills: [],
      skill: ""
    };
  };

  onChangeProfile = (e) => {
    console.log(e.target.id);
    let id = e.target.id;
    let personalInfo = this.state.personalInfo;
    if (id === 'firstname') {
      personalInfo.firstName = e.target.value;
    }
    else if(id === 'lastname') {
      personalInfo.lastName = e.target.value;
    }
    else if(id === 'phone') {
      personalInfo.phone = e.target.value;
    }
    else if(id === 'email') {
      personalInfo.email = e.target.value;
    }
    else if(id === 'profile') {
      personalInfo.currentProfile = e.target.value;
    }
    this.setState({
        personalInfo: personalInfo
    });
  }

  onChangeEducation = (e) => {
    console.log(e.target.id);
    let id = e.target.id;
    let education = this.state.education;
    if (id==='university') {
      education.university = e.target.value;
    }
    else if (id==='city') {
      education.city = e.target.value;
    }
    else if (id==='from') {
      education.from = e.target.value;
    }
    else if (id==='to') {
      education.to = e.target.value;
    }
    else if (id==='degree') {
      education.degree = e.target.value;
    }
    else if (id==='subject') {
      education.subject = e.target.value;
    }
    this.setState({
        education: education
    });
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations : [...this.state.educations, this.state.education],
      education : {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: ""
      }
    });
  }

  deleteEducation = (index) => {
    console.log(index);
    let educations = this.state.educations;
    educations.splice(index, 1);
    console.log(educations);
    this.setState({
      educations : educations
    });
  }

  onChangeExperience = (e) => {
    let id = e.target.id;
    console.log(id);
    let experience = this.state.experience;
    if (id === "position") {
      experience.position = e.target.value;
    }
    else if (id === "company") {
      experience.company = e.target.value;
    }
    else if (id==='city') {
      experience.city = e.target.value;
    }
    else if (id==='from') {
      experience.from = e.target.value;
    }
    else if (id==='to') {
      experience.to = e.target.value;
    }
    this.setState({
        experience: experience
    });
  }

  addExperience = (e) => {
    e.preventDefault();
    this.setState({
      experiences : [...this.state.experiences, this.state.experience],
      experience : {
        position: "",
        company: "",
        city: "",
        from: "",
        to: ""
      }
    });
  }

  deleteExperience = (index) => {
    console.log(index);
    let experiences = this.state.experiences;
    experiences.splice(index, 1);
    console.log(experiences);
    this.setState({
      experiences : experiences
    });
  }

  onChangeSkill = (e) => {
    this.setState({
      skill: e.target.value
    });
  }

  addSkill = (e) => {
    e.preventDefault();
    this.setState({
      skills : [...this.state.skills, this.state.skill],
      skill : ""
    });
  }

  deleteSkill = (index) => {
    let skills = this.state.skills;
    skills.splice(index, 1);
    this.setState({
      skills : skills
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="body">
          <div className="inp">
            <PersonalInfo 
              state={this.state.personalInfo}
              onChangeProfile={this.onChangeProfile}
            />
            <Experience 
              experience={this.state.experience}
              experiences={this.state.experiences}
              onChangeExperience={this.onChangeExperience}
              addExperience={this.addExperience}
              deleteExperience={this.deleteExperience}
            />
            <Education 
              education={this.state.education}
              educations={this.state.educations}
              onChangeEducation={this.onChangeEducation}
              addEducation={this.addEducation}
              deleteEducation={this.deleteEducation}
            />
            <Skill 
              skill={this.state.skill}
              skills={this.state.skills}
              onChangeSkill={this.onChangeSkill}
              addSkill={this.addSkill}
              deleteSkill={this.deleteSkill}
            />
          </div>
          <div className="op">
            <PersonalInfoNavBar 
              state={this.state.personalInfo} 
            />
            <EducationDetails
              educations={this.state.educations}
            />
            <ExperienceDetails
              experiences={this.state.experiences}
            />
            <Skills
              skills={this.state.skills}
            />
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
