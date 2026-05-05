const db = require('../config/db');

// Get all tasks for a specific customer
exports.getTasksByCustomer = async (customer_id) => {
    const [rows] = await db.execute(
        `SELECT * FROM customer_progress_tasks WHERE customer_id = ? ORDER BY task_id ASC`, 
        [customer_id]
    );
    return rows;
};

// Create a new task
exports.createTask = async (data) => {
    const { customer_id, title, type, placeholder, status, value, is_custom } = data;
    
    const [result] = await db.execute(
        `INSERT INTO customer_progress_tasks 
        (customer_id, title, type, placeholder, status, value, is_custom) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
            customer_id, 
            title, 
            type || 'text', 
            placeholder || null, 
            status || 'Pending', 
            value || null, 
            is_custom === undefined ? 1 : is_custom
        ]
    );
    return result.insertId;
};

// Update an existing task dynamically based on provided fields
exports.updateTask = async (task_id, data) => {
    const fields = [];
    const values = [];

    // Dynamically build the update query based on keys present in data
    const allowedFields = ['title', 'type', 'placeholder', 'status', 'value', 'is_custom'];
    
    allowedFields.forEach(field => {
        if (data[field] !== undefined) {
            fields.push(`${field} = ?`);
            values.push(data[field]);
        }
    });

    if (fields.length === 0) return 0; // Nothing to update

    values.push(task_id);

    const [result] = await db.execute(
        `UPDATE customer_progress_tasks SET ${fields.join(', ')} WHERE task_id = ?`,
        values
    );
    
    return result.affectedRows;
};

// Delete a task
exports.deleteTask = async (task_id) => {
    const [result] = await db.execute(
        `DELETE FROM customer_progress_tasks WHERE task_id = ?`,
        [task_id]
    );
    return result.affectedRows;
};