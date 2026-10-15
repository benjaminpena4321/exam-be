const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: true,
        enums:["pending", "completed"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", taskSchema);