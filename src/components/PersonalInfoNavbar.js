import React from 'react';
import "../styles/input.css";

const PersonalInfoNavbar = (props) => {
  let state = props.state;
  let currentProfile = state.currentProfile ? state.currentProfile : 'Current Profile';
  let firstName = state.firstName ? state.firstName : 'First';
  let lastName = state.lastName ? state.lastName : '- Last';
  let email = state.email ? state.email : 'Email';
  let phone = state.phone ? state.phone : 'Phone';

  return(
    <div  className="container a g">
      <div style={{display: "inline-block"}}>
        <h2 style={{marginBottom: "5px", marginTop: "30px"}}>{firstName} {lastName}</h2>
        <h4 style={{marginTop: "5px"}}>{currentProfile}</h4>
      </div>
      <div style={{display: "inline-block",float: "right", marginRight: "10px"}}>
        <h4 style={{marginBottom: "5px",  marginTop: "30px"}}>{email}</h4>
        <h4 style={{marginTop: "5px"}}>{phone}</h4>
      </div>
    </div>
  )
};

export default PersonalInfoNavbar;