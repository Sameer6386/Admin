import React from "react";

const EditModal = ({ isOpen, employee, onClose, onSubmit, onChange }) => {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-6 rounded-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Edit Employee</h2>
        {Object.keys(employee).map((key) => (
          <div key={key} className="mb-4">
            <label className="block mb-2 capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={employee[key]}
              onChange={onChange}
              className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          Save Changes
        </button>
        <button
          onClick={onClose}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-gray-500"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditModal;
