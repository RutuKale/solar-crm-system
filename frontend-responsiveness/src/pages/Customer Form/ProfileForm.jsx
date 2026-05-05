import React, { useState } from "react";

const customerFields = [
  { label: "Date", name: "date", type: "date" },
  {
    label: "Name",
    name: "name",
    type: "text",
    required: true,
    placeholder: "Your full name",
  },
  {
    label: "Consumer No",
    name: "consumerNo",
    type: "text",
    placeholder: "e.g. 9812345678",
  },
  { label: "Mobile No", name: "mobile", type: "tel", required: true, placeholder: "Mobile Number" },
  { label: "City / Location", name: "city", type: "text", placeholder: "Your city or location" },

  { label: "Sanction Load", name: "sanctionLoad", type: "text", placeholder: "e.g. 5 KW" },
  { label: "Proposed Load", name: "proposedLoad", type: "text", placeholder: "e.g. 3 KW" },
  { label: "Rooftop Capacity", name: "capacity", type: "text", placeholder: "e.g. 3.2 KWP" },
  { label: "Inverter Details", name: "inverter", type: "text", placeholder: "Make, model, capacity" },
  { label: "Panel Details", name: "panel", type: "text", placeholder: "make, wattage, number of panels" },

  { label: "Reference", name: "reference", type: "text", placeholder: "Who referred you?" },
];

const documentFields = [
  { label: "Bill No", name: "billNo" },
  { label: "Aadhar Card Number", name: "aadhar" },
  { label: "PAN Card Number", name: "pan" },
  { label: "GEO Photo Note", name: "geoNote" },
];

const ProfileForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const InputField = ({ label, name, type = "text", placeholder, required }) => (
  <div className="space-y-1">
    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={formData[name] || ""}
      onChange={handleChange}
      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50"
    />
  </div>
);

  return (
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
            <h1 className="text-base font-bold">Solar Customer Registration</h1>
            <p className="text-white/70 text-xs">
              Fill in your details to register
            </p>
          </div>
        </div>
      </div>
      <form className="max-w-2xl mx-auto p-4 space-y-4 pb-20">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-400 border-b border-gray-100 pb-2">
            Customer &amp; Project Details
          </p>
          {customerFields.map((field, index) => (
            <InputField key={index} {...field} />
          ))}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Subsidy
            </label>
            <div className="flex gap-5 pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors border-gray-300"></div>
                <input className="sr-only" type="radio"></input>
                <span className="text-sm text-black font-medium">Subsidy</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors border-gray-300"></div>
                <input className="sr-only" type="radio"></input>
                <span className="text-sm text-black font-medium">
                  Non Subsidy
                </span>
              </label>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Loan
            </label>
            <div className="flex gap-5 pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors border-gray-300"></div>
                <input className="sr-only" type="radio"></input>
                <span className="text-sm text-black font-medium">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="h-5 w-5 rounded-full border-2 flex border-gray-300 items-center justify-center transition-colors"></div>
                <input className="sr-only" type="radio"></input>
                <span className="text-sm text-black font-medium">No</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-5 py-3 flex items-center gap-2 border-b border-gray-100 bg-primary">
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
              className="lucide lucide-file-text h-4 w-4 text-white"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            <span className="font-bold text-white text-sm">
              Document Details
            </span>
          </div>
          <div className="p-4 space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Bill No
              </label>
              <input
                placeholder="Electricity bill number"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                type="text"
                value=""
              ></input>
            </div>
            <div className="space-y-2 pl-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Electricity Bill Photo
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs bg-gray-50 border-gray-200 text-gray-700 font-semibold px-3 py-2 rounded-lg border transition-colors"
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
                    className="lucide lucide-upload h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12"></path>
                    <path d="m17 8-5-5-5 5"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  </svg>
                  Upload
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold bg-gray-50 border-gray-200 text-gray-700 px-3 py-2 rounded-lg border transition-colors"
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
                    className="lucide lucide-camera h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                  Camera
                </button>
                <input
                  accept="image/*,application/pdf"
                  className="hidden"
                  type="file"
                ></input>
                <input
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  type="file"
                ></input>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Applicant Aadhar Card Number
              </label>
              <input
                placeholder="e.g. 1234 5678 9012"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                type="text"
                value=""
              ></input>
            </div>
            <div className="space-y-2 pl-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Aadhar Card Photo
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold bg-gray-50 border-gray-200 text-gray-700 px-3 py-2 rounded-lg border transition-colors"
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
                    className="lucide lucide-upload h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12"></path>
                    <path d="m17 8-5-5-5 5"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  </svg>{" "}
                  Upload
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border bg-gray-50 border-gray-200 text-gray-700 transition-colors"
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
                    className="lucide lucide-camera h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>{" "}
                  Camera
                </button>
                <input
                  accept="image/*,application/pdf"
                  className="hidden"
                  type="file"
                ></input>
                <input
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  type="file"
                ></input>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                PAN Card Number
              </label>
              <input
                placeholder="e.g. ABCDE1234F"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                type="text"
                value=""
              ></input>
            </div>
            <div className="space-y-2 pl-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                PAN Card Photo
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border bg-gray-50 border-gray-200 text-gray-700 transition-colors"
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
                    className="lucide lucide-upload h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12"></path>
                    <path d="m17 8-5-5-5 5"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  </svg>{" "}
                  Upload
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border bg-gray-50 border-gray-200 text-gray-700 transition-colors"
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
                    className="lucide lucide-camera h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>{" "}
                  Camera
                </button>
                <input
                  accept="image/*,application/pdf"
                  className="hidden"
                  type="file"
                ></input>
                <input
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  type="file"
                ></input>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Bank Details
              </label>
              <textarea
                placeholder="Bank name, account number, IFSC code"
                rows="3"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none resize-none text-black"
              ></textarea>
            </div>
            <div className="space-y-2 pl-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Bank Passbook / Cancelled Cheque
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-gray-50 border-gray-200 text-gray-700 rounded-lg border transition-colors"
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
                    className="lucide lucide-upload h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12"></path>
                    <path d="m17 8-5-5-5 5"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  </svg>{" "}
                  Upload
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-gray-50 border-gray-200 text-gray-700 rounded-lg border transition-colors"
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
                    className="lucide lucide-camera h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>{" "}
                  Camera
                </button>
                <input
                  accept="image/*,application/pdf"
                  className="hidden"
                  type="file"
                ></input>
                <input
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  type="file"
                ></input>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                GEO Photo Note
              </label>
              <input
                placeholder="Notes about site photo location"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none bg-gray-50 text-black placeholder-gray-400"
                type="text"
                value=""
              ></input>
            </div>
            <div className="space-y-2 pl-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                GEO Photo (Geo-tagged Site Photo)
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold bg-gray-50 border-gray-200 text-gray-700 px-3 py-2 rounded-lg border transition-colors"
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
                    className="lucide lucide-upload h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12"></path>
                    <path d="m17 8-5-5-5 5"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  </svg>{" "}
                  Upload
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-semibold bg-gray-50 border-gray-200 text-gray-700 px-3 py-2 rounded-lg border transition-colors"
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
                    className="lucide lucide-camera h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>{" "}
                  Camera
                </button>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs bg-emerald-50 border-cyan-200 text-primary font-semibold px-3 py-2 rounded-lg border transition-colors"
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
                    className="lucide lucide-map-pin h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Geo Camera
                </button>
                <input
                  accept="image/*,application/pdf"
                  className="hidden"
                  type="file"
                ></input>
                <input
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  type="file"
                ></input>
                <input
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  type="file"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white font-bold py-4 rounded-2xl text-base flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 disabled:opacity-60 bg-primary"
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
          Register &amp; Submit
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
