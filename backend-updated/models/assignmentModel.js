const db = require('../config/db');

// Create Assignment
const createAssignment = async (data) => {
  const { worker_id, customer_id, due_date, task, note } = data;

  const [result] = await db.execute(
    `INSERT INTO worker_assign_customer 
    (worker_id, customer_id, due_date, task, note) 
    VALUES (?, ?, ?, ?, ?)`,
    [worker_id, customer_id, due_date, task, note]
  );

  return result;
};

// Get All Assignments (with JOIN)
const getAllAssignments = async () => {
  const [rows] = await db.execute(
    `SELECT 
        wac.*,
        w.name AS worker_name,
        cd.name AS customer_name
     FROM worker_assign_customer wac
     JOIN mst_worker w ON w.worker_id = wac.worker_id
     JOIN customer_details cd ON cd.customer_id = wac.customer_id
     ORDER BY wac.id DESC`
  );
  return rows;
};

// Get Assignment By ID
const getAssignmentById = async (id) => {
  const [rows] = await db.execute(
    `SELECT 
        wac.*,
        w.name AS worker_name,
        cd.name AS customer_name
     FROM worker_assign_customer wac
     JOIN mst_worker w ON w.worker_id = wac.worker_id
     JOIN customer_details cd ON cd.customer_id = wac.customer_id
     WHERE wac.id = ?`,
    [id]
  );
  return rows[0];
};

// Update Assignment
const updateAssignment = async (id, data) => {
  const { worker_id, customer_id, due_date, task, note } = data;

  const [result] = await db.execute(
    `UPDATE worker_assign_customer SET
        worker_id = ?,
        customer_id = ?,
        due_date = ?,
        task = ?,
        note = ?
     WHERE id = ?`,
    [worker_id, customer_id, due_date, task, note, id]
  );

  return result;
};

// Delete Assignment
const deleteAssignment = async (id) => {
  const [result] = await db.execute(
    `DELETE FROM worker_assign_customer WHERE id = ?`,
    [id]
  );
  return result;
};

module.exports = {
  createAssignment,
  getAllAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment
};