//Component Imports
import Navbar from '../components/Navbar.jsx'
import SearchBar from '../components/Searchbar';
import Database from '../Database';
import Dashboard from '../components/Dashboard';
import ReadData from '../ReadData'

import "./scss/common.css"
import "./scss/HomePage.css"
import React from 'react'

export default function HomePage() {
  return (
    <div className="holder">
        <Navbar/>
        <div className='about'>
          <div className='heading'>
            About
          </div>
          <div className='paragraph'>
            There are a ton of schemes launched by the government for the good of people. Some for poor, some regional schemes etc. Its extremely difficult to keep track of all the skins that a person can enroll in and benefit from. WOTS aims to solve that problem by developing a platform for keeping track of all the schemes a person can enroll in and all the benefits they can enjoy or have enjoyed in the past. It also provides an opportunity to maximize digitally enrolling for welfare schemes and keeping track of applications for such schemes.
          </div>
        </div>
        <div className='loginButtondiv'>
          <a className="loginButton" href="/login-signup">
            Login / Signup
          </a>
        </div>
        {/* <Dashboard/> */}
    </div>
  )
}
