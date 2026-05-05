// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');
const upload = require('../middleware/upload');

// Multiple file fields
const uploadFields = upload.fields([
  { name: 'electricity_bill_photo', maxCount: 1 },
  { name: 'aadhar_card_photo', maxCount: 1 },
  { name: 'pan_card_photo', maxCount: 1 },
  { name: 'bank_proof_photo', maxCount: 1 },
  { name: 'property_photo', maxCount: 1 },
  { name: 'geo_photo', maxCount: 1 },
  { name: 'application_receipt_photo', maxCount: 1 },
  { name: 'annexure_ii_photo', maxCount: 1 },
  { name: 'meter_testing_photo', maxCount: 1 },
  { name: 'pv_module_photo', maxCount: 1 },
  { name: 'inverter_photo', maxCount: 1 },
  { name: 'warranty_photo', maxCount: 1 },
  { name: 'gst_invoice_photo', maxCount: 1 },
  { name: 'commissioning_report_photo', maxCount: 1 },
  { name: 'applicant_signature', maxCount: 1 },
  { name: 'vendor_signature', maxCount: 1 }
]);

router.post('/', uploadFields, controller.createCustomer);
router.put('/:id', uploadFields, controller.updateCustomer);

router.get('/', controller.getAllCustomers);
router.get('/:id', controller.getCustomerById);
router.delete('/:id', controller.deleteCustomer);

module.exports = router;