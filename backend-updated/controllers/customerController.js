const customerModel = require('../models/customerModel');

// helper to safely get uploaded file path
const getFilePath = (files, field) => {
  return files && files[field] ? files[field][0].path : null;
};

// ================= CREATE =================
exports.createCustomer = async (req, res) => {
  try {
    const files = req.files || {};

    const data = {
      ...req.body,

      electricity_bill_photo: getFilePath(files, 'electricity_bill_photo'),
      aadhar_card_photo: getFilePath(files, 'aadhar_card_photo'),
      pan_card_photo: getFilePath(files, 'pan_card_photo'),
      bank_proof_photo: getFilePath(files, 'bank_proof_photo'),
      property_photo: getFilePath(files, 'property_photo'),
      geo_photo: getFilePath(files, 'geo_photo')
    };

    const result = await customerModel.createCustomer(data);

    if (result && result.insertId) {
      await customerModel.createCustomerProfile({
        customer_id: result.insertId,
        name: data.name || null,
        mobile_no: data.mobileNo || data.mobile_no || null,
        city: data.city || data.city_location || null,
        is_active: 1
      });
    }

    res.status(201).json({
      success: true,
      message: 'Customer created successfully',
      data: result
    });

  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({
        success: false,
        message: 'A customer with this mobile number already exists.'
      });
    }
    console.error('Error creating customer:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// ================= GET ALL =================
exports.getAllCustomers = async (req, res) => {
  try {
    const data = await customerModel.getAllCustomers();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= GET BY ID =================
exports.getCustomerById = async (req, res) => {
  try {
    const data = await customerModel.getCustomerById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
    }

    res.json({ success: true, data });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= UPDATE =================
exports.updateCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files || {};

    // 🔹 Get existing record (important for preserving old files)
    const existing = await customerModel.getCustomerById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
    }

    const data = {
      ...req.body
    };

    // Dynamically add all uploaded file paths to data
    if (files) {
      Object.keys(files).forEach(field => {
        data[field] = getFilePath(files, field);
      });
    }

    const result = await customerModel.updateCustomer(id, data);

    // Also update customer_profile
    const profileData = {};
    if (data.name !== undefined) profileData.name = data.name;
    if (data.mobile_no !== undefined || data.mobileNo !== undefined) profileData.mobile_no = data.mobile_no || data.mobileNo;
    if (data.city_location !== undefined || data.city !== undefined) profileData.city = data.city_location || data.city;
    
    if (Object.keys(profileData).length > 0) {
      await customerModel.updateCustomerProfile(id, profileData);
    }

    res.json({
      success: true,
      message: 'Customer updated successfully',
      data: result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// ================= DELETE =================
exports.deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    // optional: fetch existing to delete files later
    const existing = await customerModel.getCustomerById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found'
      });
    }

    // Delete from profile first to prevent foreign key constraint issues
    await customerModel.deleteCustomerProfile(id);
    await customerModel.deleteCustomer(id);

    // ⚠️ Optional: delete files from disk (recommended)
    // fs.unlinkSync(existing.aadhar_card_photo) ...

    res.json({
      success: true,
      message: 'Customer deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};