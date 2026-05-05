import React, { useState } from "react";
import { Link } from "react-router-dom";

const customers = [
  {
    id: 1,
    name: "Anas",
    phone: "9812345678",
    initial: "A",
    linkId: "bf2a208f0ebf70a32d490152fe50d666",
  },
  {
    id: 2,
    name: "Farheen",
    phone: "123456789",
    initial: "F",
    linkId: "ff8cc6ece15ff674a578579d95fd625f",
  },
  {
    id: 3,
    name: "Test",
    phone: "+919309973905",
    initial: "T",
    linkId: "a1d985631227e4e2fba6f9cbe41201ce",
  },
  {
    id: 4,
    name: "umar shaikh",
    phone: "67567343988",
    initial: "US",
    linkId: "74b8a5ff61972ccb564ee88fcb81ae95",
  },
];

const formFields = [
  "Name, Mobile No, Consumer No",
  "City / Location, Date",
  "Sanction & Proposed Load",
  "Rooftop Capacity, Inverter & Panel",
  "Subsidy / Non-Subsidy (Radio)",
  "Loan Yes/No (Radio), Reference",
  "Aadhar Card No + Photo",
  "PAN Card No + Photo",
  "Bank Details + Passbook",
  "Electricity Bill No + Photo",
  "GEO Photo (Geo-tagged Camera)",
];

const ProfileCreationForm = () => {
  const [showToast, setShowToast] = useState(false);
  const BASE_URL = window.location.origin;

  const handleCopy = () => {
    const link = `${BASE_URL}/customer-forms/profile-form`;

    navigator.clipboard.writeText(link);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 flex items-center gap-3 bg-primary">
          <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
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
              className="lucide lucide-user-plus h-5 w-5 text-white"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-white text-base">
              Profile Creation Form
            </h2>
            <p className="text-white/75 text-xs">
              Share this link — new customer gets added to CRM automatically
            </p>
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {formFields.map((field, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2"
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
                  className="lucide lucide-circle-check h-3 w-3 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>

                <span className="text-xs text-gray-600">{field}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 mb-4 font-mono text-xs text-gray-500 overflow-hidden">
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
              className="lucide lucide-link2 lucide-link-2 h-3.5 w-3.5 shrink-0 text-gray-400"
              aria-hidden="true"
            >
              <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
              <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
              <line x1="8" x2="16" y1="12" y2="12"></line>
            </svg>
            <span className="truncate">http://localhost:5173/customer-forms/profile-form</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-opacity hover:opacity-90 bg-primary"
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
                className="lucide lucide-copy h-4 w-4"
                aria-hidden="true"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>{" "}
              Copy Link
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Register for Solar: ${BASE_URL}/customer-forms/profile-form`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2 text-white bg-secondary text-sm font-semibold px-4 py-2.5 rounded-xl cursor-pointer hover:opacity-90 transition-opacity">
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
                  className="lucide lucide-share2 lucide-share-2 h-4 w-4"
                  aria-hidden="true"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>{" "}
                Share on WhatsApp
              </div>
            </a>
            <Link to="/customer-forms/profile-form" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2 text-black text-sm font-semibold px-4 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
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
                  className="lucide lucide-external-link h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>{" "}
                Open Form
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center gap-2 mb-3">
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
            className="lucide lucide-pen-line h-4 w-4 text-gray-400"
            aria-hidden="true"
          >
            <path d="M13 21h8"></path>
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
          </svg>
          <h3 className="font-bold text-black text-sm">
            Update Existing Customer Profiles
          </h3>
          <span className="text-xs text-gray-400">
            (send personal update link)
          </span>
        </div>
        <div className="divide-y divide-gray-50">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center gap-3 py-2.5 flex-wrap"
            >
              {/* Avatar */}
              <div className="h-8 w-8 rounded-lg flex items-center justify-center text-white bg-primary font-bold text-xs shrink-0">
                {customer.initial}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-black truncate">
                  {customer.name}
                </p>
                <p className="text-xs text-gray-400">{customer.phone}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5 flex-wrap shrink-0">
                {/* Copy */}
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `${BASE_URL}/customer-forms/profile-form/${customer.linkId}`,
                    )
                  }
                  className="h-7 px-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors text-primary"
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
                    className="lucide lucide-copy h-3 w-3"
                    aria-hidden="true"
                  >
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>{" "}
                  Copy
                </button>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=Hi ${customer.name}, please fill your solar form: https://your-link.com/customer-forms/profile-form/${customer.linkId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-7 px-2.5 text-xs font-semibold rounded-lg flex items-center gap-1 text-white cursor-pointer bg-secondary">
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
                      className="lucide lucide-share2 lucide-share-2 h-3 w-3"
                      aria-hidden="true"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>{" "}
                    WA
                  </div>
                </a>

                {/* Open */}
                <a
                  href={`https://your-link.com/customer-forms/profile-form/${customer.linkId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="h-7 px-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors text-gray-600">
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
                      className="lucide lucide-external-link h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>{" "}
                    Open
                  </button>
                </a>
              </div>
            </div>
          ))}

          {showToast && (
            <div
              onClick={() => setShowToast(false)}
              className="fixed bottom-5 right-5 z-50 group cursor-pointer"
            >
              <div className="flex items-center gap-3 bg-white border border-gray-200 shadow-lg rounded-xl px-8 py-4 text-sm text-gray-800 transition-all duration-300 animate-slide-in">
                {/* Text */}
                <span className="font-bold text-lg">
                  Link copied — Profile form
                </span>

                {/* Close icon (only on hover) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowToast(false);
                  }}
                  className="hidden group-hover:block text-gray-400 hover:text-black font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCreationForm;
