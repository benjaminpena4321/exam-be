const Task = require("../models/task");

// GET /api/tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error."
    });
  }
};

// GET /api/tasks/:id
const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found."
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({
      message: "Invalid task ID."
    });
  }
};

// POST /api/tasks
const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: "Title is required."
      });
    }

    if (
      status !== undefined &&
      !["pending", "completed"].includes(status)
    ) {
      return res.status(400).json({
        message: "Status must be pending or completed."
      });
    }

    const task = await Task.create({
      title: title.trim(),
      description: description || "",
      status: status || "pending"
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);

    res.status(400).json({
      message: error.message
    });
  }
};

// PUT /api/tasks/:id
const updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (title !== undefined && !title.trim()) {
      return res.status(400).json({
        message: "Title cannot be empty."
      });
    }

    if (
      status !== undefined &&
      !["pending", "completed"].includes(status)
    ) {
      return res.status(400).json({
        message: "Status must be pending or completed."
      });
    }

    const updateData = {};

    if (title !== undefined) {
      updateData.title = title.trim();
    }

    if (description !== undefined) {
      updateData.description = description;
    }

    if (status !== undefined) {
      updateData.status = status;
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found."
      });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);

    res.status(400).json({
      message: "Invalid task ID or task data."
    });
  }
};

// DELETE /api/tasks/:id
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found."
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({
      message: "Invalid task ID."
    });
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
