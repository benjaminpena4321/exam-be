const express = require("express");
const task = require("../models/taskModel");
const router = require("./messageRoutes");

const app = express();

app.use(express.json());

app.get("/api/tasks", async (req, res) => {

   try{
        const tasks = await task.find();
        res.status(200).json(tasks)
   }catch(err){
        res.status(400).json({ message: err.message})
   }
});

app.get("api/tasks/:id", async (req, res) => {
    try{
        const tasks = await task.find(req.params.id);
        if(!tasks) return res.status(404).json({message: "User not found"});

        res.status(200).json({ message: tasks});

    }catch(err){
        res.status(400).json({ message: err.message})
    }
});


app.post("api/tasks", async (req, res) => {
    try{

        const {title, description, status} = req.body;

        if(!title) return res.status(400).json({ message: "Title is empty"})
        if (title.length < 3) return res.status(400).json({ message: "Title must be at least 3 characters long" });
        if (title.length > 100) return res.status(400).json({ message: "Title cannot exceed 1000 characters" });
        if (description.length > 500) return res.status(400).json({ message: "Description cannot exceed 500 characters" });



        const newTask = {
            title,
            description,
            status
        }

        const tasks = await task.create(newTask);
        res.status(201).json({ message: {taskCreated: tasks}});
    }catch(err){
        res.status(400).json({ message: err.message});
    }
})

app.put("api/tasks/:id", async (req, res) => {
    try{
        const tasks = task.find(req.params.id);
        if(!tasks) return res.status(404).json({message: "User not found"});
        
        const isMatch = tasks.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: "after",
            runValidators: true
        });
        
        res.status(200).json({ message: {updateSuccess: tasks}});
    }catch(err){
        res.status(400).json({ message: err.message});
    }
});


module.exports = router;
