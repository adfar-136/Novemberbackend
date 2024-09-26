import React,{useEffect, useState} from 'react'
import oppurtunitiesData from "../oppurtunities.json"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function OppurtunitiesComponent() {
    const [appliedOppurtunites,setAppliedOppurtunities] = useState([])
    useEffect(()=>{
         fetchAppliedOppurtunities() 
    },[])
    console.log(oppurtunitiesData)
    const fetchAppliedOppurtunities=async()=>{
        try {
            const response = await axios.get("https://novdeploy.onrender.com/auth/applied-oppurtunities")
             setAppliedOppurtunities(response.data)
        } catch (error) {
            
        }
    }
  return (
    <div>
        {Object.values(oppurtunitiesData.internships_meta).map(oppurtunity=>(
            <OppurtunityCard oppurtunity={oppurtunity}key={oppurtunity.id} 
            appliedOppurtunites={appliedOppurtunites}/>
        ))}
    </div>
  )
}

const OppurtunityCard =({oppurtunity,appliedOppurtunites})=>{
    
    const navigate= useNavigate()
    const {
        id,
        profile_name,
        company_name,
        stipend,
        start_date,
        locations,
        duration
    } = oppurtunity
    const isApplied =Array.isArray(appliedOppurtunites) && appliedOppurtunites.some((item) => item.id === id)
    console.log(isApplied)
    const applyOppurtunity=(oppurtunity)=>{
         try {
            axios.post("https://novdeploy.onrender.com/auth/apply",{oppurtunity}).then(res=>{
                console.log(res.data.message)
            }).catch(()=>{
                navigate("/login")
            })
            navigate("/dashboard")
         } catch (error) {
            
         }
    }
    return (
        <div>
             <h1>{profile_name}</h1>
             <p><strong>Company: </strong> {company_name}</p>
             <p><strong>Stipend: </strong> {stipend.salary}</p>
             <p><strong>Location: </strong> {locations.map(x=>x.string).join(', ')}</p>
             <p><strong>Duration: </strong> {duration}</p>
             <p><strong>Start Date:  </strong> {start_date}</p>
             {isApplied ? (
                <button disabled>Applied</button>
             ):(
                <button onClick={()=>applyOppurtunity(oppurtunity)}>Apply Now</button>
             )}
        </div>
    )
}