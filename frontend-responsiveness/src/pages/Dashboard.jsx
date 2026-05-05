import React from "react";
import Layout from "../components/Layout";

const customers = [
  {
    id: 20,
    name: "umar shaikh",
    city: "No city",
    phone: "67567343988",
    status: "Survey Pending",
    progress: 0,
  },
  {
    id: 19,
    name: "Test",
    city: "Jalgaon, MH",
    phone: "+919309973905",
    status: "Survey Pending",
    progress: 0,
  },
  {
    id: 9,
    name: "Farheen",
    city: "Nashik",
    phone: "123456789",
    status: "Survey Done",
    progress: 2,
  },
  {
    id: 2,
    name: "Anas",
    city: "Nashik",
    phone: "9812345678",
    status: "Survey Done",
    progress: 5,
  },
];

const colorMap = {
  blue: "bg-blue-50 text-blue-500",
  amber: "bg-amber-50 text-amber-500",
  emerald: "bg-emerald-50 text-emerald-500",
  rose: "bg-rose-50 text-rose-500",
};

const stats = [
  {
    title: "Total Customers",
    value: 4,
    color: "blue",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <circle cx="9" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    title: "Running Projects",
    value: 2,
    color: "amber",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
      </svg>
    ),
  },
  {
    title: "Completed Projects",
    value: 0,
    color: "emerald",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
  {
    title: "Inspection Pending",
    value: 0,
    color: "rose",
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
        className="lucide lucide-circle-alert h-6 w-6 text-rose-500"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" x2="12" y1="8" y2="12"></line>
        <line x1="12" x2="12.01" y1="16" y2="16"></line>
      </svg>
    ),
  },
];

const Dashboard = () => {
  return (
    <Layout>
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="p-4 sm:p-6 lg:p-8 w-full space-y-6 lg:space-y-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-primary">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-1 text-base">
              Welcome back. Here's what's happening with your solar projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="rounded-2xl border border-gray-50 bg-card shadow-sm hover:shadow-md p-4 sm:p-6 lg:p-8 flex items-center gap-3 sm:gap-4 hover:-translate-y-1 transition-transform duration-300">
                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center ${colorMap[stat.color]}`}
                  >
                    <span className={`text-${stat.color}-500 font-bold`}>
                      {stat.icon}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-xl font-display font-bold">
                Recent Customers
              </h2>
              <a
                href="/customers"
                className="text-sm font-semibold text-primary flex items-center hover:underline"
              >
                View All{" "}
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
                  className="lucide lucide-chevron-right h-4 w-4 ml-1"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </div>
            <div className="rounded-2xl border bg-card text-card-foreground hover:shadow-md transition-shadow duration-300 overflow-hidden border-gray-100 shadow-md">
              <div className="divide-y divide-border/50">
                {customers.map((customer) => (
                  <a key={customer.id} href={`/customers/${customer.id}`}>
                    <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                      {/* LEFT */}
                      <div className="flex items-center gap-4">
                        <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base">
                          {customer.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                            {customer.name}
                          </h4>
                          <p className="text-sm text-gray-500 break-words">
                            {customer.city} • {customer.phone}
                          </p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
                        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wider bg-primary/10 text-primary text-xs">
                          {customer.status}
                        </div>

                        <div className="w-full sm:w-40 flex items-center gap-3">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1 font-medium">
                              <span className="text-slate-500">Progress</span>
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

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-300 group-hover:text-primary transition-colors shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Dashboard;
