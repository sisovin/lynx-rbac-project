import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Logs = () => {
  const [accessLogs, setAccessLogs] = useState('');
  const [errorLogs, setErrorLogs] = useState('');
  const [auditLogs, setAuditLogs] = useState('');

  useEffect(() => {
    fetchLogs('access', setAccessLogs);
    fetchLogs('errors', setErrorLogs);
    fetchLogs('audit', setAuditLogs);
  }, []);

  const fetchLogs = async (type, setLogs) => {
    try {
      const response = await axios.get(`/api/logs/${type}`);
      setLogs(response.data);
    } catch (error) {
      console.error(`Failed to fetch ${type} logs:`, error);
    }
  };

  return (
    <div>
      <h2>Logs</h2>
      <div>
        <h3>Access Logs</h3>
        <pre>{accessLogs}</pre>
      </div>
      <div>
        <h3>Error Logs</h3>
        <pre>{errorLogs}</pre>
      </div>
      <div>
        <h3>Audit Logs</h3>
        <pre>{auditLogs}</pre>
      </div>
    </div>
  );
};

export default Logs;
