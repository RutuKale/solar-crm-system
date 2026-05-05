const express = require('express');
const router = express.Router();
const workCompletionController = require('../controllers/workCompletionController');

router.post('/create', workCompletionController.createReport);

module.exports = router;
