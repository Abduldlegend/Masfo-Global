const express = require('express');
const router = express.Router();
const { updateProfile, uploadAvatar } = require('../controllers/user.controller');
const { protect } = require('../middleware/auth');
const { upload } = require('../middleware/upload');

router.put('/profile', protect, updateProfile);
router.post('/avatar', protect, upload.single('avatar'), uploadAvatar);

module.exports = router;