const quotationModel = require('../models/quotationModel');

exports.createQuotation = async (req, res) => {
    try {
        const {
            customer_id,
            phase,
            roof_type,
            subsidy_required,
            connected_load,
            daily_consumption,
            recommended_system,
            subtotal,
            gst,
            total,
            notes,
            loads,
            items
        } = req.body;

        // Generate quotation number automatically incremented from DB
        const quotation_no = await quotationModel.getNextQuotationNo();

        // 1. Insert main quotation
        const quotation_id = await quotationModel.createQuotation({
            quotation_no,
            customer_id,
            phase,
            roof_type,
            subsidy_required,
            connected_load,
            daily_consumption,
            recommended_system,
            subtotal,
            gst,
            total,
            notes
        });

        // 2. Insert loads
        await quotationModel.insertLoads(quotation_id, loads);

        // 3. Insert items
        await quotationModel.insertItems(quotation_id, items);

        res.status(201).json({
            message: "Quotation created successfully",
            quotation_id,
            quotation_no
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};