const db = require('../config/db');

// Create quotation
exports.createQuotation = async (data) => {
    const [result] = await db.execute(
        `INSERT INTO quotations 
        (quotation_no, customer_id, phase, roof_type, subsidy_required,
        connected_load, daily_consumption, recommended_system,
        subtotal, gst, total, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            data.quotation_no,
            data.customer_id,
            data.phase,
            data.roof_type,
            data.subsidy_required,
            data.connected_load,
            data.daily_consumption,
            data.recommended_system,
            data.subtotal,
            data.gst,
            data.total,
            data.notes
        ]
    );

    return result.insertId;
};

// Insert loads
exports.insertLoads = async (quotation_id, loads) => {
    for (let item of loads) {
        await db.execute(
            `INSERT INTO quotation_loads 
            (quotation_id, appliance_name, watts, quantity, hours_per_day, daily_wh)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                quotation_id,
                item.name,
                item.watts,
                item.qty,
                item.hours,
                item.daily
            ]
        );
    }
};

// Insert materials/items
exports.insertItems = async (quotation_id, items) => {
    for (let item of items) {
        await db.execute(
            `INSERT INTO quotation_items 
            (quotation_id, description, quantity, unit, rate, amount)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                quotation_id,
                item.description,
                item.qty,
                item.unit,
                item.rate,
                item.amount
            ]
        );
    }
};

// Get Next Quotation No
exports.getNextQuotationNo = async () => {
    const [rows] = await db.query('SELECT MAX(quotation_id) as max_id FROM quotations');
    const nextId = (rows[0].max_id || 0) + 1;
    return "QUOT-" + String(nextId).padStart(4, '0');
};