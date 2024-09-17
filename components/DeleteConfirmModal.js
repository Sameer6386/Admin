import React from "react";

const DeleteConfirmModal = ({ isOpen, onConfirm, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-zinc-800 p-6 rounded-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
        <p>Are you sure you want to delete this employee?</p>
        <button
          onClick={onConfirm}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
