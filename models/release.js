const mongoose = require("mongoose");

const releaseSchema = new mongoose.Schema({
  title: String,
  artistId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  numStreams: Number,
  targetAge: String,
  // add later gender: Array,
  // add later location: Array,
  releaseDate: Date,
});

module.exports = mongoose.model("Release", releaseSchema);
