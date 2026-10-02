const Message = require("../models/Message");

const getMessage = async (req, res) => {
  try {
    const message = await Message.findOne();

    if (!message) {
      return res.status(404).json({
        message: "No message found."
      });
    }

    res.json(message);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error."
    });
  }
};

module.exports = {
  getMessage
};