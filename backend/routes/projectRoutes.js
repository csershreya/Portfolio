const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const upload = require("../middleware/upload");
// POST new project
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, techStack, liveLink, githubLink } = req.body;
    const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : "";

    const newProject = new Project({
      title,
      description,
      techStack,
      liveLink,
      githubLink,
      imageUrl
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});
// GET all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Delete a project by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
