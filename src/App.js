import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleEditUser = (userId) => {
    // Placeholder for the edit functionality
    console.log(`Editing user with ID: ${userId}`);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          const filtered = users.filter(
            (user) =>
              user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
              user.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
              user.role.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setFilteredUsers(filtered);
          setCurrentPage(1); // Reset to first page when search changes
        }}
      />

      <UserTable
        users={currentUsers}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
        deleteFunction={handleDeleteUser}
        editFunction={handleEditUser}
      />

      <button
        className="delete-selected-button"
        onClick={() => {
          setUsers((prevUsers) =>
            prevUsers.filter((user) => !selectedUsers.includes(user.id))
          );
          setSelectedUsers([]); // Clear selected users after deletion
        }}
      >
        Delete Selected
      </button>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
