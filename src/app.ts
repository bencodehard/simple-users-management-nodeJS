import express from "express";
import cors from "cors";
import helmet from "helmet";
import { prisma } from "./config/prisma";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check route
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// DB connection test route
app.get("/db-check", async (_req, res) => {
  try {
    // Prisma query
    const usersCount = await prisma.user.count();
    res.json({ status: "ok", usersCount });
  } catch (error) {
    console.error("DB check failed:", error);
    res.status(500).json({ status: "error", message: "DB connection failed" });
  }
});

export { app };