import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AssignTask from "./AssignTask";
import AddWorker from "./AddWorker";
const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/workers";

const Workers = () => {
  const [openId, setOpenId] = useState(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [showAddWorker, setShowAddWorker] = useState(false);
  const [workers, setWorkers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [editWorker, setEditWorker] = useState(null);

  const stats = [
    {
      label: "Total Workers",
      value: workers.length,
      color: "bg-primary-lighter text-dark",
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
          className="lucide lucide-users w-5 h-5"
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
      label: "Active",
      value: workers.length,
      color: "bg-green-50 text-green-600",
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
          className="lucide lucide-user-check w-5 h-5"
          aria-hidden="true"
        >
          <path d="m16 11 2 2 4-4"></path>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      label: "Tasks Assigned",
      value: tasks.length,
      color: "bg-blue-50 text-blue-600",
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
          className="lucide lucide-clipboard-list w-5 h-5"
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
      label: "Completed",
      value: tasks.filter((t) => t.status === "Done").length,
      color: "bg-purple-50 text-purple-600",
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
          className="lucide lucide-circle-check w-5 h-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const workersRes = await fetch(BASE_URL);
      const workersData = await workersRes.json();

      setWorkers(workersData.data || []);

      const taskRes = await fetch("http://localhost:5000/api/assignments");

      if (!taskRes.ok) {
        console.error("Task API failed");
        setTasks([]);
        return;
      }

      const taskData = await taskRes.json();
      setTasks(taskData.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (worker_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await fetch(`${BASE_URL}/delete/${worker_id}`, {
        method: "DELETE",
      });

      setWorkers((prev) => prev.filter((w) => w.worker_id !== worker_id));

      setTasks((prev) => prev.filter((t) => t.worker_id !== worker_id));

      alert("Worker deleted");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm("Delete this task?");
    if (!confirmDelete) return;

    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments/${id}`, {
        method: "DELETE",
      });

      setTasks((prev) => prev.filter((t) => t.id !== id));

      alert("Task deleted");
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/assignments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...tasks.find((t) => t.id === id),
          status,
        }),
      });

      // ✅ update UI instantly
      setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Layout>
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Workers</h1>
                <p className="text-sm text-gray-500 mt-0.5">
                  Manage team members and assign tasks
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setIsAssignModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 cursor-pointer"
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
                    className="lucide lucide-clipboard-list w-4 h-4"
                    aria-hidden="true"
                  >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="M12 11h4"></path>
                    <path d="M12 16h4"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 16h.01"></path>
                  </svg>{" "}
                  Assign Task
                </button>
                <button
                  onClick={() => setShowAddWorker(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm text-white rounded-xl bg-primary"
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
                    className="lucide lucide-plus w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>{" "}
                  Add Worker
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className={`${item.color} p-2.5 rounded-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {showAddWorker && (
              <AddWorker
                workerData={editWorker}
                setWorkers={setWorkers} // 👈 ADD THIS
                onClose={(refresh) => {
                  setShowAddWorker(false);
                  setEditWorker(null);
                  if (refresh) fetchData();
                }}
              />
            )}

            {/* WORKERS LIST */}
            <div className="space-y-3">
              {workers.map((w) => {
                const workerTasks = tasks.filter(
                  (t) => t.worker_id === w.worker_id,
                );

                return (
                  <div
                    key={w.worker_id}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden"
                  >
                    {/* HEADER */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4">
                      <div className="w-10 h-10 rounded-full flex items-center bg-primary justify-center text-white font-bold text-sm shrink-0">
                        {w.initials}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">
                            {w.name}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {w.role}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mt-0.5 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
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
                              className="lucide lucide-phone w-3 h-3"
                              aria-hidden="true"
                            >
                              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                            </svg>{" "}
                            {w.mobile_no}
                          </span>
                          <span>{w.email}</span>
                          <span className="text-gray-400">
                            {w.tasks} task assigned
                          </span>
                        </div>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex items-center gap-1 sm:ml-auto shrink-0">
                        <button
                          onClick={() => {
                            setEditWorker(w);
                            setShowAddWorker(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700"
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
                            className="lucide lucide-pen-line w-4 h-4"
                            aria-hidden="true"
                          >
                            <path d="M13 21h8"></path>
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(w.worker_id)}
                          className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500"
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
                            className="lucide lucide-trash2 lucide-trash-2 w-4 h-4"
                            aria-hidden="true"
                          >
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>

                        {/* TOGGLE */}
                        <button
                          onClick={() =>
                            setOpenId(
                              openId === w.worker_id ? null : w.worker_id,
                            )
                          }
                          className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400"
                        >
                          {openId === w.worker_id ? (
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
                              className="lucide lucide-chevron-up w-4 h-4"
                              aria-hidden="true"
                            >
                              <path d="m18 15-6-6-6 6"></path>
                            </svg>
                          ) : (
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
                              className="lucide lucide-chevron-down w-4 h-4"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* ACCORDION BODY */}
                    {openId === w.worker_id && (
                      <div className="border-t border-gray-100 divide-y divide-gray-50">
                        {workerTasks.map((task) => (
                          <div
                            key={task.id}
                            className="px-4 py-3 flex items-center gap-3"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs text-gray-400 uppercase font-semibold">
                                  {task.task}
                                </span>
                                <span className="text-sm font-medium text-gray-800 truncate">
                                  {task.note}
                                </span>
                              </div>

                              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                <span className="font-medium text-gray-700">
                                  {task.customer_name}
                                </span>
                                <span className="flex items-center gap-1">
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
                                    className="lucide lucide-calendar w-3 h-3"
                                    aria-hidden="true"
                                  >
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect
                                      width="18"
                                      height="18"
                                      x="3"
                                      y="4"
                                      rx="2"
                                    ></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>{" "}
                                  Due: {task.due_date}
                                </span>
                              </div>
                            </div>

                            {/* STATUS */}
                            <div className="flex items-center gap-2">
                              <select
                                value={task.status}
                                onChange={(e) =>
                                  handleStatusChange(task.id, e.target.value)
                                }
                                className="text-xs border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:border-primary bg-white"
                              >
                                <option value="pending">Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="Done">Done</option>
                              </select>

                              <span
                                className={`text-xs px-2 py-0.5 rounded-full ${
                                  task.status === "Done"
                                    ? "bg-green-50 text-green-700"
                                    : "bg-yellow-50 text-yellow-700"
                                }`}
                              >
                                {task.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* TASK TABLE */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">
                  All Task Assignments
                </h2>
                <span className="text-xs text-gray-400">
                  1/2 done · 1 pending
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Worker
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Customer
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Task
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Due
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Status
                      </th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-50">
                    {tasks.map((t) => (
                      <tr key={t.id} className="hover:bg-gray-50/50">
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900">
                            {t.worker_name}
                          </div>
                          <div className="text-xs text-gray-400">{t.role}</div>
                        </td>

                        <td className="px-4 py-3 text-gray-700">
                          {t.customer_name}
                        </td>

                        <td className="px-4 py-3">
                          <div className="text-xs text-gray-400 uppercase font-semibold">
                            {t.task}
                          </div>
                          <div className="text-gray-800">{t.note}</div>
                        </td>

                        <td className="px-4 py-3 text-gray-600 text-xs">
                          {t.due_date}
                        </td>

                        <td className="px-4 py-3">
                          <span
                            className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full border w-fit ${
                              t.status === "Done"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-yellow-50 text-yellow-700 border-yellow-200"
                            }`}
                          >
                            {t.status === "Done" ? (
                              <>
                                {/* DONE ICON */}
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
                                  className="w-3 h-3"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                Done
                              </>
                            ) : (
                              <>
                                {/* PENDING ICON */}
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
                                  className="w-3 h-3"
                                >
                                  <path d="M12 6v6l4 2"></path>
                                  <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                                Pending
                              </>
                            )}
                          </span>
                        </td>

                        <td className="px-4 py-3">
                          <button
                            onClick={() => handleDeleteTask(t.id)}
                            className="p-1 hover:bg-red-50 rounded text-gray-400 hover:text-red-500"
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
                              className="lucide lucide-trash2 lucide-trash-2 w-3.5 h-3.5"
                              aria-hidden="true"
                            >
                              <path d="M10 11v6"></path>
                              <path d="M14 11v6"></path>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                              <path d="M3 6h18"></path>
                              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </Layout>
      {isAssignModalOpen && (
        <AssignTask
          onClose={(refresh) => {
            setIsAssignModalOpen(false);
            if (refresh) fetchData();
          }}
        />
      )}
    </>
  );
};

export default Workers;
