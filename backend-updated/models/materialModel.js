const db = require('../config/db');

// Get all items for a specific customer
exports.getItemsByCustomer = async (customer_id) => {
    const [rows] = await db.execute(
        `SELECT * FROM customer_materials_list WHERE customer_id = ? ORDER BY material_id ASC`, 
        [customer_id]
    );
    return rows;
};

// Create a new item
exports.createItem = async (data) => {
    const { customer_id, item_name, item_type, item_size, quantity, rate } = data;
    
    const [result] = await db.execute(
        `INSERT INTO customer_materials_list 
        (customer_id, item_name, item_type, item_size, quantity, rate) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
            customer_id, 
            item_name || '', 
            item_type || null, 
            item_size || null, 
            quantity || 0, 
            rate || 0
        ]
    );
    return result.insertId;
};

// Update an existing item dynamically based on provided fields
exports.updateItem = async (material_id, data) => {
    const fields = [];
    const values = [];

    // Dynamically build the update query
    const allowedFields = ['item_name', 'item_type', 'item_size', 'quantity', 'rate'];
    
    allowedFields.forEach(field => {
        if (data[field] !== undefined) {
            fields.push(`${field} = ?`);
            values.push(data[field]);
        }
    });

    if (fields.length === 0) return 0; // Nothing to update

    values.push(material_id);

    const [result] = await db.execute(
        `UPDATE customer_materials_list SET ${fields.join(', ')} WHERE material_id = ?`,
        values
    );
    
    return result.affectedRows;
};

// Delete an item
exports.deleteItem = async (material_id) => {
    const [result] = await db.execute(
        `DELETE FROM customer_materials_list WHERE material_id = ?`,
        [material_id]
    );
    return result.affectedRows;
};