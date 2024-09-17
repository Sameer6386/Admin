import React from "react";

const DetailModal = ({ isOpen, employee, onClose }) => {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-zinc-800 p-6 rounded-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Employee Details</h2>
        <div>
          <p>
            <strong>Name:</strong> {employee.name}
          </p>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Contact:</strong> {employee.contact}
          </p>
          <p>
            <strong>Position:</strong> {employee.position}
          </p>
          <p>
            <strong>Status:</strong> {employee.status}
          </p>
          <p>
            <strong>Profile Type:</strong> {employee.profileType}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailModal;
