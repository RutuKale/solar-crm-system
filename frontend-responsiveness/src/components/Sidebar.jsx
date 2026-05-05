import React from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    path: "/",
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
        className="lucide lucide-layout-dashboard h-4 w-4 shrink-0"
        aria-hidden="true"
      >
        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
      </svg>
    ),
  },
  {
    name: "Customers",
    path: "/customers",
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
        className="lucide lucide-users h-4 w-4 shrink-0"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <circle cx="9" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    name: "Customer Form",
    path: "/customer-forms",
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
        className="lucide lucide-file-text h-4 w-4 shrink-0"
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
  {
    name: "Workers",
    path: "/workers",
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
        className="lucide lucide-hard-hat h-4 w-4 shrink-0"
        aria-hidden="true"
      >
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
        <path d="M14 6a6 6 0 0 1 6 6v3"></path>
        <path d="M4 15v-3a6 6 0 0 1 6-6"></path>
        <rect x="2" y="15" width="20" height="4" rx="1"></rect>
      </svg>
    ),
  },
  {
    name: "Inventory",
    path: "/inventory",
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
        className="lucide lucide-package h-4 w-4 shrink-0"
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
    name: "Settings",
    path: "/settings",
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
        className="lucide lucide-settings h-4 w-4 shrink-0"
        aria-hidden="true"
      >
        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
];

const activityData = [
  { id: 20, name: "umar shaikh", status: "Survey Pending" },
  { id: 19, name: "Test", status: "Survey Pending" },
  { id: 9, name: "Farheen", status: "Survey Done" },
  { id: 2, name: "Anas", status: "Survey Done" },
];

const progressData = [
  { id: 2, name: "Anas", progress: 5, status: "Survey Done" },
  { id: 9, name: "Farheen", progress: 2, status: "Survey Done" },
  { id: 19, name: "Test", progress: 0, status: "Survey Pending" },
  { id: 20, name: "umar shaikh", progress: 0, status: "Survey Pending" },
];

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  return (
    <div className="w-3xs bg-white h-screen flex flex-col">
      <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-xl leading-none text-primary">
            Ampi
          </span>
          <span className="font-display font-bold text-xl leading-none text-black">
            Solar
          </span>
          <span className="ml-1 text-[9px] font-semibold uppercase tracking-widest text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">
            CRM
          </span>
        </div>

        {/* Close Button (mobile only) */}
        <button
          onClick={onClose}
          className="lg:hidden text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      <div className="px-4 pt-4 pb-2">
        <button className="w-full bg-primary flex items-center justify-center gap-2 text-white font-semibold text-sm py-2.5 rounded-xl transition-all active:scale-95 hover:opacity-90">
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
            className="lucide lucide-plus h-4 w-4"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Add Customer
        </button>
      </div>

      <nav className="px-3 pt-2 space-y-0.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <a key={item.path} href={item.path}>
              <div
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${isActive ? "bg-primary-light text-primary" : "text-gray-700 hover:bg-gray-50 hover:text-black"}`}
              >
                <div
                  className={`${isActive ? "text-primary" : "text-gray-400"}`}
                >
                  {item.icon}
                </div>
                {item.name}
                {isActive && (
                  <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></div>
                )}
              </div>
            </a>
          );
        })}
      </nav>

      <div className="mx-4 mt-4 mb-3 border-t border-gray-100"></div>

      <div className="px-4 flex-1 overflow-hidden flex flex-col min-h-0">
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
            className="lucide lucide-trending-up h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path d="M16 7h6v6"></path>
            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
          </svg>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Customer Progress
          </p>
        </div>
        <div className="space-y-1.5 overflow-y-auto flex-1 pr-1">
          {progressData.map((item) => (
            <a key={item.id} href={`/customers/${item.id}`}>
              <div className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                  {item.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-black truncate group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-bold ml-1 shrink-0 text-gray-500">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                    {item.status}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-4 my-3 border-t border-gray-100"></div>

      <div className="px-4 pb-4 max-h-[200px]">
        <div className="flex items-center gap-2 mb-2">
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
            className="lucide lucide-circle-check h-3.5 w-3.5 text-gray-400"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Activity Feed
          </p>
        </div>
        <div className="space-y-1 overflow-y-auto mx-h-[155px]">
          {activityData.map((item) => (
            <a key={item.id} href={`/customers/${item.id}`}>
              <div className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors">
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
                  className="lucide lucide-circle h-2 w-2 mt-1 shrink-0 fill-gray-300 text-gray-300"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>

                <div className="min-w-0">
                  <span className="text-xs font-semibold text-black group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    {" "}
                    — {item.status}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
