import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles, createRole, updateRole, deleteRole } from '../utils/api';

const Roles = () => {
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });
  const roles = useSelector((state) => state.roles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const handleCreateRole = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createRole(newRole));
      setNewRole({ name: '', permissions: [] });
    } catch (error) {
      console.error('Role creation failed:', error);
    }
  };

  const handleUpdateRole = async (id, updatedRole) => {
    try {
      await dispatch(updateRole(id, updatedRole));
    } catch (error) {
      console.error('Role update failed:', error);
    }
  };

  const handleDeleteRole = async (id) => {
    try {
      await dispatch(deleteRole(id));
    } catch (error) {
      console.error('Role deletion failed:', error);
    }
  };

  return (
    <div>
      <h2>Role Management</h2>
      <form onSubmit={handleCreateRole}>
        <div>
          <label>Role Name:</label>
          <input
            type="text"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          />
        </div>
        <div>
          <label>Permissions:</label>
          <input
            type="text"
            value={newRole.permissions.join(', ')}
            onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value.split(', ') })}
          />
        </div>
        <button type="submit">Create Role</button>
      </form>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <span>{role.name}</span>
            <button onClick={() => handleUpdateRole(role.id, { name: role.name, permissions: role.permissions })}>
              Update
            </button>
            <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
