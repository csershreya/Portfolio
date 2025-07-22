const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projectRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes

app.use('/api/projects', projectRoutes);

app.use('/api/messages', messageRoutes);

// Serve static files from frontend
const path = require('path');
app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
