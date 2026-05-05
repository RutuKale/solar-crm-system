import { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AssignTask = ({ onClose, editTask }) => {
  const [form, setForm] = useState({
    worker_id: "",
    customer_id: "",
    due_date: "",
    task: "",
    note: "",
  });
  const [workers, setWorkers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchWorkers();
    fetchCustomers();
  }, []);

  useEffect(() => {
    if (editTask) {
      setForm(editTask);
    }
  }, [editTask]);

  const fetchWorkers = async () => {
    const res = await fetch(`${BASE_URL}/workers`);
    const data = await res.json();
    setWorkers(data.data || []);
  };

  const fetchCustomers = async () => {
    const res = await fetch(`${BASE_URL}/customers`);
    const data = await res.json();
    setCustomers(data.data || []);
  };

  const validate = () => {
    let newErrors = {};

    if (!form.worker_id) newErrors.worker_id = "Worker is required";
    if (!form.customer_id) newErrors.customer_id = "Customer is required";
    if (!form.due_date) newErrors.due_date = "Due date is required";
    if (!form.task) newErrors.task = "Task is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // remove error instantly
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const url = editTask
        ? `${BASE_URL}/assignments/${editTask.id}`
        : `${BASE_URL}/assignments/create`;

      const method = editTask ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert(editTask ? "Task updated" : "Task assigned");
      onClose(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] p-3 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="font-semibold text-lg">Assign Task to Worker</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg"
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
              className="lucide lucide-x w-4 h-4"
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Worker <span className="text-red-500">*</span>
            </label>
            <select
              name="worker_id"
              value={form.worker_id}
              onChange={handleChange}
              className={`w-full border ${errors.worker_id ? "border-red-500" : "border-gray-200"} rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white`}
            >
              <option value="">Select worker...</option>
              {workers.map((w) => (
                <option key={w.worker_id} value={w.worker_id}>
                  {w.name} — {w.role}
                </option>
              ))}
            </select>
            {errors.worker_id && (
              <p className="text-red-500 text-xs mt-1">{errors.worker_id}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Customer <span className="text-red-500">*</span>
            </label>
            <select
              name="customer_id"
              value={form.customer_id}
              onChange={handleChange}
              className={`w-full border ${errors.customer_id ? "border-red-500" : "border-gray-200"} rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white`}
            >
              <option value="">Select customer...</option>
              {customers.map((c) => (
                <option key={c.customer_id} value={c.customer_id}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.customer_id && (
              <p className="text-red-500 text-xs mt-1">{errors.customer_id}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Due Date
            </label>
            <input
              className={`w-full border ${errors.due_date ? "border-red-500" : "border-gray-200"} rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary`}
              type="date"
              name="due_date"
              value={form.due_date}
              onChange={handleChange}
            />
            {errors.due_date && (
              <p className="text-red-500 text-xs mt-1">{errors.due_date}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Task <span className="text-red-500">*</span>
            </label>
            <input
              name="task"
              value={form.task}
              onChange={handleChange}
              placeholder="Enter task description"
              className={`w-full border ${
                errors.task ? "border-red-500" : "border-gray-200"
              } rounded-lg px-3 py-2 text-sm`}
            />
            {errors.task && (
              <p className="text-red-500 text-xs mt-1">{errors.task}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Notes
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
              placeholder="Optional notes..."
              name="note"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-end p-4 sm:p-5 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-4 py-2 text-sm text-white bg-primary rounded-lg disabled:opacity-50"
            disabled={!form.worker_id || !form.customer_id}
          >
            {editTask ? "Update Task" : "Assign Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
