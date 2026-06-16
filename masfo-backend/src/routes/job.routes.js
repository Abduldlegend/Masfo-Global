const express = require('express');
const router = express.Router();
const { 
  getAllJobs, 
  getJobBySlug, 
  saveJob,
  getSavedJobs
} = require('../controllers/job.controller');
const { protect } = require('../middleware/auth');

router.get('/', getAllJobs);
router.get('/saved', protect, getSavedJobs);
router.get('/:slug', getJobBySlug);
router.post('/:id/save', protect, saveJob);

module.exports = router;