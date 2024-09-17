import React from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

const EmployeeTable = ({
  employees,
  openDetailModal,
  openEditModal,
  openDeleteConfirm,
}) => (
  <table className="min-w-full bg-zinc-800 rounded-lg">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b border-zinc-700">Name</th>
        <th className="py-2 px-4 border-b border-zinc-700">Email</th>
        <th className="py-2 px-4 border-b border-zinc-700">Contact</th>
        <th className="py-2 px-4 border-b border-zinc-700">Position</th>
        <th className="py-2 px-4 border-b border-zinc-700">Status</th>
        <th className="py-2 px-4 border-b border-zinc-700">Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee) => (
        <tr key={employee.email} className="hover:bg-zinc-700">
          <td className="py-2 px-4">{employee.name}</td>
          <td className="py-2 px-4">{employee.email}</td>
          <td className="py-2 px-4">{employee.contact}</td>
          <td className="py-2 px-4">{employee.position}</td>
          <td className="py-2 px-4">{employee.status}</td>
          <td className="py-2 px-4">
            <button
              onClick={() => openDetailModal(employee)}
              className="mr-2 text-blue-500 hover:underline"
            >
              <FaEye />
            </button>
            <button
              onClick={() => openEditModal(employee)}
              className="mr-2 text-yellow-500 hover:underline"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => openDeleteConfirm(employee)}
              className="text-red-500 hover:underline"
            >
              <FaTrashAlt />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeTable;
