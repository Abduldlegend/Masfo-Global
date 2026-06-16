const express = require('express');
const router = express.Router();
const { submitApplication, getUserApplications } = require('../controllers/application.controller');
const { protect } = require('../middleware/auth');
const { upload } = require('../middleware/upload');
const { validate, applicationValidation } = require('../middleware/validation');

router.post('/:jobId/submit', protect, upload.single('resume'), validate(applicationValidation), submitApplication);
router.get('/my-applications', protect, getUserApplications);

module.exports = router;