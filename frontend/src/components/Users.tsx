import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, createUser, updateUser, deleteUser } from '../utils/api';

const Users = () => {
  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createUser(newUser));
      setNewUser({ username: '', password: '' });
    } catch (error) {
      console.error('User creation failed:', error);
    }
  };

  const handleUpdateUser = async (id, updatedUser) => {
    try {
      await dispatch(updateUser(id, updatedUser));
    } catch (error) {
      console.error('User update failed:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await dispatch(deleteUser(id));
    } catch (error) {
      console.error('User deletion failed:', error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleCreateUser}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.username}</span>
            <button onClick={() => handleUpdateUser(user.id, { username: user.username })}>
              Update
            </button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
