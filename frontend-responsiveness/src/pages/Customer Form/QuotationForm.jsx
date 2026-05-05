import React, { useState } from "react";
import GenerateQuotation from "./GenerateQuotation";

const applianceOptions = [
  "LED Bulb",
  "Ceiling Fan",
  "LED TV",
  "Refrigerator",
  "Air Conditioner (1 Ton)",
  "Air Conditioner (1.5 Ton)",
  "Air Cooler",
  "Water Pump",
  "Washing Machine",
  "Computer/Laptop",
  "Electric Iron",
  "Water Heater",
  "Mixer/Grinder",
  "Other",
];

const QuotationForm = () => {
  const [appliances, setAppliances] = useState([
    {
      id: 1,
      name: "LED Bulb",
      watts: 10,
      qty: 1,
      hours: 1,
    },
  ]);
  const [showQuotation, setShowQuotation] = useState(false);

  const addAppliance = () => {
    setAppliances([
      ...appliances,
      {
        id: Date.now(),
        name: "LED Bulb",
        watts: 0,
        qty: 1,
        hours: 1,
      },
    ]);
  };

  const handleChange = (id, field, value) => {
    setAppliances((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: Number(value) || value } : item,
      ),
    );
  };

  const removeAppliance = (id) => {
    setAppliances(appliances.filter((item) => item.id !== id));
  };

  const totalLoad = appliances.reduce(
    (sum, item) => sum + item.watts * item.qty,
    0,
  );

  const totalUnits = appliances.reduce(
    (sum, item) => sum + item.watts * item.qty * item.hours,
    0,
  );

  const connectedLoadKW = (totalLoad / 1000).toFixed(2); // W → kW
const dailyConsumptionKWH = (totalUnits / 1000).toFixed(2); // Wh → kWh

