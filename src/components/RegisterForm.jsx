import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onRegister({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="username"
        placeholder="username"
        value={setUsername}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;