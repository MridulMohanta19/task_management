import React, { useState } from 'react';
import { Register } from '../Api/api';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const [data, setData] = ({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error state

   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);
     setError(""); 
 
     try {
       const response = await Register(data.email, data.password);
       if (response === "User Registered Successfully") {
         navigate('/login');
       } else {
         setError('Invalid username or password');
       }
     } catch (err) {
       setError('Something went wrong. Please try again later.');
     } finally {
       setLoading(false); // Reset loading state
     }
   };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="email"
        placeholder="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="firstName"
        placeholder="First Name"
        value={data.firstName}
        onChange={(e) => setData({...data, firstName: e.target.value})}
        className="p-2 border border-gray-300 rounded"
      />
          <input
        type="lastName"
        placeholder="Last Name"
        value={data.lastName}
        onChange={(e) => setData({...data, lastName: e.target.value})}
        className="p-2 border border-gray-300 rounded"
      />
        {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
         {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;