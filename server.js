const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const authRoutes = require("./controllers/auth");
const releaseRoutes = require("./controllers/releases");

const app = express();

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Releases')
  .then(() => console.log("Connected to MongoDB: Releases"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Session Setup
app.use(session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 24 hours
}));

// Routes
app.use("/auth", authRoutes);
app.use("/releases", releaseRoutes);

// Home route - Render the landing page
app.get("/", (req, res) => {
  res.render("landing");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);  // Log errors for debugging
  res.status(500).send("Something went wrong. Please try again later.");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
