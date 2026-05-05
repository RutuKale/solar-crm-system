const materialModel = require('../models/materialModel');

// Fetch all items for a specific customer
exports.getItems = async (req, res) => {
    try {
        const { customer_id } = req.params;
        const items = await materialModel.getItemsByCustomer(customer_id);
        
        res.json({ success: true, data: items });
    } catch (error) {
        console.error('Error fetching material items:', error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};

// Add a new item for a customer
exports.addItem = async (req, res) => {
    try {
        const material_id = await materialModel.createItem(req.body);
        
        res.status(201).json({
            success: true,
            message: "Material item created successfully",
            material_id
        });
    } catch (error) {
        console.error('Error creating material item:', error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};

// Update a specific item
exports.updateItem = async (req, res) => {
    try {
        const { material_id } = req.params;
        const affectedRows = await materialModel.updateItem(material_id, req.body);
        
        if (affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Item not found or no changes made" });
        }

        res.json({ success: true, message: "Item updated successfully" });
    } catch (error) {
        console.error('Error updating material item:', error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};

// Delete a specific item
exports.deleteItem = async (req, res) => {
    try {
        const { material_id } = req.params;
        const affectedRows = await materialModel.deleteItem(material_id);
        
        if (affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Item not found" });
        }

        res.json({ success: true, message: "Item deleted successfully" });
    } catch (error) {
        console.error('Error deleting material item:', error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};