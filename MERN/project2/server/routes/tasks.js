const express = require("express")
const router = express.Router()
const Task = require("../models/Task")
router.get("/",async(req,res)=>{
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})
router.post("/",async (req,res)=>{
    const {title,description,dueDate,priority} = req.body;
    const newTask = new Task({title,description,dueDate,priority})
    try {
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
router.put("/:id",async (req,res)=>{
    const  {id} = req.params;
    const {completed} = req.body;
    try {
        const updateTask = await Task.findByIdAndUpdate(
            id,
            {completed},
        )
        if(!updateTask){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json(updateTask)
    } catch (error) {
        res.status(400).send(error.message)
    }

})
router.delete("/:id",async (req,res)=>{
    const {id} = req.params;
    try {
        const deleteTask = await  Task.findByIdAndDelete(id)
        if(!deleteTask){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).json({message:"Task deleted successfully"})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})
module.exports = router