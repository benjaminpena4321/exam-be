const express = require("express");
const router = express.Router();

const {
  getTask,
  createTask,
  editTask,
  deleteTask
} = require("../controllers/taskController");

router.get("/", getTask);
router.post("/", createTask);
router.get("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;