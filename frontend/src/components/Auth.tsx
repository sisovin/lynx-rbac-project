import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, refreshToken } from '../utils/auth';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(username, password));
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleTokenRefresh = async () => {
    try {
      await dispatch(refreshToken());
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleTokenRefresh}>Refresh Token</button>
    </div>
  );
};

export default Auth;
