import React, { useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  "Load Calculator",
  "Auto System Size",
  "Itemized Quote",
  "GST Included",
  "PDF Download",
  "Save & Share",
];

const checklist = [
  "Appliance Load Calculator",
  "14 Appliance Types with Auto-Watts",
  "Recommended System Size (kW)",
  "Solar Panels, Inverter, Cables",
  "Earthing, Structure, Installation",
  "Editable Rates per Item",
  "GST Calculation Included",
  "PDF Download & Save",
];

const customers = [
  {
    id: 2,
    name: "Anas",
    phone: "9812345678",
    city: "Nashik",
    initial: "A",
    status: "submitted",
    link: "bf2a208f0ebf70a32d490152fe50d666",
  },
  {
    id: 9,
    name: "Farheen",
    phone: "123456789",
    city: "Nashik",
    initial: "F",
    status: "pending",
    link: "ff8cc6ece15ff674a578579d95fd625f",
  },
  {
    id: 19,
    name: "Test",
    phone: "+919309973905",
    city: "Jalgaon, MH",
    initial: "T",
    status: "pending",
    link: "a1d985631227e4e2fba6f9cbe41201ce",
  },
  {
    id: 20,
    name: "umar shaikh",
    phone: "67567343988",
    city: "",
    initial: "US",
    status: "pending",
    link: "74b8a5ff61972ccb564ee88fcb81ae95",
  },
];

const BASE_URL =
  "https://6ad7eff4-8a86-42c3-952b-d15cf774e3e0-00-39bu2lnzlhl1y.picard.replit.dev/quotation/";

const ProposalQuotationForm = () => {
    const [search, setSearch] = useState("");
    
      const filteredCustomers = customers.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()),
      );
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
              className="lucide lucide-clipboard-list h-5 w-5 text-white"
              aria-hidden="true"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <path d="M12 11h4"></path>
              <path d="M12 16h4"></path>
              <path d="M8 11h.01"></path>
              <path d="M8 16h.01"></path>
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-white text-base">
              Order Confirmation Form
            </h2>
            <p className="text-white/75 text-xs">
              Each customer gets their own link — fill project details, payment
              &amp; sign digitally
            </p>
          </div>
        </div>
        <div className="px-5 py-3 flex flex-wrap gap-1.5">
          {sections.map((item, index) => (
            <span
              key={index}
              className="text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-sm">
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
          className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          aria-hidden="true"
        >
          <path d="m21 21-4.34-4.34"></path>
          <circle cx="11" cy="11" r="8"></circle>
        </svg>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customers..."
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none text-black"
          type="text"
        ></input>
      </div>

      <div className="space-y-4">
        {filteredCustomers.map((c) => {
          const formLink = `${BASE_URL}${c.link}`;
          const waLink = `https://wa.me/?text=Hi ${c.name}, please fill your solar form: ${formLink}`;

          return (
            <div key={c.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-4 flex items-center gap-3 bg-primary">
                <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  {c.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-white text-base leading-tight">
                      {c.name}
                    </h3>
                    {c.status === "submitted" && (
                      <span className="flex items-center gap-1 bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
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
                          className="lucide lucide-circle-check h-3 w-3"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>{" "}
                        Submitted
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 text-xs">
                    {c.phone} {c.city && `· ${c.city}`}
                  </p>
                </div>
                <a href={`/customers/${c.id}`}>
                  <button className="shrink-0 flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
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
                      className="lucide lucide-user h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>{" "}
                    Profile
                  </button>
                </a>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {checklist.map((item, index) => (
                    <div
                      key={`${c.id}-${item}`}
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

                      <span className="text-xs text-gray-600">{item}</span>
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
                  <span className="truncate">{formLink}</span>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <button className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl bg-primary transition-opacity hover:opacity-90">
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
                    Copy Link
                  </button>

                  <a href={waLink} target="_blank">
                    <div className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-xl cursor-pointer hover:opacity-90 transition-opacity bg-secondary">
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

                  {/* <a href={formLink} target="_blank"> */}
                  <Link to={`/customer-forms/quotaion-form`} target="_blank">
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

                {/* STATUS */}
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors text-primary">
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
                      className="lucide lucide-refresh-cw h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                    Regenerate Link
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProposalQuotationForm;
