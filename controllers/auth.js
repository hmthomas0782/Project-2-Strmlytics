const express = require("express");
const router = express.Router();

// Render Sign-Up Page
router.get("/sign-up", (req, res) => {
  res.render("auth/sign-up");
});

// Render Sign-In Page
router.get("/sign-in", (req, res) => {
  res.render("auth/sign-in");
});

// Handle Forgot Password
router.get("/forgot-password", (req, res) => {
  res.render("auth/forget-password");
});

module.exports = router;
