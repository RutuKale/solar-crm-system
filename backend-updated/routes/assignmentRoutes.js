const express = require('express');
const router = express.Router();
const controller = require('../controllers/assignmentController');

// CRUD Routes
router.post('/create', controller.createAssignment);
router.get('/', controller.getAllAssignments);
router.get('/:id', controller.getAssignmentById);
router.put('/:id', controller.updateAssignment);
router.delete('/:id', controller.deleteAssignment);

module.exports = router;