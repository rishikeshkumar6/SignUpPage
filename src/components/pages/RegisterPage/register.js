import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import styles from './register.module.css';
function SignUp(){
    const navigate=useNavigate()
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const date=useRef()
   const [showLogin,setShowLogin]=useState(false)
//    const localSignUp=localStorage.getItem("signUp")
   const localEmail=localStorage.getItem("email")
   const localPassword=localStorage.getItem("password")
   const localName=localStorage.getItem("name")
   const localDate=localStorage.getItem("date")

   useEffect(()=>{
    if(localEmail && localName && localPassword && localDate){
        setShowLogin(true)
    }
    
   },)

   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value&&date.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("date",date.current.value)
        // localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

//    const handleSignIn=()=>{
//     if(email.current.value===localEmail&&password.current.value===localPassword){
//         localStorage.setItem("signUp",email.current.value)
//         window.location.reload()
//     }else{
//         alert("Please Enter valid Credential")
//     }
//    }
    return(
        <div>
            {showLogin?navigate('/login'):
           
                <div className={styles.container}>
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <div className="input_space">
                            <input placeholder="date" type='date' ref={date} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>
            }
        </div>
    );
}
export default SignUp;