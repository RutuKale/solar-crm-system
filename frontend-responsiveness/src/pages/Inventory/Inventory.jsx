import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import AddInventory from "./AddInventory";
const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/items";

const Inventory = () => {
  const [showAddInventory, setShowAddInventory] = useState(false);
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch(`${BASE_URL}`);
      const data = await res.json();

      if (data.success) {
        setItems(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateLocal = (updatedItem) => {
    setItems((prev) =>
      prev.map((item) =>
        item.item_id === updatedItem.item_id
          ? { ...item, ...updatedItem }
          : item
      )
    );
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Delete failed: ID is missing");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Delete failed");
      }

      // ✅ FIX: use item_id instead of _id
      setItems((prev) => prev.filter((item) => item.item_id !== id));

    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  const totalItems = items.length;

  const lowStock = items.filter((i) => i.qty_stock <= i.min_stock_level).length;

  const categories = new Set(items.map((i) => i.category)).size;

  const totalValue = items.reduce(
    (sum, i) => sum + i.qty_stock * i.per_unit_rate,
    0,
  );

  return (
    <Layout>
      <main className="flex-1 overflow-auto bg-gray-50 overflow-x-hidden">
       <div className="p-3 sm:p-6 space-y-6 max-w-6xl mx-auto">
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-xl sm:text-2xl font-bold text-gray-900">Inventory</h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage solar materials and stock levels
              </p>
            </div>
            <button
              onClick={() => setShowAddInventory((prev) => !prev)}
className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary px-4 py-2 text-xs sm:text-sm text-white rounded-xl"
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
              Add Item
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3">
              <div className="bg-teal-50 text-teal-600 p-2.5 rounded-lg">
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
                  className="lucide lucide-package w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{totalItems}</p>
                <p className="text-xs text-gray-500">Total Items</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3">
              <div className="bg-red-50 text-red-600 p-2.5 rounded-lg">
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
                  className="lucide lucide-triangle-alert w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{lowStock}</p>
                <p className="text-xs text-gray-500">Low Stock</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3">
              <div className="bg-blue-50 text-blue-600 p-2.5 rounded-lg">
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
                  className="lucide lucide-chart-column w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{categories}</p>
                <p className="text-xs text-gray-500">Categories</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3">
              <div className="bg-purple-50 text-purple-600 p-2.5 rounded-lg">
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
                  className="lucide lucide-indian-rupee w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M6 3h12"></path>
                  <path d="M6 8h12"></path>
                  <path d="m6 13 8.5 8"></path>
                  <path d="M6 13h3"></path>
                  <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                </svg>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  ₹{totalValue.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-gray-500">Total Value</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
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
              className="lucide lucide-triangle-alert w-5 h-5 text-red-500 shrink-0"
              aria-hidden="true"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <div className="flex-1">
              <p className="font-semibold text-red-700 text-xs sm:text-xs sm:text-sm">
                Low Stock Alert
              </p>
              <p className="text-xs text-red-600 mt-0.5">Wire (100 meters)</p>
            </div>
           <button className="text-xs text-red-600 font-semibold underline self-start sm:self-auto shrink-0">
              View All
            </button>
          </div>
          {showAddInventory && (
            <AddInventory
              onClose={() => {
                setShowAddInventory(false);
                setEditingItem(null);
              }}
              refreshItems={fetchItems}
              editData={editingItem}
              updateLocal={handleUpdateLocal}
            />
          )}
         <div className="flex flex-col sm:flex-row sm:items-center gap-3">
           <div className="relative w-full sm:flex-1">
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
                className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              <input
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#04ABA5]"
                placeholder="Search items..."
                value=""
              />
            </div>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#04ABA5] bg-white">
              <option value="All">All Categories</option>
              <option>Cable &amp; Wire</option>
              <option>Inverter</option>
              <option>Solar Panel</option>
            </select>
            <button className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors text-gray-600 border-gray-200 hover:bg-gray-50">
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
                className="lucide lucide-trending-down w-4 h-4"
                aria-hidden="true"
              >
                <path d="M16 17h6v-6"></path>
                <path d="m22 17-8.5-8.5-5 5L2 7"></path>
              </svg>{" "}
              Low Stock
            </button>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
             <table className="min-w-[800px] w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Item
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Category
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide text-right">
                      Qty
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide text-right">
                      Rate (₹)
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide text-right">
                      Value (₹)
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Supplier
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Stock
                    </th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {items.map((item) => {
                    const value = item.qty_stock * item.per_unit_rate;
                    const isLow = item.qty_stock <= item.min_stock_level;

                    return (
                      <tr key={item.item_id} className="hover:bg-gray-50/50">
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {item.item_name}
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-50 text-blue-700">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right font-semibold text-gray-900">
                          {item.qty_stock}
                          <span className="text-xs text-gray-400 ml-1 font-normal">
                            {item.unit}
                          </span>
                        </td>

                        <td className="px-4 py-3 text-right text-gray-700">
                          ₹{item.per_unit_rate}
                        </td>

                        <td className="px-4 py-3 text-right text-gray-700 font-medium">
                          ₹{value.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-600 text-xs">
                          {item.supplier}
                        </td>

                        <td className="px-4 py-3">
                          {isLow ? (
                            <span className="flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
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
                                className="lucide lucide-triangle-alert w-3 h-3"
                                aria-hidden="true"
                              >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              Low
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                              OK
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="px-4 py-3 flex items-center gap-1">
                          <button
                            onClick={() => {
                              setEditingItem({
                                ...item,
                                item_id: item.item_id,
                              });
                              setShowAddInventory(true);
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
                              className="lucide lucide-pen-line w-3.5 h-3.5"
                              aria-hidden="true"
                            >
                              <path d="M13 21h8"></path>
                              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                            </svg>
                          </button>
                          <button
                            className="p-1.5 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500"
                            onClick={() => handleDelete(item.item_id)}
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
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50 border-t border-gray-100">
                    <td
                      colSpan="4"
                      className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase"
                    >
                      Total Inventory Value
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">
                      ₹{totalValue.toLocaleString()}
                    </td>
                    <td colSpan="3"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Inventory;