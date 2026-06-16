const Contact = require('../models/Contact.model');

// Submit contact message
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    await contact.save();
    
    res.json({
      success: true,
      message: 'Message sent successfully. We will get back to you soon.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = { submitContact };