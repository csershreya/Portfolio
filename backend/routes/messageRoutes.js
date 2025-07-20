const express = require("express");
const router = express.Router();
const { submitMessage } = require("../controllers/messageController");
const Message = require("../models/Message");

router.post("/", submitMessage);

// Admin-only route
router.get("/", (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== "Bearer valid-admin-token") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  Message.find().sort({ createdAt: -1 })
    .then(messages => res.json(messages))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
