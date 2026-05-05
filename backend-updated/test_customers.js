const db = require('./config/db');
async function test() {
  const [rows] = await db.query('SELECT customer_id, name, mobile_no, city_location FROM customer_details LIMIT 5');
  console.log(rows);
  process.exit(0);
}
test();
