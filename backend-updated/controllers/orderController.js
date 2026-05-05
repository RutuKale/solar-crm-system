const orderModel = require('../models/orderModel');

// helper
const getFilePath = (files, field) => {
  return files && files[field] ? files[field][0].path : null;
};

// ================= CREATE =================
exports.createOrder = async (req, res) => {
  try {
    const files = req.files || {};

    const data = {
      ...req.body,
      customer_signature: getFilePath(files, 'customer_signature')
    };

    // auto-calc balance
    if (data.total_amount && data.advance_amount) {
      data.balance_amount =
        Number(data.total_amount) - Number(data.advance_amount);
    }

    const result = await orderModel.createOrder(data);

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: result
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= GET ALL =================
exports.getAllOrders = async (req, res) => {
  try {
    const data = await orderModel.getAllOrders();
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= GET BY ID =================
exports.getOrderById = async (req, res) => {
  try {
    const data = await orderModel.getOrderById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.json({ success: true, data });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= GET BY CUSTOMER ID =================
exports.getOrderByCustomerId = async (req, res) => {
  try {
    const data = await orderModel.getOrderByCustomerId(req.params.customer_id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Order not found for this customer'
      });
    }

    res.json({ success: true, data });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= UPDATE =================
exports.updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const files = req.files || {};

    const existing = await orderModel.getOrderById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    const data = {
      ...req.body,

      customer_signature:
        getFilePath(files, 'customer_signature') ||
        existing.customer_signature
    };

    // recalc balance
    if (data.total_amount && data.advance_amount) {
      data.balance_amount =
        Number(data.total_amount) - Number(data.advance_amount);
    }

    const result = await orderModel.updateOrder(id, data);

    res.json({
      success: true,
      message: 'Order updated successfully',
      data: result
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ================= DELETE =================
exports.deleteOrder = async (req, res) => {
  try {
    await orderModel.deleteOrder(req.params.id);

    res.json({
      success: true,
      message: 'Order deleted successfully'
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};