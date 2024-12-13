import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = ({ onRegister }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded">
        <h1 className="text-xl font-bold mb-4">Register</h1>
        <RegisterForm onRegister={onRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;