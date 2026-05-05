import React, { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/workers";

const AddWorker = ({ onClose, workerData, setWorkers }) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    mobile_no: "",
    email: "",
    note: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (workerData) {
      setForm({
        name: workerData.name || "",
        role: workerData.role || "",
        mobile_no: workerData.mobile_no || "",
        email: workerData.email || "",
        note: workerData.note || "",
      });
    }
  }, [workerData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // remove error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.role) newErrors.role = "Role is required";
    if (!form.mobile_no) newErrors.mobile_no = "Mobile number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const url = workerData
        ? `${BASE_URL}/update/${workerData.worker_id}`
        : `${BASE_URL}/create`;

      const method = workerData ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (workerData && setWorkers) {
        setWorkers((prev) =>
          prev.map((w) =>
            w.worker_id === workerData.worker_id ? { ...w, ...form } : w,
          ),
        );
      }

      alert(workerData ? "Worker updated" : "Worker added");
      onClose(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full border ${errors.name ? "border-red-500" : "border-gray-200"} rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary`}
              placeholder="Worker name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className={`w-full border ${errors.role ? "border-red-500" : "border-gray-200"} rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white`}
            >
              <option value="">Select Role</option>
              <option value="Technician">Technician</option>
              <option value="Electrician">Electrician</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Installer">Installer</option>
              <option value="Helper">Helper</option>
              <option value="Engineer">Engineer</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full border ${errors.mobile_no ? "border-red-500" : "border-gray-200"} rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary`}
              placeholder="Mobile number"
              name="mobile_no"
              value={form.mobile_no}
              onChange={handleChange}
            />
            {errors.mobile_no && (
              <p className="text-red-500 text-xs mt-1">{errors.mobile_no}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Email
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
              placeholder="Email address"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
            Notes
          </label>
          <input
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
            placeholder="Any notes..."
            name="note"
            value={form.note}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-4 py-2 text-sm bg-primary text-white rounded-lg"
          >
            {workerData ? "Update Worker" : "Save Worker"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWorker;
