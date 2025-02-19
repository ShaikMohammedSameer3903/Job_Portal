import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Show the Sign-In Popup
  showSignin()
  {
    let popup = document.getElementById("popup");
    let signin = document.getElementById("signin"); 
    let signup = document.getElementById("signup");
    let popupHeader = document.getElementById("popupHeader"); 
    popupHeader.innerHTML = "Login";
    signup.style.display="none"; 
    signin.style.display="block";
    popup.style.display ="block";
  }

  showSignup(){ 
    let popup = document.getElementById("popup"); 
    let signin = document.getElementById("signin"); 
    let signup = document.getElementById("signup");
    let popupHeader = document.getElementById("popupHeader"); 
    popupHeader.innerHTML = "Create new account"; 
    signup.style.display="block"; 
    signin.style.display="none"; 
    popup.style.display = "block"; 
  }

  // Close the Sign-In Popup
  closeSignin = (event) => {
    if (event.target.id === 'popup') {
      const popup = document.getElementById('popup');
      popup.style.display = 'none';
    }
  };

  render() {
    return (
      <div id="container">
        {/* Popup for Sign-In */}
        <div id="popup" onClick={this.closeSignin}>
          <div id="popupWindow">
            <div id="popupHeader">Login</div>
            <div id="signin">
              <label className="usernameLabel">User name*</label>
              <input type="text" id="username" />
              <label className="passwordLabel">Password*</label>
              <input type="password" id="password" />
              <div className="forgotpassword">
                Forgot <label>Password?</label>
              </div>
              <button className="signinButton">Sign In</button>
              <div className="div1"></div>
              <div className="div2">
                Don't have an account? 
                <label onClick={this.showSignup}>SIGN UP NOW</label>
              </div>
            </div>
            <div id='signup'>
            <label>Full Name*</label> 
            <input type='text' id='fullname' /> 
            <label>Email</label> 
            <input type='text' id='email'/>
            <label>Select Role*</label> 
            <select id='role'> 
              <option value=''> </option> 
              <option value='1'>Admin</option> 
              <option value='2'>Employer</option> 
              <option value='3'>Job Seeker</option>

              </select> <label>Password*</label> 
              <input type='password' id='password'/> 
              <label>Confirm Password*</label> 
              <input type='password' id='confirmpassword'/>
              <button>Register</button> 
              <div>Already have an account?<span onClick={this.showSignin}>SIGN IN</span></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div id="header">
          <img className="logo" src="/logo.png" alt="Logo" />
          <div className="logoText">
            <span>Job</span>Portal
          </div>
          <img
            className="signinIcon"
            src="/user.png"
            alt="Sign In"
            onClick={this.showSignin}
          />
          <label className="signinText" onClick={this.showSignin}>
            Sign In
          </label>
        </div>

        {/* Content */}
        <div id="content">
          <div className="text1">INDIA'S #1 JOB PLATFORM</div>
          <div className="text2">Your job search ends here</div>
          <div className="text3">Discover career opportunities</div>
          <div className="searchBar">
            <input
              type="text"
              className="searchText"
              placeholder='Search by "Skill"'
            />
            <input
              type="text"
              className="searchLocation"
              placeholder="Job Location"
            />
            <button className="searchButton">Search jobs</button>
          </div>
        </div>

        {/* Footer */}
        <div id="footer">
          <label className="copyrightText">
            Copyright @2024. All rights reserved.
          </label>
          <img className="socialmediaIcon" src="/facebook.png" alt="Facebook" />
          <img className="socialmediaIcon" src="/twitter.png" alt="Twitter" />
          <img className="socialmediaIcon" src="/linkedin.png" alt="LinkedIn" />
        </div>
      </div>
    );
  }
}

export default App;