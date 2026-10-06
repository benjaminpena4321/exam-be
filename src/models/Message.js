const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    title: {
      type: String, 
      trim: true,
      required: true
    }, 
    description: {
      type: String,
    },
    status: {
      type: String,
      trim: true
    }
  },
  {
    createdAt: true
  }
);

export default mongoose.model("Message", messageSchema);
// module.exports = mongoose.model("Message", messageSchema);