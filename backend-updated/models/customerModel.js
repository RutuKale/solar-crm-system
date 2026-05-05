const db = require('../config/db');

// ================= CREATE =================
const createCustomer = async (data) => {
  const [result] = await db.query(
    `INSERT INTO customer_details SET ?`,
    data
  );
  return result;
};

// ================= CREATE PROFILE =================
const createCustomerProfile = async (profileData) => {
  const [result] = await db.query(
    `INSERT INTO customer_profile SET ?`,
    profileData
  );
  return result;
};

// ================= GET ALL =================
const getAllCustomers = async () => {
  const [rows] = await db.execute(
    `SELECT * FROM customer_details ORDER BY customer_id DESC`
  );
  return rows;
};

// ================= GET BY ID =================
const getCustomerById = async (customer_id) => {
  const [rows] = await db.execute(
    `SELECT c.*, w.*, c.customer_id as customer_id 
     FROM customer_details c 
     LEFT JOIN work_completion_reports w ON c.customer_id = w.customer_id 
     WHERE c.customer_id = ?`,
    [customer_id]
  );
  return rows[0];
};

// ================= UPDATE =================
const updateCustomer = async (customer_id, data) => {
  // Get columns of customer_details dynamically
  const [c_cols] = await db.query(`SHOW COLUMNS FROM customer_details`);
  const c_keys = c_cols.map(c => c.Field);
  
  // Get columns of work_completion_reports dynamically
  const [w_cols] = await db.query(`SHOW COLUMNS FROM work_completion_reports`);
  const w_keys = w_cols.map(w => w.Field);

  const c_data = {};
  const w_data = {};

  for (const key in data) {
    if (c_keys.includes(key)) c_data[key] = data[key];
    if (w_keys.includes(key) && key !== 'customer_id') w_data[key] = data[key];
  }

  let result;
  // Update customer_details
  if (Object.keys(c_data).length > 0) {
    [result] = await db.query(
      `UPDATE customer_details SET ? WHERE customer_id = ?`,
      [c_data, customer_id]
    );
  }

  // Upsert work_completion_reports
  if (Object.keys(w_data).length > 0) {
    w_data.customer_id = customer_id;
    const updateFields = Object.keys(w_data).filter(k => k !== 'customer_id');
    const updateStr = updateFields.map(k => `${k} = VALUES(${k})`).join(', ');
    
    await db.query(
      `INSERT INTO work_completion_reports SET ? ON DUPLICATE KEY UPDATE ${updateStr}`,
      w_data
    );
  }

  return result;
};

// ================= UPDATE PROFILE =================
const updateCustomerProfile = async (customer_id, data) => {
  const [result] = await db.query(
    `UPDATE customer_profile SET ? WHERE customer_id = ?`,
    [data, customer_id]
  );
  return result;
};

// ================= DELETE =================
const deleteCustomer = async (customer_id) => {
  const [result] = await db.execute(
    `DELETE FROM customer_details WHERE customer_id = ?`,
    [customer_id]
  );
  return result;
};

// ================= DELETE PROFILE =================
const deleteCustomerProfile = async (customer_id) => {
  const [result] = await db.execute(
    `DELETE FROM customer_profile WHERE customer_id = ?`,
    [customer_id]
  );
  return result;
};

module.exports = {
  createCustomer,
  createCustomerProfile,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  updateCustomerProfile,
  deleteCustomer,
  deleteCustomerProfile
};