const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');
const upload = require('../middleware/upload');

// only signature file
const uploadFields = upload.fields([
  { name: 'customer_signature', maxCount: 1 }
]);

router.post('/', uploadFields, controller.createOrder);
router.put('/:id', uploadFields, controller.updateOrder);

router.get('/', controller.getAllOrders);
router.get('/:id', controller.getOrderById);
router.get('/customer/:customer_id', controller.getOrderByCustomerId);
router.delete('/:id', controller.deleteOrder);

module.exports = router;