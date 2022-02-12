
import './database.css'
import Axios from 'axios'

import React from 'react'
import {useState} from "react"


export default function Database() {
 
  const[name,setName]= useState("")
  const[age,setAge]= useState(0)
  const[phone,setPhone]= useState(0)

  const displayInfo=()=>{
    console.log(name+age+" "+phone)
  }
  const addData=()=>{
    Axios.post('http://localhost:3001/create',
      {
        name:name,
        age:age,
        phone:phone,
      }
    ).then(()=>{
      console.log("Successfully Added Data")
    })
  }
  return (
    <div className='form'>
    <div className='form-elem'>
      <label type="text">Name</label>
      <input type="text" 
        onChange={(event)=> 
          {setName(event.target.value)}
        }
      />
    </div>
    <div className='form-elem'>
      <label type="number">Age</label>
      <input type="number"
        onChange={(event)=> 
          {setAge(event.target.value)}
        }
      />
    </div>
    <div className='form-elem'>
      <label type="number">Phone</label>
      <input type="number"
        onChange={(event)=> 
          {setPhone(event.target.value)}
        }
      />
    </div>
    <div className='form-elem'>
      <button onClick={addData}>Submit</button>
    </div>
  
    </div>
  )
}

