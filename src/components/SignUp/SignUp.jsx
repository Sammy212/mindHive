import React from "react";
import "./SignUp.css"

const SignUp = () => {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        
        <div>
          
            <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
            />

            <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lasttname"
            />
        </div>
        
        <div>
            <input 
                type="text" 
                className="infoInput" 
                name="username" 
                placeholder="Username"
            />
        </div>

        <div>
            <input
                type="password"
                placeholder="Enter password"
                className="infoInput"
                name="password"
            />

            <input
                type="password"
                placeholder="Confirm password"
                className="infoInput"
                name="confirmpass"
            />
        </div>
        <div>
            <span style={{fontSize: '12px'}}>Already have an account? <span style={{fontSize: "13px", color: "orange"}}>Login!</span></span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
