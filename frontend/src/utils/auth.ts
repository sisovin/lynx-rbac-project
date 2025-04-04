import axios from 'axios';
import { setAuthToken, clearAuthToken } from './api';

const API_URL = process.env.REACT_APP_API_URL;

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    const { access_token } = response.data;
    setAuthToken(access_token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: access_token });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const refreshToken = () => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/refresh-token`);
    const { access_token } = response.data;
    setAuthToken(access_token);
    dispatch({ type: 'REFRESH_TOKEN_SUCCESS', payload: access_token });
  } catch (error) {
    clearAuthToken();
    dispatch({ type: 'REFRESH_TOKEN_FAILURE', payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  clearAuthToken();
  dispatch({ type: 'LOGOUT' });
};
