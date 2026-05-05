const db = require('../config/db');

// Create Worker
const createWorker = async (data) => {
  const { name, role, mobile_no, email, note } = data;

  const [result] = await db.execute(
    `INSERT INTO mst_worker 
     (name, role, mobile_no, email, note) 
     VALUES (?, ?, ?, ?, ?)`,
    [name, role, mobile_no, email, note]
  );

  return result;
};

// Get All Workers
const getAllWorkers = async () => {
  const [rows] = await db.execute(
    `SELECT * FROM mst_worker ORDER BY worker_id DESC`
  );
  return rows;
};

// Get Worker By ID
const getWorkerById = async (worker_id) => {
  const [rows] = await db.execute(
    `SELECT * FROM mst_worker WHERE worker_id = ?`,
    [worker_id]
  );
  return rows[0];
};

// Update Worker
const updateWorker = async (worker_id, data) => {
  const { name, role, mobile_no, email, note } = data;

  const [result] = await db.execute(
    `UPDATE mst_worker SET 
        name = ?, 
        role = ?, 
        mobile_no = ?, 
        email = ?, 
        note = ?
     WHERE worker_id = ?`,
    [name, role, mobile_no, email, note, worker_id]
  );

  return result;
};

// Delete Worker (Hard Delete)
const deleteWorker = async (worker_id) => {
  const [result] = await db.execute(
    `DELETE FROM mst_worker WHERE worker_id = ?`,
    [worker_id]
  );
  return result;
};

// Optional: Soft Delete
const deactivateWorker = async (worker_id) => {
  const [result] = await db.execute(
    `UPDATE mst_worker SET is_active = 0 WHERE worker_id = ?`,
    [worker_id]
  );
  return result;
};

module.exports = {
  createWorker,
  getAllWorkers,
  getWorkerById,
  updateWorker,
  deleteWorker,
  deactivateWorker
};