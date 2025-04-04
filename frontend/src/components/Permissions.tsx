import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPermissions, createPermission, updatePermission, deletePermission } from '../utils/api';

const Permissions = () => {
  const [newPermission, setNewPermission] = useState({ name: '', description: '' });
  const permissions = useSelector((state) => state.permissions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPermissions());
  }, [dispatch]);

  const handleCreatePermission = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createPermission(newPermission));
      setNewPermission({ name: '', description: '' });
    } catch (error) {
      console.error('Permission creation failed:', error);
    }
  };

  const handleUpdatePermission = async (id, updatedPermission) => {
    try {
      await dispatch(updatePermission(id, updatedPermission));
    } catch (error) {
      console.error('Permission update failed:', error);
    }
  };

  const handleDeletePermission = async (id) => {
    try {
      await dispatch(deletePermission(id));
    } catch (error) {
      console.error('Permission deletion failed:', error);
    }
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <form onSubmit={handleCreatePermission}>
        <div>
          <label>Permission Name:</label>
          <input
            type="text"
            value={newPermission.name}
            onChange={(e) => setNewPermission({ ...newPermission, name: e.target.value })}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={newPermission.description}
            onChange={(e) => setNewPermission({ ...newPermission, description: e.target.value })}
          />
        </div>
        <button type="submit">Create Permission</button>
      </form>
      <ul>
        {permissions.map((permission) => (
          <li key={permission.id}>
            <span>{permission.name}</span>
            <button onClick={() => handleUpdatePermission(permission.id, { name: permission.name, description: permission.description })}>
              Update
            </button>
            <button onClick={() => handleDeletePermission(permission.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Permissions;
