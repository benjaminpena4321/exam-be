const Task = require("../models/Task");


//Get: get all tasks
//note: line 6 up to 42 are complete copy paste from AI;
const getAllTask = async (req, res, next) => {
  try{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (page < 1 || limit < 1) {
      return res.status(400).json({ message: "Page and limit must be positive integers." });
    }

    const skipIndex = (page - 1) * limit;

    const [data, totalItems] = await Promise.all([
      Task.find()
        .sort({ createdAt: -1 }) // Optional: Sort by newest
        .skip(skipIndex)
        .limit(limit),
      Task.countDocuments()
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return res.status(200).json({
      metadata: {
        totalItems,
        totalPages,
        currentPage: page,
        limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      },
      data
    });

  }catch(err){
    next(err)
  }
}

//Get: get task by id
const getTaskById = async (req, res, next) => {
  try{
    const taskId = await Task.find(req.params.id);
    if(!taskid){
      return res.status(404).json({
        message: "Not Found"
      })
    }
    return res.status(200).json({
      message: "Data Retrieved",
      taskId
    })
  }catch(err){
    next(err)
  }
}

//Post: Create task
const createTask = async (req, res, next) => {
  try{
    const taskDetails = await Task.create(req.body);
    if(!taskDetails){
      return res.status(404).json({
        message: "Not Found"
      })
    }
    return res.status(201).json({
      message: "Data Created",
      taskDetails
    })
  }catch(err){
    next(err)
  }
}

//Put: Update task
const updateTask = async (req, res, next) => {
  try{
    const taskDetails = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runvalidators: true}
      
    );
    if(!taskDetails){
      return res.status(404).json({
        message: "Not Found"
      })
    }
    return res.status(201).json({
      message: "Data Updated",
      taskDetails
    })
  }catch(err){
    next(err)
  }
}

//Delete: Delete task
const deleteTask = async (req, res, next) => {
  try{
    const taskId = await Task.findByIdAndDelete(
        req.params.id,
    );
    if(!taskId){
      return res.status(404).json({
        message: "Not Found"
      })
    }
    return res.status(201).json({
      message: "Data Deleted",
      taskId
    })
  }catch(err){
    next(err)
  }
}

module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};