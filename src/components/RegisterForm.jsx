import React, { useState } from 'react';
import { Register } from '../Api/api';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await Register(data.email, data.password, data.firstName, data.lastName); // Adjust API call
      if (response === 'User Registered Successfully') {
        navigate('/login');
      } else {
        setError('Invalid registration details');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="First Name"
        value={data.firstName}
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={data.lastName}
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
        className="p-2 border border-gray-300 rounded"
        required
      />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        className="p-2 bg-purple-500 text-white rounded hover:bg-green-600"
        disabled={loading}
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default RegisterForm;
