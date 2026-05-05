const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// CRUD Routes
router.post('/create', itemController.createItem);
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.put('/update/:id', itemController.updateItem);
router.delete('/delete/:id', itemController.deleteItem);

module.exports = router;