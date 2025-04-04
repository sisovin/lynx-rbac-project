import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_USER_FAILURE', payload: error.message });
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, user);
    dispatch({ type: 'UPDATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_USER_FAILURE', payload: error.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/users/${id}`);
    dispatch({ type: 'DELETE_USER_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_USER_FAILURE', payload: error.message });
  }
};

export const fetchRoles = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/roles`);
    dispatch({ type: 'FETCH_ROLES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_ROLES_FAILURE', payload: error.message });
  }
};

export const createRole = (role) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/roles`, role);
    dispatch({ type: 'CREATE_ROLE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_ROLE_FAILURE', payload: error.message });
  }
};

export const updateRole = (id, role) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/roles/${id}`, role);
    dispatch({ type: 'UPDATE_ROLE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_ROLE_FAILURE', payload: error.message });
  }
};

export const deleteRole = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/roles/${id}`);
    dispatch({ type: 'DELETE_ROLE_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_ROLE_FAILURE', payload: error.message });
  }
};

export const fetchPermissions = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/permissions`);
    dispatch({ type: 'FETCH_PERMISSIONS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PERMISSIONS_FAILURE', payload: error.message });
  }
};

export const createPermission = (permission) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/permissions`, permission);
    dispatch({ type: 'CREATE_PERMISSION_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_PERMISSION_FAILURE', payload: error.message });
  }
};

export const updatePermission = (id, permission) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/permissions/${id}`, permission);
    dispatch({ type: 'UPDATE_PERMISSION_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_PERMISSION_FAILURE', payload: error.message });
  }
};

export const deletePermission = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/permissions/${id}`);
    dispatch({ type: 'DELETE_PERMISSION_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_PERMISSION_FAILURE', payload: error.message });
  }
};
