import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default LoginPage;