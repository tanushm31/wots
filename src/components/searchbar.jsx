import React, { Component } from 'react'
import "./scss/searchbar.css"

export default class searchbar extends Component {
  render() {
    return (
      <div className='searchbar'>
          <div className='searchlogo'>
            O
          </div>
          <div className='searchinput'>
            <input>

            </input>
          </div>
          <div className='getresults'>
            <button>Get Results</button>
          </div>

      </div>
    )
  }
}
