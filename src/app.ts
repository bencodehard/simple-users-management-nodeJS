import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check route
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

export { app };