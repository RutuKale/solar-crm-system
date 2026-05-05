const workerModel = require('../models/workerModel');

// Create Worker
exports.createWorker = async (req, res) => {
  try {
    const result = await workerModel.createWorker(req.body);

    res.status(201).json({
      success: true,
      message: 'Worker created successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Workers
exports.getAllWorkers = async (req, res) => {
  try {
    const workers = await workerModel.getAllWorkers();

    res.json({
      success: true,
      data: workers
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Worker By ID
exports.getWorkerById = async (req, res) => {
  try {
    const worker = await workerModel.getWorkerById(req.params.id);

    if (!worker) {
      return res.status(404).json({
        success: false,
        message: 'Worker not found'
      });
    }

    res.json({
      success: true,
      data: worker
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update Worker
exports.updateWorker = async (req, res) => {
  try {
    const result = await workerModel.updateWorker(
      req.params.id,
      req.body
    );

    res.json({
      success: true,
      message: 'Worker updated successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete Worker
exports.deleteWorker = async (req, res) => {
  try {
    await workerModel.deleteWorker(req.params.id);

    res.json({
      success: true,
      message: 'Worker deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Optional: Soft Delete
exports.deactivateWorker = async (req, res) => {
  try {
    await workerModel.deactivateWorker(req.params.id);

    res.json({
      success: true,
      message: 'Worker deactivated successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};