// Simple recommendation logic (can improve later)
const recommendedSystemKW = Math.ceil(dailyConsumptionKWH / 4); 

  return (
    <>
      <div className="text-white px-6 py-4 shadow-sm bg-primary print:hidden">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <div className="flex items-baseline gap-0.5 shrink-0">
            <span className="font-display font-bold text-xl text-white">
              Ampi
            </span>
            <span className="font-display font-bold text-xl text-white/80">
              Solar
            </span>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div>
            <h1 className="text-base font-bold">
              Solar Proposal &amp; Quotation
            </h1>
            <p className="text-white/70 text-xs">
              Enter your load details to get an auto-generated quote — Anas
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 space-y-5 pb-16 print:p-0 print:space-y-3">
        <div className="print:hidden">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-5">
            <h2 className="font-bold text-black mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap h-4 w-4 text-primary"
                aria-hidden="true"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>{" "}
              Site Details
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Phase
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black">
                  <option>Single Phase</option>
                  <option>Three Phase</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Roof Type
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black">
                  <option>RCC</option>
                  <option>Tin Shed</option>
                  <option>Tiled</option>
                </select>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Subsidy Required
                </label>
                <div className="flex gap-4 pt-2.5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="h-5 w-5 rounded-full border-2 border-gray-200 flex items-center justify-center transition-colors"></div>
                    <input className="sr-only" type="radio" />
                    <span className="text-sm text-black font-medium">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center transition-colors">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                    </div>
                    <input className="sr-only" type="radio" checked="" />
                    <span className="text-sm text-black font-medium">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
            <div className="text-white px-5 py-3 font-bold bg-primary text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calculator h-4 w-4"
                  aria-hidden="true"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  <line x1="8" x2="16" y1="6" y2="6"></line>
                  <line x1="16" x2="16" y1="14" y2="18"></line>
                  <path d="M16 10h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M8 18h.01"></path>
                </svg>{" "}
                Load Calculator — Enter Your Appliances
              </div>
              <button
                onClick={addAppliance}
                className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>{" "}
                Add Appliance
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide w-40">
                      Appliance
                    </th>
                    <th className="text-center px-3 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide w-20">
                      Watts
                    </th>
                    <th className="text-center px-3 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide w-16">
                      Qty
                    </th>
                    <th className="text-center px-3 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide w-20">
                      Hrs/Day
                    </th>
                    <th className="text-center px-3 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide w-24">
                      Daily (Wh)
                    </th>
                    <th className="px-3 py-2.5 w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {appliances.map((item, index) => {
                    const daily = item.watts * item.qty * item.hours;

                    return (
                      <tr
                        key={item.id}
                        className={`border-b border-gray-50 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        {/* Appliance */}
                        <td className="px-3 py-2">
                          <select
                            value={item.name}
                            onChange={(e) =>
                              handleChange(item.id, "name", e.target.value)
                            }
                            className="w-full text-xs border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none text-black"
                          >
                            {applianceOptions.map((opt, i) => (
                              <option key={i}>{opt}</option>
                            ))}
                          </select>
                        </td>

                        {/* Watts */}
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            value={item.watts}
                            onChange={(e) =>
                              handleChange(item.id, "watts", e.target.value)
                            }
                            className="w-full text-xs border border-gray-200 rounded-lg px-2 py-1.5 text-center bg-white focus:outline-none text-black"
                          />
                        </td>

                        {/* Qty */}
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={(e) =>
                              handleChange(item.id, "qty", e.target.value)
                            }
                            className="w-full text-xs border border-gray-200 rounded-lg px-2 py-1.5 text-center bg-white focus:outline-none text-black"
                          />
                        </td>

                        {/* Hours */}
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            min="0.5"
                            max="24"
                            step="0.5"
                            value={item.hours}
                            onChange={(e) =>
                              handleChange(item.id, "hours", e.target.value)
                            }
                            className="w-full text-xs border border-gray-200 rounded-lg px-2 py-1.5 text-center bg-white focus:outline-none text-black"
                          />
                        </td>

                        {/* Daily */}
                        <td className="px-3 py-2 text-center">
                          <span className="text-xs font-semibold px-2 py-1 rounded text-primary bg-emerald-50">
                            {daily}
                          </span>
                        </td>

                        {/* Delete */}
                        <td className="px-3 py-2 text-center">
                          <button
                            onClick={() => removeAppliance(item.id)}
                            className="h-7 w-7 flex items-center justify-center text-gray-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-trash2 lucide-trash-2 h-3.5 w-3.5"
                              aria-hidden="true"
                            >
                              <path d="M10 11v6"></path>
                              <path d="M14 11v6"></path>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                              <path d="M3 6h18"></path>
                              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                <tfoot>
                  <tr className="border-t-2 border-cyan-200 bg-emerald-50">
                    <td
                      colSpan="2"
                      className="px-4 py-2.5 text-xs font-bold text-primary"
                    >
                      Total Connected Load
                    </td>
                    <td
                      colSpan="2"
                      className="px-3 py-2.5 text-center text-xs font-bold text-primary"
                    >
                      {totalLoad} W
                    </td>
                    <td className="px-3 py-2.5 text-center text-xs font-bold text-primary">
                      {totalUnits} Wh
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="px-5 py-3 text-white flex flex-wrap gap-6 items-center bg-primary justify-between">
              <div className="flex gap-6">
                <div>
                  <p className="text-[10px] text-white/70 uppercase font-semibold">
                    Connected Load
                  </p>
                  <p className="text-lg font-bold">{connectedLoadKW} kW</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/70 uppercase font-semibold">
                    Daily Consumption
                  </p>
                  <p className="text-lg font-bold">{dailyConsumptionKWH} kWh/day</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/70 uppercase font-semibold">
                    Recommended System
                  </p>
                  <p className="text-lg font-bold">{recommendedSystemKW} kW Solar</p>
                </div>
              </div>
              <button onClick={() => setShowQuotation((prev) => !prev)} className="flex items-center gap-2 bg-white text-primary font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>{" "}
                Generate Quotation
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Additional Notes / Special Requirements
            </label>
            <textarea
              rows="2"
              placeholder="Any special requirements or notes..."
              className="mt-1.5 w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none resize-none bg-gray-50 text-black placeholder-gray-400"
            ></textarea>
          </div>
        </div>

        {showQuotation && <GenerateQuotation />}
      </div>
    </>
  );
};

export default QuotationForm;
