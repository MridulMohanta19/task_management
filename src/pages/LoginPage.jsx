import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-800">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <LoginForm onLogin={onLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
