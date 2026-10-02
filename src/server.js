const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./routes/messageRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Routes
app.use("/api/messages", messageRoutes);

app.get("/api/test", (req, res) => {
  res.json({
    message: "MEVN backend is working!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});