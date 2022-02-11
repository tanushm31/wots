import React, { Component } from 'react'
import './scss/navbar.css'
import logo from '../assets/StreamingArtboard 1.svg'
export default class navbar extends Component {
  render() {
    return (
      <div className="navbar"> 

            <div className="logo">WOTS</div>
            {/* <image src={logo} alt="Wots"></image> */}
        
            <div className="menu">
                <a>Contact Us</a>
                <a>Login/SignUp</a>
            </div>
      </div>
    )
  }
}
