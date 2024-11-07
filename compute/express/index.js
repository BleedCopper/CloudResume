import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import promClient from "prom-client";
import viewCountRoutes from "./routes/viewCount.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const register = new promClient.Registry();

// Create a simple histogram metric for HTTP request durations
const httpRequestDurationMicroseconds = new promClient.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  buckets: [0.1, 0.2, 0.5, 1, 2, 5], // Buckets for response times
});
register.registerMetric(httpRequestDurationMicroseconds);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://mongo:27017/resume")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });

app.use("/api", viewCountRoutes);

// Define the /metrics endpoint for Prometheus to scrape
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// Sample route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
