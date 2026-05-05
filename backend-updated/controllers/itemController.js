const itemModel = require('../models/itemModel');

// Create Item
exports.createItem = async (req, res) => {
  try {
    const result = await itemModel.createItem(req.body);
    res.status(201).json({
      success: true,
      message: 'Item created successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Items
exports.getAllItems = async (req, res) => {
  try {
    const items = await itemModel.getAllItems();
    res.json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Single Item
exports.getItemById = async (req, res) => {
  try {
    const item = await itemModel.getItemById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update Item
exports.updateItem = async (req, res) => {
  try {
    const result = await itemModel.updateItem(req.params.id, req.body);

    res.json({
      success: true,
      message: 'Item updated successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete Item
exports.deleteItem = async (req, res) => {
  try {
    await itemModel.deleteItem(req.params.id);

    res.json({
      success: true,
      message: 'Item deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};