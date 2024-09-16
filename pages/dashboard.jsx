"use client";
import React, { useState } from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OverviewCard = ({ title, value }) => (
  <div className="bg-zinc-800 p-4 rounded-lg text-center">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-2xl mt-2">{value}</p>
  </div>
);

export default function Dashboard() {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editableEmployee, setEditableEmployee] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    contact: "",
    position: "",
    status: "",
    profileType: "",
  });

  const [employees, setEmployees] = useState([
    {
      name: "Ayushi",
      email: "aayushi@gmail.com",
      contact: "1234567890",
      position: "Sales",
      status: "Active",
      profileType: "Self",
    },
    {
      name: "Pankaj",
      email: "pankaj@gmail.com",
      contact: "3436787654",
      position: "Sales",
      status: "Active",
      profileType: "Added",
    },
    {
      name: "Bhavya",
      email: "bhavya@gmail.com",
      contact: "5247387432",
      position: "Sales",
      status: "Inactive",
      profileType: "Added",
    },
    {
      name: "Himanshu",
      email: "himanshu@gmail.com",
      contact: "34232453",
      position: "Sales",
      status: "Inactive",
      profileType: "Self",
    },
    {
      name: "Ansh",
      email: "ansh@gmail.com",
      contact: "4324534543",
      position: "Sales",
      status: "Active",
      profileType: "Self",
    },
  ]);

  const notifications = [
    "New employee added.",
    "3 employees are inactive.",
    "A project deadline is approaching.",
  ];

  const activities = [
    "Ayushi added a new project.",
    "Pankaj updated his contact details.",
    "Himanshu was marked as inactive.",
  ];

  const data = [
    { name: "Jan", employees: 20 },
    { name: "Feb", employees: 25 },
    { name: "Mar", employees: 22 },
    { name: "Apr", employees: 30 },
  ];

  const openDetailModal = (employee) => {
    setSelectedEmployee(employee);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedEmployee(null);
  };

  const openEditModal = (employee) => {
    setEditableEmployee({ ...employee });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditableEmployee(null);
  };

  const openDeleteConfirm = (employee) => {
    setEmployeeToDelete(employee);
    setIsDeleteConfirmOpen(true);
  };

  const closeDeleteConfirm = () => {
    setIsDeleteConfirmOpen(false);
    setEmployeeToDelete(null);
  };

  const openAddModal = () => {
    setNewEmployee({
      name: "",
      email: "",
      contact: "",
      position: "",
      status: "",
      profileType: "",
    });
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditableEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.email === editableEmployee.email ? editableEmployee : emp
      )
    );
    closeEditModal();
  };

  const handleDeleteConfirm = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.email !== employeeToDelete.email)
    );
    closeDeleteConfirm();
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    closeAddModal();
  };

  return (
    <div className="flex h-screen bg-zinc-900 text-zinc-200">
      <aside className="w-64 bg-zinc-800 text-white">
        <div className="p-4">
          <h2 className="text-lg font-bold">Dashboard</h2>
          <ul className="mt-4">
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Employees</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Leads</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Inquiries</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Projects</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Feedback</a>
            </li>
            <li className="py-2 px-3 hover:bg-zinc-700 rounded">
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-6 bg-zinc-900">
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2"
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg ml-2 hover:bg-blue-500">
              Search
            </button>
          </div>
          <div>
            <button
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500"
              onClick={openAddModal}
            >
              Add Employee
            </button>
            <div className="relative ml-4">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                Admin Profile
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-zinc-800 rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2 text-sm text-zinc-200">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-zinc-200">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-zinc-200">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <OverviewCard title="Total Employees" value={employees.length} />
          <OverviewCard
            title="Active Employees"
            value={employees.filter((emp) => emp.status === "Active").length}
          />
          <OverviewCard title="Projects" value={42} />
          <OverviewCard title="Inquiries" value={15} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-zinc-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <ul className="list-disc list-inside">
              {notifications.map((note, index) => (
                <li key={index} className="mb-2">
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Recent Activities</h2>
            <ul className="list-none">
              {activities.map((activity, index) => (
                <li key={index} className="mb-2">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>

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

        {isDetailModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 p-6 rounded-lg w-1/3">
              <h2 className="text-lg font-bold mb-4">Employee Details</h2>
              {selectedEmployee && (
                <div>
                  <p>
                    <strong>Name:</strong> {selectedEmployee.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedEmployee.email}
                  </p>
                  <p>
                    <strong>Contact:</strong> {selectedEmployee.contact}
                  </p>
                  <p>
                    <strong>Position:</strong> {selectedEmployee.position}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedEmployee.status}
                  </p>
                  <p>
                    <strong>Profile Type:</strong>{" "}
                    {selectedEmployee.profileType}
                  </p>
                </div>
              )}
              <button
                onClick={closeDetailModal}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {isEditModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <form
              onSubmit={handleEditSubmit}
              className="bg-zinc-800 p-6 rounded-lg w-1/3"
            >
              <h2 className="text-lg font-bold mb-4">Edit Employee</h2>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editableEmployee.name}
                  onChange={handleEditChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editableEmployee.email}
                  onChange={handleEditChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={editableEmployee.contact}
                  onChange={handleEditChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Position</label>
                <input
                  type="text"
                  name="position"
                  value={editableEmployee.position}
                  onChange={handleEditChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Status</label>
                <input
                  type="text"
                  name="status"
                  value={editableEmployee.status}
                  onChange={handleEditChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Profile Type</label>
                <input
                  type="text"
                  name="profileType"
                  value={editableEmployee.profileType}
                  onChange={handleEditChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                Save Changes
              </button>
              <button
                onClick={closeEditModal}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-gray-500"
              >
                Cancel
              </button>
            </form>
          </div>
        )}

        {/* Delete Confirmation */}
        {isDeleteConfirmOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 p-6 rounded-lg w-1/3">
              <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete this employee?</p>
              <button
                onClick={handleDeleteConfirm}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
              >
                Delete
              </button>
              <button
                onClick={closeDeleteConfirm}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Add Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <form
              onSubmit={handleAddSubmit}
              className="bg-zinc-800 p-6 rounded-lg w-1/3"
            >
              <h2 className="text-lg font-bold mb-4">Add New Employee</h2>
              <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleAddChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleAddChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={newEmployee.contact}
                  onChange={handleAddChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Position</label>
                <input
                  type="text"
                  name="position"
                  value={newEmployee.position}
                  onChange={handleAddChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Status</label>
                <input
                  type="text"
                  name="status"
                  value={newEmployee.status}
                  onChange={handleAddChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Profile Type</label>
                <input
                  type="text"
                  name="profileType"
                  value={newEmployee.profileType}
                  onChange={handleAddChange}
                  className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                Add Employee
              </button>
              <button
                onClick={closeAddModal}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-gray-500"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
