//Component Imports
import Navbar from '../components/Navbar.jsx'
import SearchBar from '../components/Searchbar';
import Database from '../Database';
import Dashboard from '../components/Dashboard';
import ReadData from '../ReadData'

import"./scss/HomePage.css"
import React from 'react'

export default function HomePage() {
  return (
    <div className="holder">
        <Navbar/>
        <div className='loginButtondiv'>
          <a className="loginButton" href="/login-signup">
            Login / Signup
          </a>
        </div>
        {/* <Dashboard/> */}
    </div>
  )
}
