const express = require("express");
const connectDB = require("./src/database/connection");
const studentRoutes = require("./src/routes/studentRoutes");
const cors = require("cors");
require("dotenv").config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect to db

connectDB();

// routes
app.use("/api", studentRoutes);
// server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
