const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { password } = req.body;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (password === ADMIN_PASSWORD) {
    res.json({ token: "valid-admin-token" });
  } else {
    res.status(401).json({ error: "Invalid password" });
  }
});

module.exports = router;
