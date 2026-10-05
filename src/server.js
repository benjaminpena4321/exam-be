// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./routes/messageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/messages", messageRoutes);

app.get("/api/test", (req, res) => {
  res.json({
    message: "MEVN backend is working with NeDB!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
