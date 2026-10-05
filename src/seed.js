// seed.js
const db = require("../db"); // Import the shared NeDB instance

const seedDatabase = () => {
  // Wipe everything out of the collection (equivalent to deleteMany({}))
  db.remove({}, { multi: true }, (err, numRemoved) => {
    if (err) {
      console.error("Error clearing database:", err);
      process.exit(1);
    }
    
    console.log(`Cleared ${numRemoved} old records from NeDB.`);

    // Insert the initial seed data (equivalent to create())
    db.insert({
      message: "Hello Human, I'm your information fetched from the NeDB database."
    }, (insertErr, newDoc) => {
      if (insertErr) {
        console.error("Seeding error:", insertErr);
        process.exit(1);
      }

      console.log("Database seeded successfully with NeDB!");
      process.exit(0); // Exit script safely
    });
  });
};

seedDatabase();
