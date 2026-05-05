const db = require('../config/db');

// ================= CREATE =================
const createOrder = async (data) => {
  const [result] = await db.query(
    `INSERT INTO customer_order_confirmation SET ?`,
    data
  );
  return result;
};

// ================= GET ALL =================
const getAllOrders = async () => {
  const [rows] = await db.execute(
    `SELECT 
        o.*,
        c.name AS customer_name,
        c.mobile_no
     FROM customer_order_confirmation o
     LEFT JOIN customer_details c 
     ON o.customer_id = c.customer_id
     ORDER BY o.order_id DESC`
  );
  return rows;
};

// ================= GET BY ID =================
const getOrderById = async (order_id) => {
  const [rows] = await db.execute(
    `SELECT 
        o.*,
        c.name AS customer_name,
        c.mobile_no
     FROM customer_order_confirmation o
     LEFT JOIN customer_details c 
     ON o.customer_id = c.customer_id
     WHERE o.order_id = ?`,
    [order_id]
  );
  return rows[0];
};

// ================= GET BY CUSTOMER ID =================
const getOrderByCustomerId = async (customer_id) => {
  const [rows] = await db.execute(
    `SELECT * FROM customer_order_confirmation WHERE customer_id = ? LIMIT 1`,
    [customer_id]
  );
  return rows[0];
};

// ================= UPDATE =================
const updateOrder = async (order_id, data) => {
  const [result] = await db.query(
    `UPDATE customer_order_confirmation SET ? WHERE order_id = ?`,
    [data, order_id]
  );
  return result;
};

// ================= DELETE =================
const deleteOrder = async (order_id) => {
  const [result] = await db.execute(
    `DELETE FROM customer_order_confirmation WHERE order_id = ?`,
    [order_id]
  );
  return result;
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrderByCustomerId,
  updateOrder,
  deleteOrder
};