import { useState } from 'react';
import './loginSignUp.css';

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignUp = () => {

    const [action, setAction] = useState('Sign Up')

  return (
    <>
    <div> 
    <div className="container">
   <div className="header">
   <div className="text">{action}</div>
   <div className="underline"></div>
   </div>
   
   <div className="inputs">
    {action === "Login" ? <div> </div>:<div className="input">
   <input type = "text" placeholder='Name'/>
   <img src={user_icon} alt=""/>
  </div> }
   
   
   <div className = "input">
   <input type = "email" placeholder='email Id'/>
   <img src={email_icon} alt=""/>
   </div>
   
   <div className = "input">
   <input type = "password" placeholder='password'/>
   <img src={password_icon} alt=""/>
   </div>
   
    
   </div>
   
    {action === "Sign Up" ? <div></div>:  <div className="forgot-password">Forget Password? <span>Click Here</span></div>}

  
   <div className="submit-container">
     <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
     <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>LogIn</div>
   </div>
   
   </div>

   </div>
   </>
  )
}

export default LoginSignUp;

