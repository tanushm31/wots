//Component Imports
import Navbar from '../components/Navbar.jsx'
// import Navbar from '../'

import Dashboard from '../components/Dashboard';
import SearchBar from '../components/Searchbar';
import Database from '../Database';
import ReadData from '../ReadData'

import React from 'react'

export default function DashboardPage() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <SearchBar/>


    </div>
  )
}
