const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  selectedService: { type: String, required: true },
  otherService: { type: String },
  startingFromScratch: { type: String },
  typeOfWebsite: { type: String },
  hasFigmaDesign: { type: String },
  backendExists: { type: String },
  frontendExists: { type: String },
  noOfScreens: { type: String },
  logoName: { type: String },
  logoTagline: { type: String },
  logoStyle: { type: String },
  bugDescription: { type: String },
  bugTech: { type: String },
  contentType: { type: String },
  contentTone: { type: String },
  wordCount: { type: String },
  stage: { type: String },
  message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
