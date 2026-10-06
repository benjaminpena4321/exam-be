import dotenv from 'dotenv'
import database from '../src/config/database.js'
import app from './app.js'
dotenv.config({
  path: './.env'
})


const testConnection = async () => {
  try {
    await database()
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running Port : ${process.env.PORT}`)
    });

  } catch (errr) {
    console.log("Connection Server lost : ", errr)
  }
}

testConnection();

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });

// Routes
// app.use("/api/messages", messageRoutes);

// app.get("/api/test", (req, res) => {
//   res.json({
//     message: "MEVN backend is working!"
//   });
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });