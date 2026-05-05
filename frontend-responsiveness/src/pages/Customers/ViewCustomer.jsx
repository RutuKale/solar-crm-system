import React, { captureOwnerStack, useState } from "react";
import ProgressTracker from "./ProgressTracker";
import MaterialList from "./MaterialList";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { customersData } from "../../data/customers";
import FormsAndPdfs from "./FormsAndPdfs";
import { Link } from "react-router-dom";

const customerDetails = [
  {
    label: "Date",
    name: "date",
    value: "18/04/2024",
    placeholder: "Enter date",
  },
  { label: "Name", name: "name", value: "Anas", placeholder: "Enter name" },
  {
    label: "Consumer No",
    name: "consumerNo",
    value: "9812345678",
    placeholder: "Enter consumer no",
  },
  {
    label: "Mobile No",
    name: "mobile",
    value: "9812345678",
    placeholder: "Enter mobile no",
  },
  {
    label: "Sanction Load",
    name: "sanctionLoad",
    value: "5 kW",
    placeholder: "Enter sanction load",
  },
  {
    label: "Proposed Load",
    name: "proposedLoad",
    value: "5 kW",
    placeholder: "Enter proposed load",
  },
  {
    label: "Rooftop Capacity",
    name: "capacity",
    value: "5kW",
    placeholder: "Enter rooftop capacity",
  },
  {
    label: "Inverter Details",
    name: "inverter",
    value: "3 kW Hybrid Inverter",
    placeholder: "Enter inverter details",
  },
  {
    label: "Panel Details",
    name: "panel",
    value: "6x 500W Poly Panels",
    placeholder: "Enter panel details",
  },
];

const tabs = [
  {
    key: "progress",
    label: "Progress Tracker",
    icon: (
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
        className="lucide lucide-clipboard-list h-4 w-4"
        aria-hidden="true"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="M12 11h4"></path>
        <path d="M12 16h4"></path>
        <path d="M8 11h.01"></path>
        <path d="M8 16h.01"></path>
      </svg>
    ),
  },
  {
    key: "material",
    label: "Material List",
    icon: (
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
        className="lucide lucide-package h-4 w-4"
        aria-hidden="true"
      >
        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
        <path d="M12 22V12"></path>
        <polyline points="3.29 7 12 12 20.71 7"></polyline>
        <path d="m7.5 4.27 9 5.15"></path>
      </svg>
    ),
  },
  {
    key: "forms",
    label: "Form & PDF",
    icon: (
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
      </svg>
    ),
  },
];

const ViewCustomer = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("progress");

  const customer = customersData.find((c) => c.id === Number(id));

  const customerId = customer
    ? `CUST-${String(customer.id).padStart(4, "0")}`
    : "";

  const completed = Math.round((customer?.progress || 0) * 0.7);
  const pending = 100 - completed;
  
  return (
    <Layout>
      <header className="sticky top-0 z-20 bg-white border-b border-gray-300 px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <Link to="/customers">
            <button className="h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center">
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
                className="lucide lucide-arrow-left h-5 w-5 text-slate-600"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
          </Link>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">
              {customer?.name}
            </h1>
           <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>{customerId}</span>
              <span>•</span>
              <span className="font-semibold text-primary">
                {customer?.progress || 0}% Complete
              </span>
              <span>•</span>
              <span className="text-emerald-600 font-medium">
                {completed} done
              </span>
              <span>•</span>
              <span className="text-rose-500 font-medium">
                {pending} pending
              </span>
            </div>
          </div>
        </div>
       <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button className="inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-0 active:shadow-sm disabled:opacity-50 disabled:pointer-events-none disabled:transform-none border-2 bg-background hover:text-accent-foreground h-9 px-4 text-sm rounded-lg text-rose-500 border-rose-200 hover:bg-rose-50">
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
              className="lucide lucide-trash2 lucide-trash-2 h-4 w-4 mr-1.5"
              aria-hidden="true"
            >
              <path d="M10 11v6"></path>
              <path d="M14 11v6"></path>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
              <path d="M3 6h18"></path>
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>{" "}
            Delete
          </button>
          <button className="inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-0 active:shadow-sm disabled:opacity-50 disabled:pointer-events-none disabled:transform-none bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-9 px-4 text-sm rounded-lg text-white">
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
              className="lucide lucide-save h-4 w-4 mr-1.5"
              aria-hidden="true"
            >
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
              <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
            </svg>
            Save Changes
          </button>
        </div>
      </header>

      {/* main */}
      <div className="flex-1 overflow-auto bg-slate-50 overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto p-3 sm:p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-3 sm:p-6">
          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-300 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-4 sm:p-5 border-t-4 border-t-primary">
              <div className="flex flex-col items-center text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center text-3xl font-bold text-primary border-4 border-white shadow-md mb-3">
                  {customer?.name?.slice(0, 1).toUpperCase()}
                </div>
                <h2 className="text-xl font-bold">{customer?.name}</h2>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
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
                    className="lucide lucide-phone h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>{" "}
                  {customer?.phone}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-0.5">
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
                  {customer?.city}
                </div>
                <div className="w-full mt-4 p-3 bg-slate-50 rounded-xl">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-slate-500">Overall Progress</span>
                    <span className="text-primary">{customer?.progress}%</span>
                  </div>
                  <div className="relative w-full overflow-hidden rounded-full bg-slate-100 h-2">
                    <div className="h-full w-full flex-1 transition-all transform -translate-x-[94%] duration-700 ease-out rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-300 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-5">
              <h3 className="text-sm font-bold flex items-center gap-2 mb-4 text-slate-700 uppercase tracking-wide">
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
                  className="lucide lucide-user h-4 w-4 text-primary"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>{" "}
                Customer Details
              </h3>
              <div className="space-y-3">
                {customerDetails.map((field, index) => (
                  <div
                    key={field.name}
                    className="grid grid-cols-1 sm:grid-cols-[110px_1fr] items-center gap-2"
                  >
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide leading-tight">
                      {field.label}
                    </label>

                    <input
                      className="flex w-full rounded-xl border-2 border-gray-200 min-w-[160px] px-4 py-2 h-8 text-sm bg-slate-50/50 focus:bg-white focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10 transition-all"
                      placeholder={field.placeholder}
                      defaultValue={field.value}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
           <div className="flex overflow-x-auto no-scrollbar items-center gap-1 bg-slate-200 rounded-xl p-1 w-full sm:w-fit">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 min-w-[160px] min-w-[160px] px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab.key
                      ? "bg-white text-primary shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {tab.key === "forms" && (
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  )}
                </button>
              ))}
            </div>
            {activeTab === "progress" && <ProgressTracker />}
            {activeTab === "material" && <MaterialList />}
            {activeTab === "forms" && <FormsAndPdfs />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewCustomer;
