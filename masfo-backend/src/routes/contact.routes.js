const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contact.controller');
const { validate, contactValidation } = require('../middleware/validation');

router.post('/submit', validate(contactValidation), submitContact);

module.exports = router;