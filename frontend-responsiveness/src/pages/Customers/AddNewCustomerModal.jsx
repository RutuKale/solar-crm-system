import React, { useState } from "react";

const AddNewCustomerModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData); // later API call here
  onClose();
};
  return (
    <div>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
        <div className="rounded-2xl bg-white border border-gray-500 bg-card text-card-gray-500 hover:shadow-md transition-shadow w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
          <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-2xl font-display font-bold mb-6">
              Add New Customer
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="flex h-11 w-full rounded-xl border-2 border-gray-500 bg-card px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                  required=""
                ></input>
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="flex h-11 w-full rounded-xl border-2 border-gray-500 bg-card px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                  required=""
                ></input>
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block">
                  City
                </label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Pune, MH"
                  className="flex h-11 w-full rounded-xl border-2 border-gray-500 bg-card px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                ></input>
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-3">
              <button type="button" onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-0 active:shadow-sm disabled:opacity-50 disabled:pointer-events-none disabled:transform-none hover:bg-gray-500 text-gray-500 h-11 px-5 py-2 hover:text-white"
                type="button"
              >
                Cancel
              </button>
              <button
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-0 active:shadow-sm disabled:opacity-50 disabled:pointer-events-none disabled:transform-none bg-primary text-primary shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 h-11 px-5 py-2 text-white"
                type="submit"
              >
                Create Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCustomerModal;
