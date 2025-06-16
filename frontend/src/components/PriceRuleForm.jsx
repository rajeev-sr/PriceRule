import React, { useState } from "react";
import ConditionsSection from "@/components/ConditionsSection";
import ActionsSection from "@/components/ActionsSection";
import PreviewValidation from "@/components/PreviewValidation";
import "@/App.css"

const PriceRuleForm = () => {
  const [formData, setFormData] = useState({
    ruleName: "",
    active: false,
    evaluationScope: "Calculator",
    evaluationOrder: 1,
    evaluationEvents: {
      calculatorEvents: [],
      configuratorEvents: "On Save",
    },
    conditions: [],
    actions: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEventChange = (e) => {
    const { value, checked } = e.target;
    const updatedEvents = checked
      ? [...formData.evaluationEvents.calculatorEvents, value]
      : formData.evaluationEvents.calculatorEvents.filter((v) => v !== value);
    setFormData({
      ...formData,
      evaluationEvents: {
        ...formData.evaluationEvents,
        calculatorEvents: updatedEvents,
      },
    });
  };

  const handleConfigEventChange = (e) => {
    setFormData({
      ...formData,
      evaluationEvents: {
        ...formData.evaluationEvents,
        configuratorEvents: e.target.value,
      },
    });
  };

  const handleAddCondition = (condition) => {
    setFormData({
      ...formData,
      conditions: [...formData.conditions, condition],
    });
  };

  const handleAddAction = (action) => {
    setFormData({
      ...formData,
      actions: [...formData.actions, action],
    });
  };

  const handleSave = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/price-rules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert("Rule saved successfully!");
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Failed to save rule.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Price Rule Configuration</h1>

      {/* Header Section */}
      <div className="mb-6 space-y-4">
        <div>
          <label className="block font-medium">Rule Name</label>
          <input
            type="text"
            name="ruleName"
            value={formData.ruleName}
            onChange={handleInputChange}
            className="border p-2 w-full rounded"
            placeholder="Set ProductX Quantity to 2x ProductZ"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="font-medium">Active</label>
          <input
            type="checkbox"
            name="active"
            checked={formData.active}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block font-medium">Evaluation Scope</label>
            <select
              name="evaluationScope"
              value={formData.evaluationScope}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
            >
              <option>Calculator</option>
              <option>Configurator</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block font-medium">Evaluation Order</label>
            <input
              type="number"
              name="evaluationOrder"
              value={formData.evaluationOrder}
              onChange={handleInputChange}
              className="border p-2 w-full rounded"
            />
          </div>
        </div>
      </div>

      {/* Evaluation Events */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Evaluation Events</h2>
        <div className="space-y-2">
          <label className="block font-medium">Calculator Events</label>
          <div className="flex gap-4">
            {["Before Calculation", "During Calculation", "After Calculation"].map((ev) => (
              <label key={ev}>
                <input
                  type="checkbox"
                  value={ev}
                  checked={formData.evaluationEvents.calculatorEvents.includes(ev)}
                  onChange={handleEventChange}
                />{" "}
                {ev}
              </label>
            ))}
          </div>

          <label className="block font-medium mt-4">Configurator Events</label>
          <div className="flex gap-4">
            {["On Save", "On Edit + Save"].map((ev) => (
              <label key={ev}>
                <input
                  type="radio"
                  name="configEvent"
                  value={ev}
                  checked={formData.evaluationEvents.configuratorEvents === ev}
                  onChange={handleConfigEventChange}
                />{" "}
                {ev}
              </label>
            ))}
          </div>
        </div>
      </div>

      <ConditionsSection onAdd={handleAddCondition} />
      <ActionsSection onAdd={handleAddAction} />
      <PreviewValidation formData={formData} />

      <div className="mt-6 flex gap-4">
        <button className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PriceRuleForm;
