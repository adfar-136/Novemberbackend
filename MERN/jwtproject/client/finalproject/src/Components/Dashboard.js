import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
    const [appliedOppurtunites,setAppliedOppurtunities] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("https://novdeploy.onrender.com/auth/verify").then((res)=>{
           if(!res.data.status){
            navigate("/login")
           } else {
            fetchAppliedOppurtunities()
           }
        }).catch((error)=>{
            navigate('/login')
        })
    },[navigate])
    const fetchAppliedOppurtunities =async()=>{
        try {
            const response = await axios.get("https://novdeploy.onrender.com/auth/applied-oppurtunities")
            setAppliedOppurtunities(response.data)
        } catch (error) {
            
        }
    }
    const handleLogout=()=>{
        axios.get("https://novdeploy.onrender.com/auth/logout")
        .then((res)=>{
            if(res.data.status){
                navigate("/login")
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
         <h1>Dashboard</h1>
         <h2>Applied Oppurtunities</h2>
         <button onClick={handleLogout}>Logout</button>
         <div>
            {appliedOppurtunites.map((oppurtunity,index)=>(
                <div key={index}>
                     <h1>{oppurtunity.profile_name}</h1>
                     <p><strong>Company: </strong> {oppurtunity.company_name}</p>
                     <p><strong>Stipend: </strong> {oppurtunity.stipend}</p>
                     <p><strong>Duration: </strong> {oppurtunity.duration}</p>
                     
                </div>
            ))}
         </div>
    </div>
  )
}