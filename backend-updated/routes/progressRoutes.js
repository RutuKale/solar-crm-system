const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');

// Standard RESTful routes for customer_tasks
router.get('/:customer_id', progressController.getTasks);
router.post('/', progressController.addTask);
router.put('/:task_id', progressController.updateTask);
router.delete('/:task_id', progressController.deleteTask);

module.exports = router;