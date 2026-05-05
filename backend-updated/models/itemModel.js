const db = require('../config/db'); // your pool file

// Create Item
const createItem = async (data) => {
  const {
    item_name,
    category,
    unit,
    qty_stock,
    per_unit_rate,
    min_stock_level,
    supplier,
    note
  } = data;

  const [result] = await db.execute(
    `INSERT INTO item_detail 
    (item_name, category, unit, qty_stock, per_unit_rate, min_stock_level, supplier, note) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [item_name, category, unit, qty_stock, per_unit_rate, min_stock_level, supplier, note]
  );

  return result;
};

// Get All Items
const getAllItems = async () => {
  const [rows] = await db.execute(`SELECT * FROM item_detail ORDER BY item_id DESC`);
  return rows;
};

// Get Single Item
const getItemById = async (item_id) => {
  const [rows] = await db.execute(
    `SELECT * FROM item_detail WHERE item_id = ?`,
    [item_id]
  );
  return rows[0];
};

// Update Item
const updateItem = async (item_id, data) => {
  const {
    item_name,
    category,
    unit,
    qty_stock,
    per_unit_rate,
    min_stock_level,
    supplier,
    note
  } = data;

  const [result] = await db.execute(
    `UPDATE item_detail SET 
      item_name = ?, 
      category = ?, 
      unit = ?, 
      qty_stock = ?, 
      per_unit_rate = ?, 
      min_stock_level = ?, 
      supplier = ?, 
      note = ?
    WHERE item_id = ?`,
    [item_name, category, unit, qty_stock, per_unit_rate, min_stock_level, supplier, note, item_id]
  );

  return result;
};

// Delete Item
const deleteItem = async (item_id) => {
  const [result] = await db.execute(
    `DELETE FROM item_detail WHERE item_id = ?`,
    [item_id]
  );
  return result;
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem
};