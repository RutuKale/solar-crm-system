import React from "react";

const items = [
  { id: 1, desc: "Solar Panel 540W (5 Nos)", qty: 5, unit: "Nos", rate: 9000 },
  { id: 2, desc: "Solar Inverter 2.6 KW", qty: 1, unit: "Nos", rate: 31200 },
  {
    id: 3,
    desc: "DC Cable 4mm² (Solar Grade)",
    qty: 39,
    unit: "Mtr",
    rate: 45,
  },
  { id: 4, desc: "AC Cable 6mm²", qty: 13, unit: "Mtr", rate: 35 },
  {
    id: 5,
    desc: "GI Mounting Structure (Hot Dip)",
    qty: 2.6,
    unit: "KW",
    rate: 6000,
  },
  { id: 6, desc: "Earthing Kit (Complete)", qty: 2, unit: "Set", rate: 1500 },
  { id: 7, desc: "DC DB Box + Protection", qty: 1, unit: "Set", rate: 2000 },
  { id: 8, desc: "AC DB Box", qty: 1, unit: "Set", rate: 1500 },
  {
    id: 9,
    desc: "Installation & Commissioning",
    qty: 2.6,
    unit: "KW",
    rate: 5000,
  },
  {
    id: 10,
    desc: "Transportation & Misc Charges",
    qty: 1,
    unit: "LS",
    rate: 2000,
  },
];

const loadSummary = [
  { qty: 6, name: "LED Bulb", watt: 10 },
  { qty: 3, name: "Ceiling Fan", watt: 75 },
  { qty: 1, name: "LED TV", watt: 100 },
  { qty: 1, name: "Refrigerator", watt: 150 },
  { qty: 1, name: "Water Pump", watt: 750 },
  { qty: 1, name: "Air Cooler", watt: 200 },
];

const summary = [
  { label: "Sub Total", value: "₹ 1,15,510" },
  { label: "GST (12%)", value: "₹ 13,861" },
];

const GenerateQuotation = () => {
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden print:shadow-none print:rounded-none print:border-0">
        <div className="text-white p-6 print:p-4 bg-primary">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-display font-bold text-2xl text-white">
                    Ampi
                  </span>
                  <span className="font-display font-bold text-2xl text-white/75">
                    Solar
                  </span>
                </div>
                <p className="text-white/60 text-xs">
                  Solar Installation Specialist
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/60 uppercase tracking-wider">
                Solar Proposal
              </p>
              <p className="text-lg font-bold">QUOT-805813</p>
              <p className="text-xs text-white/60">27 April 2026</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 border-b border-gray-100 divide-x divide-gray-100">
          <div className="p-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
              Customer Details
            </p>
            <p className="font-bold text-black">Anas</p>
            <p className="text-sm text-gray-600">9812345678</p>
            <p className="text-sm text-gray-400">Nashik</p>
          </div>
          <div className="p-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
              System Specifications
            </p>
            <div className="space-y-0.5">
              <div className="flex gap-2 text-sm">
                <span className="text-gray-400 w-20 shrink-0">
                  System Size:
                </span>
                <span className="font-semibold text-black">2.6 kW</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="text-gray-400 w-20 shrink-0">Phase:</span>
                <span className="font-semibold text-black">Single Phase</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="text-gray-400 w-20 shrink-0">Roof Type:</span>
                <span className="font-semibold text-black">RCC</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="text-gray-400 w-20 shrink-0">Subsidy:</span>
                <span className="font-semibold text-black">No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 py-3 border-b border-gray-100 bg-emerald-50">
          <p className="text-xs font-bold uppercase tracking-wide mb-2 text-primary">
            Load Summary
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm">
            {loadSummary.map((item, i) => (
              <span key={i} className="text-gray-700">
                <span className="font-semibold">{item.qty}×</span> {item.name} (
                {item.watt}W)
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-white bg-primary">
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-8">
                  S.No
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">
                  Description
                </th>
                <th className="text-center px-3 py-3 text-xs font-bold uppercase tracking-wide w-16">
                  Qty
                </th>
                <th className="text-center px-3 py-3 text-xs font-bold uppercase tracking-wide w-14">
                  Unit
                </th>
                <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide w-28">
                  Rate (₹)
                </th>
                <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide w-32">
                  Amount (₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                const amount = item.qty * item.rate;

                return (
                  <tr
                    key={item.id}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                    }`}
                  >
                    <td className="px-4 py-3 text-gray-400 text-xs text-center">
                      {item.id}
                    </td>

                    <td className="px-4 py-3 text-black font-medium">
                      {item.desc}
                    </td>

                    <td className="px-3 py-3 text-center text-gray-600">
                      {item.qty}
                    </td>

                    <td className="px-3 py-3 text-center text-gray-400 text-xs">
                      {item.unit}
                    </td>

                    <td className="px-4 py-3 text-right">
                      <input
                        className="w-24 text-right text-sm border border-gray-200 rounded-lg px-2 py-1"
                        type="number"
                        defaultValue={item.rate}
                      />
                    </td>

                    <td className="px-4 py-3 text-right font-semibold text-black">
                      ₹ {amount.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end border-t border-gray-100 bg-gray-50">
          <div className="w-72 divide-y divide-gray-100">
            {summary.map((item, i) => (
              <div key={i} className="flex justify-between px-5 py-2.5 text-sm">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-semibold text-black">{item.value}</span>
              </div>
            ))}
            <div className="flex justify-between px-5 py-3 text-white bg-primary">
              <span className="font-bold text-base">Grand Total</span>
              <span className="font-bold text-base">₹ 1,29,371</span>
            </div>
          </div>
        </div>
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
            Terms &amp; Conditions
          </p>
          <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
            <li>This quotation is valid for 30 days from the date of issue.</li>
            <li>
              50% advance payment required to confirm order. Balance on
              installation completion.
            </li>
            <li>
              Government subsidy (if applicable) will be deducted from final
              bill after credit.
            </li>
            <li>
              Solar panels carry 25-year performance warranty. Inverter warranty
              as per manufacturer.
            </li>
            <li>
              Price is subject to change based on prevailing market rates.
            </li>
          </ul>
        </div>
        <div className="px-5 py-4 border-t border-gray-200 flex gap-3 flex-wrap print:hidden">
          <button className="flex items-center gap-2 text-white bg-primary font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
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
              className="lucide lucide-download h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>{" "}
            Download / Print PDF
          </button>
          <button className="flex items-center gap-2 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors border border-white/30 backdrop-blur-sm disabled:opacity-60 bg-[rgba(255,255,255,0.15)]">
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
              className="lucide lucide-circle-check h-4 w-4"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            Save Quotation
          </button>
        </div>
      </div>
    </>
  );
};

export default GenerateQuotation;
