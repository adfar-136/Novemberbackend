import React, { useState } from 'react'

export default function Taskform({fetchTask}) {
    const [title,setTitle]= useState("")
    const [description,setDescription]= useState("")
    const [dueDate, setDueDate] = useState({})
    const [priority,setPriority] = useState("")
    async function handleSubmit(e){
        e.preventDefault()
        const res = await fetch("http://localhost:4000/tasks",{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify({title,description,dueDate,priority}) 
        })
        const data = await res.json()
        console.log(data)
        setDescription("")
        setTitle("")
        setDueDate({})
        setPriority("")
       fetchTask()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" 
                value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input type="text" 
                value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="">Due Date</label>
                <input type="date" 
                value={dueDate} onChange={(e)=>{setDueDate(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="">Priority</label>
                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}
