const Message = require('../models/Message');

exports.submitMessage = async (req, res) => {
  try {
    const {
      name,
      email,
      selectedService,
      otherService,
      startingFromScratch,
      typeOfWebsite,
      hasFigmaDesign,
      backendExists,
      frontendExists,
      noOfScreens,
      logoName,
      logoTagline,
      logoStyle,
      bugDescription,
      bugTech,
      contentType,
      contentTone,
      wordCount,
      stage,
      message,
    } = req.body;

    const newMessage = new Message({
      name,
      email,
      selectedService,
      otherService,
      startingFromScratch,
      typeOfWebsite,
      hasFigmaDesign,
      backendExists,
      frontendExists,
      noOfScreens,
      logoName,
      logoTagline,
      logoStyle,
      bugDescription,
      bugTech,
      contentType,
      contentTone,
      wordCount,
      stage,
      message,
    });

    await newMessage.save();
    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};