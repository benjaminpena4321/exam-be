const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title required"],
      minlength: [3, "Title at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
      trim: true
    },
    description: {
      type: String,
      maxlength: [500, "Maximum 500 characters"],
      default: ""
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "completed"],
        message: "Status must be either pending or completed"
      },
      default: "pending"
    }
  }, 
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", taskSchema);