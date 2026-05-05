import React, { useState } from "react";
import Layout from "../../components/Layout";
import AddNewCustomerModal from "./AddNewCustomerModal";
import { Link } from "react-router-dom";

const customersData = [
  {
    id: 2,
    name: "Anas",
    phone: "9812345678",
    city: "Nashik",
    status: "Survey Done",
    load: "5 kW Load",
    progress: 6,
  },
  {
    id: 9,
    name: "Farheen",
    phone: "123456789",
    city: "Nashik",
    status: "Survey Done",
    load: "Load not set",
    progress: 2,
  },
  {
    id: 19,
    name: "Test",
    phone: "+919309973905",
    city: "Jalgaon, MH",
    status: "Survey Pending",
    load: "Load not set",
    progress: 0,
  },
  {
    id: 20,
    name: "umar shaikh",
    phone: "67567343988",
    city: "City not set",
    status: "Survey Pending",
    load: "Load not set",
    progress: 0,
  },
];

const Customers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Layout>
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="p-4 sm:p-4 sm:p-5 lg:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 lg:space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-display font-bold text-foreground">
                  Customers
                </h1>
                <p className="text-gray-500 mt-1">
                  Manage all your solar installation clients in one place.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <div className="relative w-full sm:w-72">
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
                    className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                  <input
                    className="flex h-11 w-full rounded-xl border-2 border-gray-200 bg-card px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 pl-10 shadow-sm"
                    placeholder="Search customers..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  ></input>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-0 active:shadow-sm disabled:opacity-50 disabled:pointer-events-none disabled:transform-none bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-11 px-5 py-2 gap-2 text-white"
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
                    className="lucide lucide-plus h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>{" "}
                  Add New
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:p-5 lg:p-6">
              {customersData.map((customer) => (
                <div key={customer.id}>
                  <Link to={`/customers/${customer.id}`}>
                    <div className="rounded-2xl border border-gray-100 bg-card shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-5 lg:p-4 sm:p-5 lg:p-6 cursor-pointer hover:border-primary/30 group h-full flex flex-col justify-between">
                      {/* TOP */}
                      <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                          <div className="flex gap-3 sm:gap-4 items-center">
                            {/* Avatar */}
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">
                              {customer.name.slice(0, 1).toUpperCase()}
                            </div>

                            {/* Name + Status */}
                            <div>
                              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                                {customer.name}
                              </h3>

                              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wider bg-primary/10 text-primary mt-1 text-[10px]">
                                {customer.status}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* DETAILS */}
                        <div className="space-y-2 mt-6">
                          {/* PHONE */}
                          <div className="flex items-center text-sm text-slate-600 break-words">
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
                              className="lucide lucide-phone h-4 w-4 mr-3 text-slate-400"
                              aria-hidden="true"
                            >
                              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                            </svg>
                            {customer.phone}
                          </div>

                          {/* LOCATION */}
                          <div className="flex items-center text-sm text-slate-600">
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
                              className="lucide lucide-map-pin h-4 w-4 mr-3 text-slate-400"
                              aria-hidden="true"
                            >
                              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            {customer.city}
                          </div>

                          {/* LOAD */}
                          <div className="flex items-center text-sm text-slate-600">
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
                              className="lucide lucide-activity h-4 w-4 mr-3 text-slate-400"
                              aria-hidden="true"
                            >
                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                            {customer.load}
                          </div>
                        </div>
                      </div>

                      {/* PROGRESS */}
                      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100/50">
                        <div className="flex justify-between text-xs font-semibold mb-2">
                          <span className="text-slate-500 uppercase tracking-wider">
                            Project Progress
                          </span>
                          <span className="text-primary">
                            {customer.progress}%
                          </span>
                        </div>

                        <div className="relative w-full overflow-hidden rounded-full bg-slate-100 h-2">
                          <div
                            className="h-full rounded-full bg-primary transition-all duration-700"
                            style={{ width: `${customer.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
      {isModalOpen && (
        <AddNewCustomerModal onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default Customers;
