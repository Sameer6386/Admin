"use client";
import React, { useState } from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

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
  const [activeSection, setActiveSection] = useState("overview");
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

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
      name: "Ayushi",
      email: "aayushi@gmail.com",
      contact: "1234567890",
      position: "Sales",
      status: "Active",
      profileType: "Self",
    },
    {
      name: "Rohit Sharma",
      email: "rohit.sharma@gmail.com",
      contact: "9876543210",
      position: "Marketing",
      status: "On Leave",
      profileType: "Manager",
    },
    {
      name: "Surbhi Jain",
      email: "surbhi.jain@gmail.com",
      contact: "7896541230",
      position: "HR",
      status: "Active",
      profileType: "Self",
    },
    {
      name: "Aditya Verma",
      email: "aditya.verma@gmail.com",
      contact: "6789453120",
      position: "IT",
      status: "Active",
      profileType: "Admin",
    },
    {
      name: "Neha Kapoor",
      email: "neha.kapoor@gmail.com",
      contact: "8907654321",
      position: "Finance",
      status: "On Leave",
      profileType: "Self",
    },
    {
      name: "Karan Mehta",
      email: "karan.mehta@gmail.com",
      contact: "9123456789",
      position: "Sales",
      status: "Active",
      profileType: "Manager",
    },
    {
      name: "Sneha Gupta",
      email: "sneha.gupta@gmail.com",
      contact: "8012345678",
      position: "IT",
      status: "Active",
      profileType: "Self",
    },
    {
      name: "Vikram Singh",
      email: "vikram.singh@gmail.com",
      contact: "7890123456",
      position: "Marketing",
      status: "On Leave",
      profileType: "Manager",
    },
    {
      name: "Priya Malhotra",
      email: "priya.malhotra@gmail.com",
      contact: "8901234567",
      position: "HR",
      status: "Active",
      profileType: "Self",
    },
    {
      name: "Rahul Agarwal",
      email: "rahul.agarwal@gmail.com",
      contact: "6789012345",
      position: "Finance",
      status: "Active",
      profileType: "Admin",
    },
  ]);

  // Calculate employees to show based on the current page
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  const openDetailModal = (employee) => {
    setSelectedEmployee(employee);
    setIsDetailModalOpen(true);
  };

  const openEditModal = (employee) => {
    setEditableEmployee({ ...employee });
    setIsEditModalOpen(true);
  };

  const openDeleteConfirm = (employee) => {
    setEmployeeToDelete(employee);
    setIsDeleteConfirmOpen(true);
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

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, newEmployee]);
    closeAddModal();
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.email === editableEmployee.email ? editableEmployee : emp
      )
    );
    closeEditModal();
  };

  const handleDeleteConfirm = () => {
    setEmployees((prev) =>
      prev.filter((emp) => emp.email !== employeeToDelete.email)
    );
    closeDeleteConfirm();
  };

  const closeDetailModal = () => setIsDetailModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeDeleteConfirm = () => setIsDeleteConfirmOpen(false);
  const closeAddModal = () => setIsAddModalOpen(false);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditableEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-screen bg-zinc-900 text-zinc-200">
      <aside className="w-64 bg-zinc-800 text-white">
        <div className="p-4">
          <h2 className="text-lg font-bold">Dashboard</h2>
          <ul className="mt-4">
            <li
              onClick={() => setActiveSection("overview")}
              className={`py-2 px-3 rounded ${activeSection === "overview" ? "bg-zinc-900" : "hover:bg-zinc-700"}`}
            >
              Overview
            </li>
            <li
              onClick={() => setActiveSection("employees")}
              className={`py-2 px-3 rounded ${activeSection === "employees" ? "bg-zinc-900" : "hover:bg-zinc-700"}`}
            >
              Employees
            </li>
            <li
              onClick={() => setActiveSection("leads")}
              className={`py-2 px-3 rounded ${activeSection === "Leads" ? "bg-zinc-900" : "hover:bg-zinc-700"}`}
            >
              Leads
            </li>
            <li
              onClick={() => setActiveSection("Projects")}
              className={`py-2 px-3 rounded ${activeSection === "Projects" ? "bg-zinc-900" : "hover:bg-zinc-700"}`}
            >
              Projects
            </li>
            <li
              onClick={() => setActiveSection("Inquires")}
              className={`py-2 px-3 rounded ${activeSection === "Inquires" ? "bg-zinc-900" : "hover:bg-zinc-700"}`}
            >
              Inquires
            </li>
            <li
              onClick={() => setActiveSection("Feedback")}
              className={`py-2 px-3 rounded ${activeSection === "Feedback" ? "bg-zinc-900" : "hover:bg-zinc-700"}`}
            >
              Feedback
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-6 bg-zinc-900">
        {activeSection === "employees" && (
          <>
            <header className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="border border-zinc-700 bg-zinc-800 text-white rounded-lg p-2"
              />
              <div className="flex space-x-2">
                <button
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500"
                  onClick={openAddModal}
                >
                  Add Employee
                </button>
              </div>
            </header>

            <table className="min-w-full bg-zinc-800 rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-zinc-700">Name</th>
                  <th className="py-2 px-4 border-b border-zinc-700">Email</th>
                  <th className="py-2 px-4 border-b border-zinc-700">
                    Contact
                  </th>
                  <th className="py-2 px-4 border-b border-zinc-700">
                    Position
                  </th>
                  <th className="py-2 px-4 border-b border-zinc-700">Status</th>
                  <th className="py-2 px-4 border-b border-zinc-700">
                    Profile
                  </th>
                  <th className="py-2 px-4 border-b border-zinc-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentEmployees.map((employee) => (
                  <tr key={employee.email}>
                    <td className="py-2 px-4 border-b border-zinc-700">
                      {employee.name}
                    </td>
                    <td className="py-2 px-4 border-b border-zinc-700">
                      {employee.email}
                    </td>
                    <td className="py-2 px-4 border-b border-zinc-700">
                      {employee.contact}
                    </td>
                    <td className="py-2 px-4 border-b border-zinc-700">
                      {employee.position}
                    </td>
                    <td className="py-2 px-4 border-b border-zinc-700">
                      {employee.status}
                    </td>
                    <td className="py-2 px-4 border-b border-zinc-700">
                      {employee.profileType}
                    </td>
                    <td className="py-2 px-4 border-b border-zinc-700">
                      <button
                        onClick={() => openDetailModal(employee)}
                        className="text-blue-500 hover:underline mr-2"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => openEditModal(employee)}
                        className="text-yellow-500 hover:underline mr-2"
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

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-zinc-700 text-white px-3 py-1 rounded-md disabled:opacity-50"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="bg-zinc-700 text-white px-3 py-1 rounded-md disabled:opacity-50"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Detail Modal */}
        {isDetailModalOpen && selectedEmployee && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-zinc-800 p-6 rounded-lg w-1/2">
              <h2 className="text-xl font-bold mb-4">Employee Details</h2>
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
                <strong>Profile Type:</strong> {selectedEmployee.profileType}
              </p>
              <button
                onClick={closeDetailModal}
                className="mt-4 bg-blue-600 text-white p-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && editableEmployee && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form
              className="bg-zinc-800 p-6 rounded-lg w-1/2"
              onSubmit={handleEditSubmit}
            >
              <h2 className="text-xl font-bold mb-4">Edit Employee</h2>
              <input
                type="text"
                name="name"
                value={editableEmployee.name}
                onChange={handleEditChange}
                placeholder="Name"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={editableEmployee.email}
                onChange={handleEditChange}
                placeholder="Email"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="contact"
                value={editableEmployee.contact}
                onChange={handleEditChange}
                placeholder="Contact"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="position"
                value={editableEmployee.position}
                onChange={handleEditChange}
                placeholder="Position"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="status"
                value={editableEmployee.status}
                onChange={handleEditChange}
                placeholder="Status"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="profileType"
                value={editableEmployee.profileType}
                onChange={handleEditChange}
                placeholder="Profile Type"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white p-2 rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={closeEditModal}
                  className="bg-red-600 text-white p-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {isDeleteConfirmOpen && employeeToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-zinc-800 p-6 rounded-lg w-1/3">
              <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
              <p>Are you sure you want to delete {employeeToDelete.name}?</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleDeleteConfirm}
                  className="bg-red-600 text-white p-2 rounded-lg"
                >
                  Delete
                </button>
                <button
                  onClick={closeDeleteConfirm}
                  className="bg-gray-600 text-white p-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form
              className="bg-zinc-800 p-6 rounded-lg w-1/2"
              onSubmit={handleAddSubmit}
            >
              <h2 className="text-xl font-bold mb-4">Add Employee</h2>
              <input
                type="text"
                name="name"
                value={newEmployee.name}
                onChange={handleAddChange}
                placeholder="Name"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={newEmployee.email}
                onChange={handleAddChange}
                placeholder="Email"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="contact"
                value={newEmployee.contact}
                onChange={handleAddChange}
                placeholder="Contact"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="position"
                value={newEmployee.position}
                onChange={handleAddChange}
                placeholder="Position"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="status"
                value={newEmployee.status}
                onChange={handleAddChange}
                placeholder="Status"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <input
                type="text"
                name="profileType"
                value={newEmployee.profileType}
                onChange={handleAddChange}
                placeholder="Profile Type"
                className="border border-zinc-700 bg-zinc-700 text-white rounded-lg p-2 mb-4 w-full"
                required
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white p-2 rounded-lg"
                >
                  Add
                </button>
                <button
                  onClick={closeAddModal}
                  className="bg-red-600 text-white p-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
