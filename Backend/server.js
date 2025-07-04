// server.js
import express from "express";
import cors from "cors";
import authRouter from './src/routes/auth.js'
import connectToDatabase from "./src/databases/db.js"

connectToDatabase();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);

const name = "sujal"
// Routes
app.get("/", (req, res) => {
  res.send("Hello world, my name is Sujal Shrestha");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
