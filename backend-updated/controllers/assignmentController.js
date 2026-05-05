const assignmentModel = require('../models/assignmentModel');

// Create Assignment
exports.createAssignment = async (req, res) => {
  try {
    const result = await assignmentModel.createAssignment(req.body);

    res.status(201).json({
      success: true,
      message: 'Assignment created successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Assignments
exports.getAllAssignments = async (req, res) => {
  try {
    const data = await assignmentModel.getAllAssignments();

    res.json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Assignment By ID
exports.getAssignmentById = async (req, res) => {
  try {
    const data = await assignmentModel.getAssignmentById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Assignment not found'
      });
    }

    res.json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update Assignment
exports.updateAssignment = async (req, res) => {
  try {
    const result = await assignmentModel.updateAssignment(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: 'Assignment updated successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete Assignment
exports.deleteAssignment = async (req, res) => {
  try {
    await assignmentModel.deleteAssignment(req.params.id);

    res.json({
      success: true,
      message: 'Assignment deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};