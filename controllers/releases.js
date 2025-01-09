const express = require("express");
const router = express.Router();
const Release = require("../models/Release");

//GET ROUTES//

// Index List All Releases
router.get("/", async (req, res) => {
  const releases = await Release.find();
  res.render("releases/index", { releases });
});

// Show release deets
router.get("/:id", async (req, res) => {
  const release = await Release.findById(req.params.id);
  res.render("releases/show", { release });
});

// Edit forms
router.get("/:id/edit", async (req, res) => {
  const release = await Release.findById(req.params.id);
  res.render("releases/edit", { release });
});

// Delete ( Delete Confirmation)
router.get("/:id/delete", async (req, res) => {
  const release = await Release.findById(req.params.id);
  res.render("releases/delete", { release });
});

//POST ROUTES //

// Create a new release
router.post("/", async (req, res) => {
  await new Release({
    title: req.body.title,
    numStreams: req.body.numStreams,
    targetAge: req.body.targetAge,
    releaseDate: req.body.releaseDate,
  }).save();
  res.redirect("/releases");
});

/* ------------------ PUT ROUTES ------------------ */

// Update existing release
router.put("/:id", async (req, res) => {
  await Release.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    numStreams: req.body.numStreams,
    targetAge: req.body.targetAge,
    releaseDate: req.body.releaseDate,
  });
  res.redirect("/releases");
});

/* - DELETE ROUTES ------------------ */

// Delete a Release
router.delete("/:id", async (req, res) => {
  await Release.findByIdAndDelete(req.params.id);
  res.redirect("/releases");
});

module.exports = router;



