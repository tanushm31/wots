import React, { Component } from 'react'
import "./scss/dashboard.css"
import ProfilePhoto from '../assets/profimg.jpg'
export default class dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <div className='photo'></div>
        <div className='info'>
          <div className='name'>
            John Appleseed
          </div>
          <div className='info-list'>
            <ul>
              <li>Email: jappseed@xyz.com</li>
              <li>Phone: +91-1234567890</li>
            </ul>
          </div>
        
          {/* <div className='info-list'>
            Email
          </div> */}
        </div>

        <div className='setting-buttons'>
            <button>Settings</button>
            <button>Edit Account Info</button>
        </div>
      </div>
    )
  }
}
