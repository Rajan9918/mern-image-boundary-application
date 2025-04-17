const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { uploadImage } = require('../controllers/imageController');

router.post('/upload', auth, uploadImage);

module.exports = router;
