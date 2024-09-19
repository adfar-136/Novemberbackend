import React from 'react'

export default function Task({task,fetchTask}) {
 async function handleComplete(){
    const res = await fetch(`http://localhost:4000/tasks/${task._id}`,{
      method: "PUT",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({completed: !task.completed})
    })
    const data = await res.json()
    console.log(data)
    fetchTask()
  }
  async function handleDelete(){
    const res = await fetch(`http://localhost:4000/tasks/${task._id}`, {
        method:'DELETE'
    })
    const data = await res.json()
    console.log(data)
    fetchTask()
  }
  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>Due Date:{new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Priority : {task.priority}</p>
        <button onClick={handleComplete}>
          {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
