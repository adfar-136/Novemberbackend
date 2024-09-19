import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    Axios.defaults.withCredentials = true
    function handleSubmit(e){
        e.preventDefault()
        Axios.post("http://localhost:4000/auth/login",{
          email:email,
          password:password
        }).then((response)=>{
              if(response.data.status){
                  navigate("/dashboard")
              }
        }).catch(()=>{
          console.log("Error")
        })
      }
  return (
    <div>

<h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            
            <div>
                <label htmlFor="">Email : </label>
                <input type="email" placeholder='Enter Email' 
                value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Password : </label>
                <input type="text" placeholder='Enter Password' 
                value={password}  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Login</button>
            <div>
                <p>Already have an account?</p>
                <button onClick={()=>navigate("/signup")}>Signup</button>

            </div>

        </form>
    </div>
  )
}
