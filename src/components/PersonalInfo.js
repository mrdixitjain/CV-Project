import React from 'react';
import "../styles/input.css";

class PersonalInfo extends React.Component {

  render() {
    let state = this.props.state;
    return (
      <div className="container a">
        <h2>Personal Info</h2>
        <div className="f">
          <input
            placeholder='First Name'
            value={state.firstName}
            id="firstname"
            onChange={this.props.onChangeProfile}
            type="text"
          />
          <br />
          <input
            placeholder='Last Name'
            value={state.lastName}
            id="lastname"
            onChange={this.props.onChangeProfile}
            type="text"
          />
          <br />
          <input
            placeholder='Email'
            value={state.email}
            id="email"
            onChange={this.props.onChangeProfile}
            type="email"
          />
          <br />
          <input
            placeholder='Phone'
            value={state.phone}
            id="phone"
            onChange={this.props.onChangeProfile}
            type="text"
          /> 
          <br />
          <input
            placeholder='Current Profile'
            value={state.currentProfile}
            id="profile"
            onChange={this.props.onChangeProfile}
            type="text"
          />   
        </div>           
      </div>
    );
  }
}

export default PersonalInfo;