import React from 'react'
import {useState} from "react"
// import { useState } from 'react/cjs/react.production.min'
import './readdata.css'
import Axios from 'axios'
export default function ReadData() {

    const [datalist,setDataList] = useState([])
    const [newAge,setNewAge] = useState([])
    const getData= () =>
    {
        Axios.get("http://localhost:3001/wots").then((res)=>
        {
            // console.log(res)
            setDataList(res.data)
            console.log(datalist)
        })
        // console.log("Hello")
    }
    const deleteField=(id)=>
    {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }
    const updateAge=(id)=>{
        Axios.put("http://localhost:3001/update",{age:newAge,id:id}).then(
            (res)=>{
                setDataList(datalist.map((val)=>
                {
                    return val.id==id?
                    {
                        id:val.id,
                        name:val.name,
                        age:val.newAge,
                        phone:val.phone,
                        
                    }:val
                }))
            }
        )
    }
  return (
    <div className='head'>
        
        <div> Data</div>
        <button onClick={getData}>
            Load Data
        </button>
        {
            datalist.map(val=>
            {
                return (
                    <div>
                        {val.name}
                        <div>
                            <input onChange={(e)=>{
                                setNewAge(e.target.value)
                            }}>

                            </input>
                            <button onClick={()=>{updateAge(val.id)}}>
                                Update
                            </button>
                            <button onClick={()=>{deleteField(val.id)}}>
                                Delete
                            </button>
                        </div>
                    </div>
                )
                    
                
            })
        }

    </div>
  )
}
