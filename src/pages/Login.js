import React from 'react'

//import components
import Navbar from '../components/Navbar'
import './scss/common.css'
import './scss/login.css'

export default function LoginPage() {
  return (
    <div className='holder'>
        <Navbar/>
        
        <div className='infopanel'>

            <div className='infoCol' id="loginHeading">
                <b>Enter Details to Login</b>
            </div>
            <div className='infoCol'>
                <div className='infoLabel'>
                    Aadhar No:
                </div>
                <input className='infoInput' type="text">
                    
                </input>
                
            </div>
            <div className='infoCol'>
                <div className='infoLabel'>
                    Password:
                </div>
                <input className='infoInput' type="password">
                    
                </input>
                
            </div>
            <div className='infoCol'>
                <button className='loginButton'>
                    Log In
                </button>
                
            </div>
            <div className='infoCol' id='signuptext'>
            <p>Don't Have an account? <a href='/signup'><u> Sign Up</u></a> right now</p>
            </div>


        </div>


    </div>
  )
}
