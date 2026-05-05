import React, { useState } from "react";
import Layout from "../../components/Layout";
import ProfileCreationForm from "./ProfileCreationForm";
import OrderConfirmationForm from "./OrderConfirmationForm";
import ProposalQuotationForm from "./ProposalQuotationForm";

const CustomerForm = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Layout>
      <div className="h-full flex flex-col">
        
        {/* HEADER */}
        <header className="sticky top-0 z-20 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 sm:py-4">
         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* LEFT */}
            <div>
              <h1 className="text-xl font-bold text-black flex items-center gap-2">
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
                  className="lucide lucide-file-text h-5 w-5 text-primary"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                Customer Forms
              </h1>
              <p className="text-sm text-gray-400 mt-0.5">
                3 forms — open, share on WhatsApp, download PDF
              </p>
            </div>

            {/* RIGHT STATS */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-6">
             <div className="text-center flex-1 min-w-[80px]">
                <p className="text-2xl font-bold text-neutral-950">4</p>
                <p className="text-xs text-gray-400 font-medium">Customers</p>
              </div>

            <div className="hidden md:block w-px h-8 bg-gray-100"></div>

              <div className="text-center min-w-[70px]">
                <p className="text-2xl font-bold text-neutral-500">4</p>
                <p className="text-xs text-gray-400 font-medium">
                  Links Ready
                </p>
              </div>

              <div className="w-px h-8 bg-gray-100"></div>

              <div className="text-center min-w-[70px]">
                <p className="text-2xl font-bold text-neutral-950">1</p>
                <p className="text-xs text-gray-400 font-medium">
                  Submitted
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="flex-1 overflow-auto bg-gray-50 p-3 sm:p-4 lg:p-5">
          
          {/* TABS */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 mb-5 p-1 bg-white rounded-2xl border border-gray-100 shadow-sm">
            
            {/* PROFILE */}
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${
                activeTab === "profile"
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <div>
                <div className="leading-tight">Profile Creation Form</div>
                <div className={`text-[10px] font-normal ${activeTab === "profile" ? "text-white/70" : "text-gray-400"}`}>
                  New customer registration
                </div>
              </div>
            </button>

            {/* ORDER */}
            <button
              onClick={() => setActiveTab("order")}
              className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${
                activeTab === "order"
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="8" height="4" x="8" y="2"></rect>
              </svg>
              <div>
                <div className="leading-tight">Order Confirmation Form</div>
                <div className={`text-[10px] font-normal ${activeTab === "order" ? "text-white/70" : "text-gray-400"}`}>
                  Solar project form A–H
                </div>
              </div>
            </button>

            {/* QUOTATION */}
            <button
              onClick={() => setActiveTab("quotation")}
              className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${
                activeTab === "quotation"
                  ? "bg-primary text-white"
                  : "text-gray-700"
              }`}
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="16" height="20" x="4" y="2"></rect>
              </svg>
              <div>
                <div className="leading-tight">
                  Proposal & Quotation Form
                </div>
                <div className={`text-[10px] font-normal ${activeTab === "quotation" ? "text-white/70" : "text-gray-400"}`}>
                  Auto-generate solar quote
                </div>
              </div>
            </button>
          </div>

          {/* TAB CONTENT */}
          {activeTab === "profile" && <ProfileCreationForm />}
          {activeTab === "order" && <OrderConfirmationForm />}
          {activeTab === "quotation" && <ProposalQuotationForm />}
        </div>
      </div>
    </Layout>
  );
};

export default CustomerForm;