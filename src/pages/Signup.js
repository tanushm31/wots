
import React from 'react'
import './scss/common.css'
import './scss/signup.css'
import Navbar from '../components/Navbar'


export default function Signup() {
  return (
    <div className='holder'>
        <Navbar/>
        
        <div className='infoPanel'>

            <div className='signupHeader'>
                Enter Your details to Signup
            </div>

            <div className='signUpForm'>
                <div className='infoRow'>
                    <div className='infoCol'>
                        <label>
                            First Name
                        </label>
                        <input type="text"></input>
                    </div>
                    <div className='infoCol'>
                         <label>
                            Last Name
                        </label>
                        <input type="text"></input>
                    </div>
                </div>

                <div className='infoRow'>
                    <div className='infoCol'>
                        <label>
                            Email
                        </label>
                        <input type="text"></input>
                    </div>
                    <div className='infoCol'>
                         <label>
                            Phone
                        </label>
                        <input type="number"></input>
                    </div>
                </div>

                <div className='infoRow'>
                    <div className='infoCol'>
                        <label>
                            Aadhar Number
                        </label>
                        <input type="number"></input>
                    </div>
                    <div className='infoCol'>
                         <label>
                            Password
                        </label>
                        <input type="password"></input>
                    </div>
                </div>
                <div className='infoRow' id='signUpButton'>

                    <button className='signupButton'>
                        Sign Up
                    </button>

                </div>

                <div className='infoRow' >

                    <div id='logintext'>
                    <p>Don't Have an account? <a href='/login'><u> Log In</u></a> right now</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
