const db = require('./config/db');

const addColumns = async () => {
  const columnsToAdd = [
    'vendor_mobile varchar(20)',
    'aadhar_number varchar(50)',
    'agreement_location varchar(255)',
    'billing_unit_name varchar(255)',
    'consumer_tariff_category varchar(100)',
    'installed_ac_capacity_kw decimal(10,2)',
    'protection_after_inverter varchar(255)',
    'mcb_before_load_side varchar(255)',
    'elcb_rccb_rating varchar(100)',
    'net_meter_type_inspection varchar(100)',
    'net_meter_serial_inspection varchar(100)',
    'net_meter_accuracy_class varchar(50)',
    'net_meter_capacity_inspection varchar(50)',
    'net_meter_constant varchar(50)',
    'net_meter_initial_reading varchar(50)',
    'gen_meter_make_inspection varchar(255)',
    'gen_meter_type_inspection varchar(100)',
    'gen_meter_serial_inspection varchar(100)',
    'gen_meter_accuracy_class varchar(50)',
    'gen_meter_capacity_inspection varchar(50)',
    'gen_meter_constant varchar(50)',
    'gen_meter_initial_reading varchar(50)',
    'number_of_strings int(11)',
    'pv_module_serial_numbers text',
    'cell_manufacturer_name varchar(255)',
    'gst_invoice_number varchar(100)',
    'product_warranty varchar(255)',
    'performance_warranty varchar(255)',
    'inverter_rating varchar(100)',
    'inverter_hpd varchar(100)',
    'inverter_yom varchar(50)',
    'number_of_earthings int(11)',
    'lightning_arrester varchar(50)',
    'application_receipt_photo varchar(255)',
    'annexure_ii_photo varchar(255)',
    'meter_testing_photo varchar(255)',
    'pv_module_photo varchar(255)',
    'inverter_photo varchar(255)',
    'warranty_photo varchar(255)',
    'gst_invoice_photo varchar(255)',
    'commissioning_report_photo varchar(255)',
    'applicant_signature varchar(255)',
    'vendor_signature varchar(255)',
    'signature_date varchar(50)',
    'signature_place varchar(100)'
  ];

  try {
    for (const col of columnsToAdd) {
      const colName = col.split(' ')[0];
      try {
        await db.query(`ALTER TABLE work_completion_reports ADD COLUMN ${col} DEFAULT NULL;`);
        console.log(`Added column: ${colName}`);
      } catch (err) {
        if (err.code === 'ER_DUP_FIELDNAME') {
          console.log(`Column ${colName} already exists.`);
        } else {
          console.error(`Error adding ${colName}:`, err.message);
        }
      }
    }
    console.log('Migration complete.');
  } catch (err) {
    console.error('Fatal Error:', err);
  } finally {
    process.exit();
  }
};

addColumns();
