import React from "react";

const ProgressTracker = () => {
  return (
    <>
      <div className="rounded-2xl border border-gray-300 bg-card text-card-foreground hover:shadow-md transition-shadow duration-300 overflow-hidden shadow-sm">
        <div className="px-5 py-4 bg-slate-700 flex items-center justify-between">
          <h2 className="text-base font-bold text-white tracking-wide">
            Solar Project Progress Tracker
          </h2>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
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
                className="lucide lucide-circle-check h-3.5 w-3.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>{" "}
              4 Completed
            </span>
            <span className="flex items-center gap-1.5 text-rose-300 font-semibold">
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
                className="lucide lucide-circle-x h-3.5 w-3.5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg>{" "}
              60 Pending
            </span>
          </div>
        </div>
        <div className="overflow-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 border-b-2 border-slate-200">
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-10">
                  #
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-52">
                  Task Description
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Details / Notes
                </th>
                <th className="text-center px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-24">
                  Status
                </th>
                <th className="text-center px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-24">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-primary/8 border-y border-primary/20">
                <td colspan="5" className="px-4 py-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-primary uppercase tracking-widest">
                      REGISTRATION PMSY
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                      4/9
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-slate-100 transition-colors group bg-emerald-50/30">
                <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">
                  1
                </td>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2 cursor-pointer">
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
                      className="lucide lucide-circle-check h-4 w-4 text-emerald-500 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="font-medium text-xs leading-tight text-slate-400 line-through decoration-slate-300">
                      Registration on PMSY by Mobile No
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <input
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value="8374832896"
                  ></input>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
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
                    Done
                  </span>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <button className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600">
                    Undo
                  </button>
                </td>
              </tr>
              <tr className="border-b border-slate-100 transition-colors group bg-emerald-50/30">
                <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">
                  2
                </td>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2 cursor-pointer">
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
                      className="lucide lucide-circle-check h-4 w-4 text-emerald-500 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="font-medium text-xs leading-tight text-slate-400 line-through decoration-slate-300">
                      Login PMSY with Mobile No
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <input
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value="3847p34269p1864"
                  ></input>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
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
                    Done
                  </span>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <button className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600">
                    Undo
                  </button>
                </td>
              </tr>
              <tr className="border-b border-slate-100 transition-colors group bg-emerald-50/30">
                <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">
                  3
                </td>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2 cursor-pointer">
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
                      className="lucide lucide-circle-check h-4 w-4 text-emerald-500 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="font-medium text-xs leading-tight text-slate-400 line-through decoration-slate-300">
                      Solar PV Application Mahadiscom
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <input
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value="586958699"
                  ></input>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
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
                    Done
                  </span>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <button className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600">
                    Undo
                  </button>
                </td>
              </tr>
              <tr className="border-b border-slate-100 transition-colors group bg-emerald-50/30">
                <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">
                  4
                </td>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2 cursor-pointer">
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
                      className="lucide lucide-circle-check h-4 w-4 text-emerald-500 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span className="font-medium text-xs leading-tight text-slate-400 line-through decoration-slate-300">
                      Application Number
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <input
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value="8998"
                  ></input>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
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
                    Done
                  </span>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <button className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600">
                    Undo
                  </button>
                </td>
              </tr>
              <tr className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50">
                <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">
                  5
                </td>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <div className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"></div>
                    <span className="font-medium text-xs leading-tight text-slate-700">
                      Consumer Fees Receipt
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <input
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full">
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td className="px-4 py-2.5 text-center">
                  <button className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white">
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50">
                <td className="px-4 py-2.5 text-xs text-slate-400 font-medium">
                  6
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Consumer Application Reference Number (PMSY)
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  7
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      NPC Registration PMSY
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  8
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Technical Feasibility / Section Letter
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  9
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Purchase Stamp Paper of 100 R.S
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:374:32"
                data-component-name="tr"
                className="bg-primary/8 border-y border-primary/20"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:375:34"
                  data-component-name="td"
                  colspan="5"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:376:36"
                    data-component-name="div"
                    className="flex items-center justify-between"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:377:38"
                      data-component-name="span"
                      className="text-xs font-extrabold text-primary uppercase tracking-widest"
                    >
                      SOLAR APPLICATION / RTS
                    </span>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:378:38"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      0/9
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  1
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Solar Application - Application No
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  2
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Application Form Annexure 2
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  3
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Payment Application Fees
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  4
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Agency Selection
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  5
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Upload Commissioning Document
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  6
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Performa A
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  7
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Annexure I
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  8
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Site Photo
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  9
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Net Meter Connection Agreement
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:374:32"
                data-component-name="tr"
                className="bg-primary/8 border-y border-primary/20"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:375:34"
                  data-component-name="td"
                  colspan="5"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:376:36"
                    data-component-name="div"
                    className="flex items-center justify-between"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:377:38"
                      data-component-name="span"
                      className="text-xs font-extrabold text-primary uppercase tracking-widest"
                    >
                      PMSY CONSUMER LOGIN
                    </span>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:378:38"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      0/10
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  1
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Consumer Registration
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  ></input>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  2
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Application Submission
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  3
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Feasibility Waived-Off
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  4
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Vendor Selection
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  5
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Work Start
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  6
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Solar Installation Details
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  7
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Inspection
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  8
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Project Commissioning
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  9
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Subsidy Request
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  10
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Subsidy Disbursal
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:374:32"
                data-component-name="tr"
                className="bg-primary/8 border-y border-primary/20"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:375:34"
                  data-component-name="td"
                  colspan="5"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:376:36"
                    data-component-name="div"
                    className="flex items-center justify-between"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:377:38"
                      data-component-name="span"
                      className="text-xs font-extrabold text-primary uppercase tracking-widest"
                    >
                      VENDOR LOGIN ACTION
                    </span>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:378:38"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      0/1
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  1
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Submit Solar Rooftop Installation Details
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:374:32"
                data-component-name="tr"
                className="bg-primary/8 border-y border-primary/20"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:375:34"
                  data-component-name="td"
                  colspan="5"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:376:36"
                    data-component-name="div"
                    className="flex items-center justify-between"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:377:38"
                      data-component-name="span"
                      className="text-xs font-extrabold text-primary uppercase tracking-widest"
                    >
                      VENDOR DETAILS
                    </span>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:378:38"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      0/22
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  1
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Inverter Details
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  2
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Inverter &amp; PV Module Details
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  3
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Plant Photo
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  4
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Protection Checklist
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  5
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Final Submission
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  6
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Start Work (Document Inward)
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  7
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Application Form (Annexure 2)
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  8
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Consumer Information
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  9
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Feasibility / Section Letter Copy
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  10
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Payment Slip for Solar Application
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  11
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Net Meter Agreement (Stamp Annexure) 500KB
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  12
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Test Report
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  13
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Data Sheet of Panel
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  14
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Data Sheet of Inverter
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  15
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      B.I.S. Certificate of Panel
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  16
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      B.I.S. Certificate of Inverter
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  17
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      DCR Certificate of Panel
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  18
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Panel SR No
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  19
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Inverter Warranty Card
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  20
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Single Line Diagram (SLD)
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  21
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Contact Information of Customer and Installer
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  22
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Self Declaration Certificate
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:374:32"
                data-component-name="tr"
                className="bg-primary/8 border-y border-primary/20"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:375:34"
                  data-component-name="td"
                  colspan="5"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:376:36"
                    data-component-name="div"
                    className="flex items-center justify-between"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:377:38"
                      data-component-name="span"
                      className="text-xs font-extrabold text-primary uppercase tracking-widest"
                    >
                      DOCUMENTATION FOR ROOF TOP (RTS)
                    </span>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:378:38"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      0/8
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  1
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Work Completion Report, Islanding Guarantee Certificate
                      &amp; Aadhaar Card of Consumer
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  2
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Performa A (Download from MSEDL) with Sign – Customer,
                      Agency, MSEDL
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  3
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Annexure I (Download from MSEDL) with Sign of Customer
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  4
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Declaration for DCR
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  5
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Net Agreement Bond
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  6
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Data Sheet of PV Modules and Inverter
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  7
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Photograph of Installed PV System with GPS
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  8
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Work Completion Certificate
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:374:32"
                data-component-name="tr"
                className="bg-primary/8 border-y border-primary/20"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:375:34"
                  data-component-name="td"
                  colspan="5"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:376:36"
                    data-component-name="div"
                    className="flex items-center justify-between"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:377:38"
                      data-component-name="span"
                      className="text-xs font-extrabold text-primary uppercase tracking-widest"
                    >
                      DOCUMENT TO BE UPLOADED
                    </span>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:378:38"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      0/4
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  1
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Annexure I with Signature (Up to 300KB)
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  2
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Performa A with Signature (Up to 300KB)
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  3
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Site Photo with GPS (300KB)
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  4
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Upload Model Agreement
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:374:32"
                data-component-name="tr"
                className="bg-primary/8 border-y border-primary/20"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:375:34"
                  data-component-name="td"
                  colspan="5"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:376:36"
                    data-component-name="div"
                    className="flex items-center justify-between"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:377:38"
                      data-component-name="span"
                      className="text-xs font-extrabold text-primary uppercase tracking-widest"
                    >
                      UPLOAD DOCUMENT FOR SUBSIDY
                    </span>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:378:38"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      0/1
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:386:34"
                data-component-name="tr"
                className="border-b border-slate-100 transition-colors group bg-white hover:bg-slate-50"
              >
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:390:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-xs text-slate-400 font-medium"
                >
                  1
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:391:36"
                  data-component-name="td"
                  className="px-4 py-2.5"
                >
                  <div
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:392:38"
                    data-component-name="div"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:399:42"
                      data-component-name="div"
                      className="h-4 w-4 rounded-full border-2 border-slate-300 group-hover:border-primary shrink-0 transition-colors"
                    ></div>
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:401:40"
                      data-component-name="span"
                      className="font-medium text-xs leading-tight text-slate-700"
                    >
                      Upload Bank Details
                    </span>
                  </div>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:406:36"
                  data-component-name="td"
                  className="px-3 py-2"
                >
                  <input
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:407:38"
                    data-component-name="input"
                    placeholder="Add details..."
                    className="w-full min-w-[160px] text-xs border border-slate-200 rounded-md px-2.5 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300 transition-all"
                    type="text"
                    value=""
                  />
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:417:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <span
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:423:40"
                    data-component-name="span"
                    className="inline-flex items-center gap-1 bg-rose-50 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full"
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
                      className="lucide lucide-circle-x h-3 w-3"
                      aria-hidden="true"
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:424:42"
                      data-component-name="XCircle"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>{" "}
                    Pending
                  </span>
                </td>
                <td
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:428:36"
                  data-component-name="td"
                  className="px-4 py-2.5 text-center"
                >
                  <button
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:429:38"
                    data-component-name="button"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  >
                    Mark Done
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProgressTracker;
