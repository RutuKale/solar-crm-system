const WorkCompletion = require('../models/workCompletionModel');

exports.createReport = async (req, res) => {
  try {
    const { 
      customer_id, 
      basic_details, 
      system_specs, 
      annexure_1, 
      annexure_2, 
      inspection 
    } = req.body;

    const data = {
      customer_id,
      consumer_id_bu: basic_details?.consumerId || null,
      consumer_name: basic_details?.consumerName || null,
      applicant_mobile: basic_details?.applicantMobile || null,
      applicant_email: basic_details?.applicantEmail || null,
      filler_mobile: basic_details?.fillerMobile || null,
      ref_number: basic_details?.refNumber || null,
      receipt_no: basic_details?.receiptNo || null,
      address: basic_details?.address || null,
      category: basic_details?.category || 'Residential',
      agreement_date: basic_details?.agreementDate || null,
      msedcl_office: basic_details?.msedclOffice || null,
      agency_name: basic_details?.agencyName || null,

      inverter_make: system_specs?.inverterMake || null,
      inverter_serial: system_specs?.inverterSerial || null,
      inverter_capacity_kw: system_specs?.inverterCapacity ? parseFloat(system_specs.inverterCapacity) : null,
      inverter_type: system_specs?.inverterType || null,
      inverter_count: system_specs?.inverterCount ? parseInt(system_specs.inverterCount) : 1,
      panel_make: system_specs?.panelMake || null,
      panel_module: system_specs?.panelModule || null,
      panel_capacity_wp: system_specs?.panelCapacity ? parseFloat(system_specs.panelCapacity) : null,
      panel_count: system_specs?.panelCount ? parseInt(system_specs.panelCount) : null,
      total_spv_capacity_kwp: system_specs?.totalSpvCapacity ? parseFloat(system_specs.totalSpvCapacity) : null,
      phase: system_specs?.phase || '1 Ph',
      system_type: system_specs?.systemType || 'Grid Tie',
      net_meter_type: system_specs?.netMeterType || '1 Ph',
      system_capacity_kw: system_specs?.systemCapacity ? parseFloat(system_specs.systemCapacity) : null,

      re_source: annexure_1?.reSource || 'SOLAR',
      capacity_type: annexure_1?.capacityType || 'RoofTop',
      project_model: annexure_1?.projectModel || 'CAPEX',
      rooftop_capacity_kw: annexure_1?.rooftopCapacity ? parseFloat(annexure_1.rooftopCapacity) : null,
      ground_capacity_kw: annexure_1?.groundCapacity ? parseFloat(annexure_1.groundCapacity) : null,
      total_re_capacity_kw: annexure_1?.totalCapacity ? parseFloat(annexure_1.totalCapacity) : null,
      install_date: annexure_1?.installDate || null,
      system_cost: annexure_1?.systemCost ? parseFloat(annexure_1.systemCost) : null,

      existing_voltage: annexure_2?.voltage || '230/240 Volts',
      proposed_ac_capacity_kw: annexure_2?.proposedAcCapacity ? parseFloat(annexure_2.proposedAcCapacity) : null,
      registration_fee: annexure_2?.registrationFee || 'RS.500',
      receipt_date: annexure_2?.receiptDate || null,
      net_meter_make: annexure_2?.netMeterMake || null,
      net_meter_serial: annexure_2?.netMeterSerial || null,
      gen_meter_make: annexure_2?.genMeterMake || null,
      gen_meter_serial: annexure_2?.genMeterSerial || null,
      meter_capacity_amps: annexure_2?.meterCapacity || '5/30',
      calculation_due_date: annexure_2?.calcDueDate || null,

      dc_capacity: inspection?.dcCapacity || null,
      ac_capacity: inspection?.acCapacity || null,
      testing_lab: inspection?.testingLab || null,
      spv_module_type: inspection?.spvModuleType || 'PV',
      spv_test_category: inspection?.spvTestCategory || 'IEC 61215',
      inverter_test_61683: inspection?.inverterTest61683 || null,
      inverter_test_61727: inspection?.inverterTest61727 || null,
      earth_resistance: inspection?.earthResistance || 'Below 5 Ohm',
      earth_material: inspection?.earthMaterial || null,
      earth_treated: inspection?.earthTreated || 'Yes',
      mounting_structure: inspection?.mountingStructure || null,
      inverter_grid_phase: inspection?.inverterGridMake || 'Single Phase',
      connection_status: inspection?.connectionStatus || null,
      gen_meter_phase: inspection?.genMeterMake || 'Single Phase',
      net_meter_make_inspection: inspection?.netMeterMake || null,
      performance_satisfactory: inspection?.performanceSatisfactory || 'Yes'
    };

    // Clean up NaN values for empty decimals
    Object.keys(data).forEach(key => {
      if (Number.isNaN(data[key])) {
        data[key] = null;
      }
    });

    const result = await WorkCompletion.createReport(data);

    res.status(201).json({
      success: true,
      message: 'Work completion report saved successfully',
      data: {
        id: result.insertId,
        ...data
      }
    });
  } catch (error) {
    console.error('Create work completion report error:', error);
    res.status(500).json({ success: false, message: error.message, stack: error.stack });
  }
};
