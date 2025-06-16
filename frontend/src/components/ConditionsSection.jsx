import React, { useState } from "react";

const ConditionsSection = ({ onAdd }) => {
  const [condition, setCondition] = useState({
    object: "Quote",
    field: "",
    operator: "=",
    valueType: "Static Value",
    value: "",
  });

  const handleAdd = () => {
    onAdd(condition);
    setCondition({
      object: "Quote",
      field: "",
      operator: "=",
      valueType: "Static Value",
      value: "",
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Conditions</h2>
      <div className="flex flex-col gap-4 mb-3">
        <div className="flex gap-4">
          <select
            className="border p-2 rounded w-full"
            value={condition.object}
            onChange={(e) => setCondition({ ...condition, object: e.target.value })}
          >
            <option>Quote</option>
            <option>Quote Line</option>
            <option>Product</option>
          </select>
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Field"
            value={condition.field}
            onChange={(e) => setCondition({ ...condition, field: e.target.value })}
          />
        </div>

        <div className="flex gap-4">
          <select
            className="border p-2 rounded w-full"
            value={condition.operator}
            onChange={(e) => setCondition({ ...condition, operator: e.target.value })}
          >
            <option>=</option>
            <option>&gt;</option>
            <option>&lt;</option>
            <option>starts with</option>
          </select>
          <select
            className="border p-2 rounded w-full"
            value={condition.valueType}
            onChange={(e) => setCondition({ ...condition, valueType: e.target.value })}
          >
            <option>Static Value</option>
            <option>Formula</option>
            <option>Variable</option>
          </select>
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Value"
            value={condition.value}
            onChange={(e) => setCondition({ ...condition, value: e.target.value })}
          />
        </div>
      </div>
      <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleAdd}>
        Add Condition
      </button>
    </div>
  );
};

export default ConditionsSection;
