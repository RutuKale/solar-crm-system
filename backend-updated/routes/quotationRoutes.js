const express = require('express');
const router = express.Router();
const quotationController = require('../controllers/quotationController');

router.post('/create', quotationController.createQuotation);

module.exports = router;