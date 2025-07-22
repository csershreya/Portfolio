const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  imageUrl: String, // URL to project image
  liveLink: String,
  githubLink: String,
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
