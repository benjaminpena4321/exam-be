const mongoose = require("mongoose");
require("dotenv").config();

const Task = require("./models/Task");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Task.deleteMany({});

    await Task.create({
      message: "Hello Human, I'm your information fetched from the database."
    });

    console.log("Database seeded successfully.");

    await mongoose.disconnect();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();