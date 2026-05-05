const db = require('../config/db');

const createReport = async (data) => {
  const [result] = await db.query(
    `INSERT INTO work_completion_reports SET ?`,
    data
  );
  return result;
};

const getReportByCustomerId = async (customer_id) => {
  const [rows] = await db.execute(
    `SELECT * FROM work_completion_reports WHERE customer_id = ? LIMIT 1`,
    [customer_id]
  );
  return rows[0];
};

module.exports = {
  createReport,
  getReportByCustomerId
};
