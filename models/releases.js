const mongoose = require("mongoose");

const releaseSchema = new mongoose.Schema({
  title: String,
  artistId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  streams: Number,
  demographics: {
    age: Array,
    gender: Array,
    location: Array,
  },
  releaseDate: Date,
});

module.exports = mongoose.model("Release", releaseSchema);
