import React from 'react'
import "./Auth.css"
import Logo from "../../img/authLogo.png"
import SignUp from '../../components/SignUp/SignUp'
import Login from '../../components/Login/Login'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>Mind's Hive</h1>
                <h6>Collaborate, Create, Conquer in the Mind Hive.</h6>
            </div>
        </div>

        <SignUp/>
    </div>
  )
}


export default Auth