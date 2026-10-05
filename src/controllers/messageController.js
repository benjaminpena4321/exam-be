// controllerMessage.js
const db = require("../../db"); // Import the shared NeDB instance

const getMessage = async (req, res) => {
  try {
    // Wrap NeDB's callback-based findOne in a Promise to use async/await
    const message = await new Promise((resolve, reject) => {
      db.findOne({}, (err, doc) => {
        if (err) reject(err);
        resolve(doc);
      });
    });

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
