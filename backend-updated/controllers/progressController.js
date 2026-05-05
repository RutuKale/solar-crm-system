const progressModel = require('../models/progressModel');

// Fetch all tasks for a specific customer
exports.getTasks = async (req, res) => {
    try {
        const { customer_id } = req.params;
        const tasks = await progressModel.getTasksByCustomer(customer_id);
        
        res.json({ success: true, data: tasks });
    } catch (error) {
        console.error('Error fetching progress tasks:', error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};

// Add a new task for a customer
exports.addTask = async (req, res) => {
    try {
        // req.body should contain customer_id, title, type, etc.
        const task_id = await progressModel.createTask(req.body);
        
        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task_id
        });
    } catch (error) {
        console.error('Error creating progress task:', error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};

// Update a specific task
exports.updateTask = async (req, res) => {
    try {
        const { task_id } = req.params;
        const affectedRows = await progressModel.updateTask(task_id, req.body);
        
        if (affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Task not found or no changes made" });
        }

        res.json({ success: true, message: "Task updated successfully" });
    } catch (error) {
        console.error('Error updating progress task:', error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};

// Delete a specific task
exports.deleteTask = async (req, res) => {
    try {
        const { task_id } = req.params;
        const affectedRows = await progressModel.deleteTask(task_id);
        
        if (affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.json({ success: true, message: "Task deleted successfully" });
    } catch (error) {
        console.error('Error deleting progress task:', error);
        res.status(500).json({ success: false, error: "Server error" });
    }
};