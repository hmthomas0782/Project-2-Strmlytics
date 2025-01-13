const express = require("express");
const router = express.Router();
const ensureSignedIn = require("../middleware/ensure-signed-in");
const Release = require("../models/release");

// GET /releases (display all releases)
router.get("/", async (req, res) => {
  try {
    const releases = await Release.find().sort({ createdAt: -1 });
    res.render("releases/home", { releases });
  } catch (error) {
    console.error("Error fetching releases:", error);
    res.status(500).send("Error fetching releases");
  }
});

// GET /releases/new (render page to create a new release)
router.get("/new", ensureSignedIn, (req, res) => {
  res.render("releases/new");
});

// POST /releases (create new release)
router.post("/", ensureSignedIn, async (req, res) => {
  try {
    const { title, description, releaseDate } = req.body;
    const newRelease = new Release({
      title,
      description,
      releaseDate,
    });

    await newRelease.save();
    res.redirect("/releases");
  } catch (error) {
    console.error("Error creating release:", error);
    res.status(500).send("Error creating release");
  }
});

// DELETE /releases/:id (delete a release)
router.post("/delete/:id", ensureSignedIn, async (req, res) => {
  try {
    await Release.findByIdAndDelete(req.params.id);
    res.redirect("/releases");
  } catch (error) {
    console.error("Error deleting release:", error);
    res.status(500).send("Error deleting release");
  }
});

module.exports = router;
