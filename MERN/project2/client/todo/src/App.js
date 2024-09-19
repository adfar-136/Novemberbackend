import React, { useEffect, useState } from 'react'
import Taskform from './components/Taskform'
import TaskList from './components/TaskList'

export default function App() {
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
    fetchTasks()
  },[])
  const fetchTasks =async()=>{
    const res = await fetch("http://localhost:4000/tasks")
    const data = await res.json()
    setTasks(data)
    console.log(data)
  }
  return (
    <div>
      <Taskform fetchTask={fetchTasks}/>
      <TaskList tasks={tasks} fetchTask={fetchTasks}/>
    </div>
  )
}
