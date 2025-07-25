import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

// CORS middleware - allow requests from your React frontend
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // if you use cookies or authorization headers
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
