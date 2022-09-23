import './register.css'
import React from 'react'

function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">RahulSocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on RahulSocial.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder = "Username" type="text" className="loginInput" />
                    <input placeholder = "Email" type="text" className="loginInput" />
                    <input placeholder = "password" type="password" className="loginInput" />
                    <input placeholder = "Password Again" type="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Log Into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register