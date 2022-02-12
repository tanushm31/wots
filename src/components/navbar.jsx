import React, { Component } from 'react'
import './scss/navbar.css'
import logo from '../assets/StreamingArtboard 1.svg'
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar"> 

            <div className="logo">WOTS</div>
            {/* <image src={logo} alt="Wots"></image> */}
        
            <div className="menu">
                <a href='/contact'>Contact Us</a>
                <a href='/dashboard'>Dashboard</a>
            </div>
      </div>
    )
  }
}
