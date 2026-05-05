import React from "react";

const FormsAndPdfs = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-300 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 p-5">
            <div className="flex items-center gap-2 mb-4">
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
                className="lucide lucide-link2 lucide-link-2 h-5 w-5 text-primary"
                aria-hidden="true"
              >
                <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                <line x1="8" x2="16" y1="12" y2="12"></line>
              </svg>
              <h2 className="text-base font-bold text-slate-700">
                Customer Form Link
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Share this link with the customer to fill in their project
                details:
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-600 font-mono break-all">
                  https://6ad7eff4-8a86-42c3-952b-d15cf774e3e0-00-39bu2lnzlhl1y.picard.replit.dev/form/474f826f4ee184354e5230922d9ee788
                </div>
                <button className="shrink-0 h-9 w-9 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl flex items-center justify-center transition-colors">
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
                  </svg>
                </button>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/?text=Hi%20Anas%2C%20please%20fill%20in%20your%20solar%20project%20details%20using%20this%20link%3A%20https%3A%2F6ad7eff4-8a86-42c3-952b-d15cf774e3e0-00-39bu2lnzlhl1y.picard.replit.dev%2Fform%2F474f826f4ee184354e5230922d9ee788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
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
                    className="lucide lucide-share2 lucide-share-2 h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>{" "}
                  Share on WhatsApp
                </a>
                <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
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
                  </svg>{" "}
                  Regenerate Link
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-300 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="bg-emerald-600 px-5 py-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-white font-bold text-base">
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
                  Form Submitted
                </div>
                <p className="text-emerald-200 text-xs mt-0.5">
                  4/21/2026, 7:57:47 PM
                </p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-white text-emerald-700 text-xs font-bold px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">
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
                    className="lucide lucide-download h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>{" "}
                  Download PDF
                </button>
                <a
                  href="https://wa.me/?text=Work%20Completion%20Report%20for%20Anas%20is%20ready.%20Download%3A%20https%3A%2F%2F6ad7eff4-8a86-42c3-952b-d15cf774e3e0-00-39bu2lnzlhl1y.picard.replit.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-green-600 transition-colors"
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
                    className="lucide lucide-share2 lucide-share-2 h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>{" "}
                  Share
                </a>
              </div>
            </div>
            <div className="p-5 space-y-5">
              <div>
                <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
                  A — Customer Details
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Full Name
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        Farheen Deshmukh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Consumer Number
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        984974
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Mobile Number
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        8478647356
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Email ID
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        farheendeshmukh38@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Full Address
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        1st floor, Shera chowk Shera Tower Mehrun
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        PIN Code
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        425003
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Category
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
                  B — Project Details
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Sanction Number
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Sanction Date
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Installed Capacity
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        System Type
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Project Model
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Installation Date
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
                  C — Solar Module Details
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Module Make
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Module Wattage
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        No. of Modules
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Total Capacity (KWP)
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Product Warranty
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Performance Warranty
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
                  D — Inverter Details
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Inverter Make &amp; Model
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Inverter Capacity
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Year of Mfg.
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Inverter Type
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
                  E — Site &amp; Safety
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Earthing Resistance
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Lightning Arrester
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Structural Stability
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        ✓ Confirmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
                  F — Declarations
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-x h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Vendor Name
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        —
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Consumer Declaration
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        ✓ Agreed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
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
                      className="lucide lucide-circle-check h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 leading-tight">
                        Vendor Declaration
                      </p>
                      <p className="text-xs font-semibold text-slate-700 leading-tight">
                        ✓ Agreed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsAndPdfs;
