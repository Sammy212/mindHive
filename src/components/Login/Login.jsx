import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className="a-right">
        <form action="" className="infoForm authForm">
            <h3>Log In</h3>

            <div>
                <input 
                    type="text" 
                    placeholder="Username"
                    className="infoInput"
                    name="username"
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Password"
                    className="infoInput"
                    name="password"
                />
            </div>
            <div className="spanBtn">
                <span style={{ fontSize: "12px" }}>
                    Don't have an account <span style={{ color: 'orange' }}>Sign Up!</span>
                </span>
                <button className="button infoButton">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login