const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workerController');

// CRUD Routes
router.post('/create', workerController.createWorker);
router.get('/', workerController.getAllWorkers);
router.get('/:id', workerController.getWorkerById);
router.put('/update/:id', workerController.updateWorker);
router.delete('/delete/:id', workerController.deleteWorker);

// Optional
router.patch('/deactivate/:id', workerController.deactivateWorker);

module.exports = router;