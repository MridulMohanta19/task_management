import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8 space-y-6">
            <h1 className="text-3xl py-2 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md">
              Register
            </h1>
            <RegisterForm />
            <div className="text-center mt-4">
              <button
                onClick={handleLoginRedirect}
                className="text-sm text-purple-600 hover:underline hover:text-purple-800"
              >
                Already Registered? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
