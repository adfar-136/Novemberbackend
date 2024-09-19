import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        Axios.post("http://localhost:4000/auth/signup",{
            username:username,
            email:email,
            password:password
        }).then((response)=>{
            if(response.data.status){
                navigate("/login")
            }
        })
    }
  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" placeholder='Username' value={username}
                onChange={(e) => setUsername(e.target.value)}/>

            </div>
            <div>
                <label>Email:</label>
                <input type="email" placeholder='Email' 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                
            </div>
            <div>
                <label>Paswword:</label>
                <input type="password" placeholder='Password' 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                
            </div>
            <button type='submit'>Signup</button>
            <div>
                <p>Already have an account?</p>
                <button onClick={()=>navigate("/login")}>Login</button>
            </div>
        </form>
    </div>
  )
}
