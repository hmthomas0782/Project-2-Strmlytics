const mongoose = require('mongoose');

// Define the release schema
const releaseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Export the Release model
module.exports = mongoose.model('Release', releaseSchema);













