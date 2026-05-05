import React from "react";

const MaterialList = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-300 bg-card text-card-foreground hover:shadow-md transition-shadow duration-300 overflow-hidden shadow-sm">
          <div className="px-5 py-4 bg-slate-700 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white tracking-wide">
                Solar Material List
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Fill in Type, Size, Quantity and Rate for each item
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold bg-primary/30 text-emerald-300 px-3 py-1 rounded-full">
                Total: ₹93,840
              </span>
              <button className="inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-0 active:shadow-sm disabled:opacity-50 disabled:pointer-events-none disabled:transform-none shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-9 px-4 text-sm rounded-lg bg-primary hover:bg-primary/90 text-white">
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
                  className="lucide lucide-save h-3.5 w-3.5 mr-1.5"
                  aria-hidden="true"
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:472:24"
                  data-component-name="Save"
                >
                  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
                  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
                  <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
                </svg>
                Save
              </button>
            </div>
          </div>
          <div
            data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:483:20"
            data-component-name="div"
            className="overflow-auto"
          >
            <table
              data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:484:22"
              data-component-name="table"
              className="w-full border-collapse text-sm"
            >
              <thead
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:485:24"
                data-component-name="thead"
              >
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:486:26"
                  data-component-name="tr"
                  className="bg-slate-100 border-b-2 border-slate-200"
                >
                  <th
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:487:28"
                    data-component-name="th"
                    className="text-left px-3 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-10"
                  >
                    S.N
                  </th>
                  <th
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:488:28"
                    data-component-name="th"
                    className="text-left px-3 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider"
                  >
                    Item
                  </th>
                  <th
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:489:28"
                    data-component-name="th"
                    className="text-left px-3 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-28"
                  >
                    Type
                  </th>
                  <th
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:490:28"
                    data-component-name="th"
                    className="text-left px-3 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-28"
                  >
                    Size
                  </th>
                  <th
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:491:28"
                    data-component-name="th"
                    className="text-left px-3 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-24"
                  >
                    Qty
                  </th>
                  <th
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:492:28"
                    data-component-name="th"
                    className="text-left px-3 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-24"
                  >
                    Rate (₹)
                  </th>
                  <th
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:493:28"
                    data-component-name="th"
                    className="text-right px-3 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-28"
                  >
                    Total (₹)
                  </th>
                </tr>
              </thead>
              <tbody
                data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:496:24"
                data-component-name="tbody"
              >
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:506:32"
                  data-component-name="tr"
                  className="bg-primary/8 border-y border-primary/20"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:507:34"
                    data-component-name="td"
                    colspan="7"
                    className="px-4 py-2.5"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:508:36"
                      data-component-name="div"
                      className="flex items-center justify-between"
                    >
                      <span
                        data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:509:38"
                        data-component-name="span"
                        className="text-xs font-extrabold text-primary uppercase tracking-widest"
                      >
                        A - Structure
                      </span>
                      <span
                        data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:511:40"
                        data-component-name="span"
                        className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full"
                      >
                        ₹93,840
                      </span>
                    </div>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    1
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Box pipe
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value="VERTICAl "
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value="20cm "
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value="290"
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value="60"
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-primary"
                    >
                      ₹17,400
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    2
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Box pipe
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value="jhf"
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value="3847"
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value="780"
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value="98"
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-primary"
                    >
                      ₹76,440
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    3
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Box pipe
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    4
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Box pipe
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    5
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Base plate
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    6
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Base plate for L A
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    7
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Concrete khile
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    8
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Fastner
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    9
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Self tab screw
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    10
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Welding Rod
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    11
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Grinder cutting wheel
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    12
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Grinder cutting wheel
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    13
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Chemical for foundation / Silicon tube
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    14
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Freight / Transport
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:506:32"
                  data-component-name="tr"
                  className="bg-primary/8 border-y border-primary/20"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:507:34"
                    data-component-name="td"
                    colspan="7"
                    className="px-4 py-2.5"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:508:36"
                      data-component-name="div"
                      className="flex items-center justify-between"
                    >
                      <span
                        data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:509:38"
                        data-component-name="span"
                        className="text-xs font-extrabold text-primary uppercase tracking-widest"
                      >
                        B - Panel
                      </span>
                    </div>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    1
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    U / J huk with nuts and wiser
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    2
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Middle clamp
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    3
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    End clamp
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    4
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    M8 spring nut
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    5
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Cable tie
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    6
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Mc4 connector
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    7
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    DC cable
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    8
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    DCDB
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    9
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Freight / Transport
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:506:32"
                  data-component-name="tr"
                  className="bg-primary/8 border-y border-primary/20"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:507:34"
                    data-component-name="td"
                    colspan="7"
                    className="px-4 py-2.5"
                  >
                    <div
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:508:36"
                      data-component-name="div"
                      className="flex items-center justify-between"
                    >
                      <span
                        data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:509:38"
                        data-component-name="span"
                        className="text-xs font-extrabold text-primary uppercase tracking-widest"
                      >
                        C - AC
                      </span>
                    </div>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    1
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    AC Cable
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    2
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    AC Cable for earthing / LA Cable / GI Strip
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    3
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Shedel
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    4
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    PVC pipe
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    5
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    PVC bend
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    6
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    L bo
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    7
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    PVC T
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    8
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Insulator
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    9
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Earthing Rod
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    10
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    LA
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    11
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Earthing compound
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    12
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    35/8 screw
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    13
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    SS bolt
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    14
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    EHI Lugs
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    15
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Flexible pipe
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    16
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    ACDB / MCB
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    17
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    I Lander switch
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    18
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Invertor / Micro Invertor
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    19
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Round insulator
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    20
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Walkway
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    21
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Gen. meter
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    22
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Meter Fees
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:525:36"
                  data-component-name="tr"
                  className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:526:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-500 font-medium"
                  >
                    23
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:527:38"
                    data-component-name="td"
                    className="px-3 py-2 text-xs text-slate-700 font-medium"
                  >
                    Board / Plywood
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:528:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:529:40"
                      data-component-name="input"
                      placeholder="Type..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:537:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:538:40"
                      data-component-name="input"
                      placeholder="Size..."
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:546:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:547:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:555:38"
                    data-component-name="td"
                    className="px-2 py-1.5"
                  >
                    <input
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:556:40"
                      data-component-name="input"
                      placeholder="0"
                      className="w-full text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-slate-300"
                      type="text"
                      value=""
                    />
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:564:38"
                    data-component-name="td"
                    className="px-3 py-2 text-right"
                  >
                    <span
                      data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:565:40"
                      data-component-name="span"
                      className="text-xs font-bold text-slate-300"
                    >
                      —
                    </span>
                  </td>
                </tr>
                <tr
                  data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:577:28"
                  data-component-name="tr"
                  className="bg-primary/10 border-t-2 border-primary/30"
                >
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:578:30"
                    data-component-name="td"
                    colspan="6"
                    className="px-4 py-3 text-sm font-bold text-primary text-right uppercase tracking-wide"
                  >
                    Grand Total
                  </td>
                  <td
                    data-replit-metadata="artifacts/solar-crm/src/pages/profile.tsx:581:30"
                    data-component-name="td"
                    className="px-3 py-3 text-right text-sm font-bold text-primary"
                  >
                    ₹93,840
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaterialList;
