import React, { useRef, useState } from "react";

const OrderForm = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  const getCoordinates = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);

    setIsDrawing(true);
    setHasSigned(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const { x, y } = getCoordinates(e);

    ctx.lineTo(x, y);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    setHasSigned(false);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="text-white px-6 py-4 shadow-sm bg-primary">
          <div className="max-w-2xl mx-auto flex items-center gap-4">
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
                Solar Order Confirmation Form
              </h1>
              <p className="text-white/70 text-xs">
                Fill in all details — Anas
              </p>
            </div>
          </div>
        </div>
        <form className="max-w-2xl mx-auto p-4 space-y-4 pb-20">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-gray-50">
              <span className="h-6 w-6 rounded-md flex items-center bg-primary justify-center text-white text-xs font-bold shrink-0">
                A
              </span>
              <span className="font-bold text-sm text-black">
                Customer Details
              </span>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Full Name *
                </label>
                <input
                  placeholder="Enter full name"
                  required=""
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Consumer Number
                </label>
                <input
                  placeholder="9812345678"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Mobile Number *
                </label>
                <input
                  placeholder="9812345678"
                  required=""
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="tel"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Email ID
                </label>
                <input
                  placeholder="email@example.com"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="email"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Full Address
                </label>
                <textarea
                  placeholder="Enter full address"
                  rows="3"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none resize-none text-black bg-gray-50 placeholder-gray-400"
                ></textarea>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  PIN Code
                </label>
                <input
                  placeholder="e.g. 400001"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Category
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black">
                  <option value="">Select...</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Govt</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-gray-50">
              <span className="h-6 w-6 rounded-md flex items-center bg-primary justify-center text-white text-xs font-bold shrink-0">
                B
              </span>
              <span className="font-bold text-sm text-black">
                Project Details
              </span>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Sanction Number
                </label>
                <input
                  placeholder="e.g. SAN-2024-001"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Sanction Date
                </label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="date"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Installed Capacity (KW)
                </label>
                <input
                  placeholder="e.g. 3 KW"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  System Type
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black">
                  <option value="">Select...</option>
                  <option>On-grid</option>
                  <option>Off-grid</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Project Model
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black">
                  <option value="">Select...</option>
                  <option>CAPEX</option>
                  <option>RESCO</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Installation Date
                </label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="date"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-gray-50">
              <span className="h-6 w-6 rounded-md flex items-center bg-primary justify-center text-white text-xs font-bold shrink-0">
                C
              </span>
              <span className="font-bold text-sm text-black">
                Solar Module Details
              </span>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Module Make
                </label>
                <input
                  placeholder="e.g. Adani Solar / Tata Power"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Module Wattage
                </label>
                <input
                  placeholder="e.g. 400W"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Number of Modules
                </label>
                <input
                  placeholder="e.g. 8"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Total Capacity (KWP)
                </label>
                <input
                  placeholder="e.g. 3.2 KWP"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Product Warranty
                </label>
                <input
                  placeholder="e.g. 10 years"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Performance Warranty
                </label>
                <input
                  placeholder="e.g. 25 years"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-gray-50">
              <span className="h-6 w-6 rounded-md flex items-center bg-primary justify-center text-white text-xs font-bold shrink-0">
                D
              </span>
              <span className="font-bold text-sm text-black">
                Inverter Details
              </span>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Inverter Make &amp; Model
                </label>
                <input
                  placeholder="e.g. Growatt SPH3000"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Inverter Capacity
                </label>
                <input
                  placeholder="e.g. 3 KW"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Year of Manufacturing
                </label>
                <input
                  placeholder="e.g. 2024"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Type
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black">
                  <option value="">Select...</option>
                  <option>MPPT</option>
                  <option>PWM</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-gray-50">
              <span className="h-6 w-6 rounded-md flex items-center bg-primary justify-center text-white text-xs font-bold shrink-0">
                E
              </span>
              <span className="font-bold text-sm text-black">
                Site &amp; Safety Details
              </span>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Earthing Resistance
                </label>
                <input
                  placeholder="e.g. &lt; 1 Ohm"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Lightning Arrester
                </label>
                <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black">
                  <option value="">Select...</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Structural Stability
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    className="h-4 w-4 rounded accent-primary"
                    type="checkbox"
                  />
                  <span className="text-sm text-black">
                    I confirm the roof structure is stable for solar
                    installation
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-gray-50">
              <span className="h-6 w-6 rounded-md flex items-center bg-primary justify-center text-white text-xs font-bold shrink-0">
                F
              </span>
              <span className="font-bold text-sm text-black">Declarations</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Vendor Name
                </label>
                <input
                  placeholder="Solar vendor / installer name"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="text"
                  value=""
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    className="h-4 w-4 mt-0.5 rounded accent-primary"
                    type="checkbox"
                  />
                  <span className="text-sm text-black leading-relaxed">
                    <strong>Consumer Declaration:</strong> I hereby declare that
                    all information provided is true and accurate.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    className="h-4 w-4 mt-0.5 rounded accent-primary"
                    type="checkbox"
                  />
                  <span className="text-sm text-black leading-relaxed">
                    <strong>Vendor Declaration:</strong> I certify the
                    installation meets all technical standards and safety
                    requirements.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-gray-50">
              <span className="h-6 w-6 rounded-md flex items-center bg-primary justify-center text-white text-xs font-bold shrink-0">
                G
              </span>
              <span className="font-bold text-sm text-black">
                Payment Details
              </span>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Deal Amount (₹)
                </label>
                <input
                  placeholder="e.g. 150000"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="number"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Received Amount (₹)
                </label>
                <input
                  placeholder="e.g. 50000"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                  type="number"
                  value=""
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Total Pending (₹) — Auto calculated
                </label>
                <div className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 font-semibold text-black">
                  —
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100 bg-gray-50">
              <span className="h-6 w-6 rounded-md flex items-center bg-primary justify-center text-white text-xs font-bold shrink-0">
                H
              </span>
              <span className="font-bold text-sm text-black">
                Customer Signature
              </span>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-gray-400 font-medium">
                Sign in the box below using your finger or mouse
              </p>
              <div className="relative border-2 border-dashed border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={140}
                  className="w-full touch-none cursor-crosshair h-[140px]"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onMouseOut={stopDrawing}
                />
                {!hasSigned && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center gap-2 text-gray-300">
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
                        className="h-5 w-5"
                      >
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      </svg>
                      <span className="text-sm font-medium">Sign here</span>
                    </div>
                  </div>
                )}
              </div>
              {/* clear sign button */}
              {hasSigned && (
                <button
                  type="button"
                  onClick={clearCanvas}
                  className="flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-600 transition-colors"
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
                    className="h-3.5 w-3.5"
                  >
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                  Clear Signature
                </button>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white font-bold py-4 rounded-2xl bg-primary text-base flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 disabled:opacity-60"
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
              className="lucide lucide-circle-check h-5 w-5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>{" "}
            Submit Form
          </button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
