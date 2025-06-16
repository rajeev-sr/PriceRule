import React, { useState } from "react";

const ActionsSection = ({ onAdd }) => {
  const [action, setAction] = useState({
    object: "Quote Line",
    targetField: "",
    valueType: "Value",
    sourceInput: "",
    order: 1,
  });

  const handleAdd = () => {
    onAdd(action);
    setAction({
      object: "Quote Line",
      targetField: "",
      valueType: "Value",
      sourceInput: "",
      order: 1,
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Actions</h2>
      <div className="flex flex-col gap-4 mb-3">
        <div className="flex gap-4">
          <select
            className="border p-2 rounded w-full"
            value={action.object}
            onChange={(e) => setAction({ ...action, object: e.target.value })}
          >
            <option>Quote Line</option>
            <option>Pricing Guidance</option>
          </select>
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Target Field (e.g. SBQQ__Quantity__c)"
            value={action.targetField}
            onChange={(e) => setAction({ ...action, targetField: e.target.value })}
          />
        </div>

        <div className="flex gap-4">
          <select
            className="border p-2 rounded w-full"
            value={action.valueType}
            onChange={(e) => setAction({ ...action, valueType: e.target.value })}
          >
            <option>Value</option>
            <option>Formula</option>
            <option>Summary Variable</option>
          </select>
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Source Input"
            value={action.sourceInput}
            onChange={(e) => setAction({ ...action, sourceInput: e.target.value })}
          />
          <input
            type="number"
            className="border p-2 rounded w-32"
            placeholder="Order"
            value={action.order}
            onChange={(e) => setAction({ ...action, order: e.target.value })}
          />
        </div>
      </div>
      <button
        type="button"
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={handleAdd}
      >
        Add Action
      </button>
    </div>
  );
};

export default ActionsSection;
