
import { useState, useEffect } from "react";

import API from "../../utils/api.js";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", Last_Name: "", email: "" });
  const [newUser, setNewUser] = useState({ name: "", Last_Name: "", email: "" });

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await API.get(`/users?page=${page}&limit=5`);
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  // Create User
  const handleCreate = async () => {
    if (!newUser.name || !newUser.Last_Name || !newUser.email) {
      alert("All fields are required!");
      return;
    }
    try {
      await API.post("/create", newUser);
      setNewUser({ name: "", Last_Name: "", email: "" });
      fetchUsers(); // Refresh user list
    } catch (err) {
      alert("Failed to create user");
    }
  };

  // Edit User
  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({ name: user.name, Last_Name: user.Last_Name, email: user.email });
  };

  // Update User
  const handleUpdate = async () => {
    try {
      await API.put(`/users/${editingUser}`, formData);
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      alert("Failed to update user");
    }
  };

  // Delete User
  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await API.delete(`/users/${userId}`);
        fetchUsers();
      } catch (err) {
        alert("Failed to delete user");
      }
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewUserChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Users List</h2>

      {/* New User Form */}
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Add New User</h3>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={newUser.name}
          onChange={handleNewUserChange}
          className="border p-1 mr-2"
        />
        <input
          type="text"
          name="Last_Name"
          placeholder="Last Name"
          value={newUser.Last_Name}
          onChange={handleNewUserChange}
          className="border p-1 mr-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleNewUserChange}
          className="border p-1 mr-2"
        />
        <button onClick={handleCreate} className="bg-green-500 text-white px-3 py-1 rounded">
          Add User
        </button>
      </div>

      {loading && <p className="text-blue-500 text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && users.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border">First Name</th>
                <th className="py-2 px-4 border">Last Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-t">
                  {editingUser === user._id ? (
                    <>
                      <td className="py-2 px-4 border">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-1" />
                      </td>
                      <td className="py-2 px-4 border">
                        <input type="text" name="Last_Name" value={formData.Last_Name} onChange={handleChange} className="border p-1" />
                      </td>
                      <td className="py-2 px-4 border">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-1" />
                      </td>
                      <td className="py-2 px-4 border text-center">
                        <button onClick={handleUpdate} className="bg-blue-500 text-white px-2 py-1 rounded">Save</button>
                        <button onClick={() => setEditingUser(null)} className="bg-gray-500 text-white px-2 py-1 ml-2 rounded">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-2 px-4 border text-center">{user.name}</td>
                      <td className="py-2 px-4 border text-center">{user.Last_Name}</td>
                      <td className="py-2 px-4 border text-center">{user.email}</td>
                      <td className="py-2 px-4 border text-center">
                        <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                        <button onClick={() => handleDelete(user._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && !error && users.length === 0 && <p className="text-gray-500 text-center">No users found.</p>}

      <div className="mt-4 flex justify-center gap-2">
        <button className="p-2 bg-gray-300 rounded disabled:opacity-50" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button className="p-2 bg-gray-300 rounded disabled:opacity-50" onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default UsersList;
