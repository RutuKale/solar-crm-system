import React, { useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/items";

const AddInventory = ({ onClose, refreshItems, editData, updateLocal }) => {
  const [form, setForm] = useState({
    item_id: "",
    item_name: "",
    category: "",
    unit: "",
    qty_stock: 0,
    per_unit_rate: 0,
    min_stock_level: 0,
    supplier: "",
    note: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.item_name.trim()) {
      newErrors.item_name = "Item name is required";
    }

    if (!form.category) {
      newErrors.category = "Category is required";
    }

    if (!form.unit) {
      newErrors.unit = "Unit is required";
    }

    if (form.qty_stock <= 0) {
      newErrors.qty_stock = "Enter valid quantity";
    }

    if (form.per_unit_rate <= 0) {
      newErrors.per_unit_rate = "Enter valid rate";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "qty_stock" ||
          name === "per_unit_rate" ||
          name === "min_stock_level"
          ? Number(value)
          : value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  useEffect(() => {
    if (editData) {
      setForm({
        item_id: editData.item_id,
        item_name: editData.item_name,
        category: editData.category,
        unit: editData.unit,
        qty_stock: editData.qty_stock,
        per_unit_rate: editData.per_unit_rate,
        min_stock_level: editData.min_stock_level,
        supplier: editData.supplier,
        note: editData.note,
      });
    }
  }, [editData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const url = editData
        ? `${BASE_URL}/update/${editData.item_id}`
        : `${BASE_URL}/create`;

      const method = editData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Update failed");

      const data = await res.json();

      if (data.success) {
        alert(editData ? "Item updated" : "Item added");

        if (editData) {
          // fallback if backend doesn't return updated object
          const updatedItem = data.data || {
            ...form,
            item_id: editData.item_id,
          };
          updateLocal(updatedItem);
        } else {
          await refreshItems();
        }

        onClose();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-3 sm:p-4 space-y-3">
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full border rounded-lg px-3 py-2.5 sm:py-2.5 sm:py-2 text-sm focus:outline-none focus:border-primary ${errors.item_name ? "border-red-500" : "border-gray-200"}`}
              placeholder="e.g. 400W Solar Panel"
              name="item_name"
              value={form.item_name}
              onChange={handleChange}
            />
            {errors.item_name && (
              <p className="text-xs text-red-500 mt-1">{errors.item_name}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2.5 sm:py-2 text-sm focus:outline-none focus:border-primary bg-white ${errors.category ? "border-red-500" : "border-gray-200"}`}
            >
              <option value="">Select Category</option>
              <option value="Solar Panel">Solar Panel</option>
              <option value="Inverter">Inverter</option>
              <option value="Battery">Battery</option>
              <option value="Cable &amp; Wire">Cable &amp; Wire</option>
              <option value="Mounting Structure">Mounting Structure</option>
              <option value="Electrical">Electrical</option>
              <option value="Tools">Tools</option>
              <option value="General">General</option>
            </select>
            {errors.category && (
              <p className="text-xs text-red-500 mt-1">{errors.category}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Unit <span className="text-red-500">*</span>
            </label>
            <select
              name="unit"
              value={form.unit}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2.5 sm:py-2 text-sm focus:outline-none focus:border-primary bg-white ${errors.unit ? "border-red-500" : "border-gray-200"}`}
            >
              <option value="">Select Unit</option>
              <option value="pcs">pcs</option>
              <option value="meters">meters</option>
              <option value="kg">kg</option>
              <option value="rolls">rolls</option>
              <option value="sets">sets</option>
              <option value="boxes">boxes</option>
              <option value="liters">liters</option>
            </select>
            {errors.unit && (
              <p className="text-xs text-red-500 mt-1">{errors.unit}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Quantity in Stock <span className="text-red-500">*</span>
            </label>
            <input
              min="0"
              className={`w-full border ${errors.qty_stock ? "border-red-500" : "border-gray-200"} rounded-lg px-3 py-2.5 sm:py-2 text-sm focus:outline-none focus:border-primary`}
              type="number"
              name="qty_stock"
              value={form.qty_stock}
              onChange={handleChange}
            />
            {errors.qty_stock && (
              <p className="text-xs text-red-500 mt-1">{errors.qty_stock}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Rate (₹ per unit) <span className="text-red-500">*</span>
            </label>
            <input
              min="0"
              className={`w-full border ${errors.per_unit_rate ? "border-red-500" : "border-gray-200"} rounded-lg px-3 py-2.5 sm:py-2 text-sm focus:outline-none focus:border-primary`}
              type="number"
              name="per_unit_rate"
              value={form.per_unit_rate}
              onChange={handleChange}
            />
            {errors.per_unit_rate && (
              <p className="text-xs text-red-500 mt-1">
                {errors.per_unit_rate}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Min Stock Level
            </label>
            <input
              min="0"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 sm:py-2 text-sm focus:outline-none focus:border-[#04ABA5]"
              type="number"
              name="min_stock_level"
              value={form.min_stock_level}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Supplier
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 sm:py-2 text-sm focus:outline-none focus:border-[#04ABA5]"
              placeholder="Supplier name"
              name="supplier"
              value={form.supplier}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
              Notes
            </label>
            <input
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 sm:py-2 text-sm focus:outline-none focus:border-[#04ABA5]"
              placeholder="Any additional notes..."
              name="note"
              value={form.note}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 sm:py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2.5 sm:py-2 text-sm bg-primary text-white rounded-lg"
          >
            Save Item
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddInventory;