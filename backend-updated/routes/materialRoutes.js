const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

// Standard RESTful routes for customer_materials
router.get('/:customer_id', materialController.getItems);
router.post('/', materialController.addItem);
router.put('/:material_id', materialController.updateItem);
router.delete('/:material_id', materialController.deleteItem);

module.exports = router;