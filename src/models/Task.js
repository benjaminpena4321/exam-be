const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    description: {
      type: String,
      required: false,
      trim: true,
      maxlength: 500
    },

  },
  {
    timestamps: true 
  }
);


module.exports = mongoose.model('Task', TaskSchema);