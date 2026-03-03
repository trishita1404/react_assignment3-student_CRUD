require("dotenv").config();
const express = require("express");
const cors = require("cors");

const dbConnect = require("./app/config/dbConnect");
const studentRoutes = require("./app/router/studentRoutes");

const app = express();

// Connect Database
dbConnect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/students", studentRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Student API is running");
});

// Start server
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});