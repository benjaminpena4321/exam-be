const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength:[3],
      maxLength:[100]
    },
    description: {
      type: String,
      maxLength:[500]
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ['pending', 'completed']
      }
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", taskSchema);