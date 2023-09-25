import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

function UserTable({ users, editFunction, deleteFunction }) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <button
                className="edit-button"
                onClick={() => editFunction(user.id)}
              >
                <div className="edit-icon-container">
                  <FontAwesomeIcon icon={faPencilAlt} className="pencil-icon" />
                </div>
              </button>
              <button onClick={() => deleteFunction(user.id)}>
                <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
