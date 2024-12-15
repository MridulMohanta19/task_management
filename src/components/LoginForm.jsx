import { useState } from "react";
import { LoginAPI } from "../Api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = ({onLogin}) => {
   
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = LoginAPI(data.email, data.password);
        if (response && response.accessToken){
           localStorage.setItem('token', response.accessToken);
           navigate('/dashboard');
        } else {
          alert('Invalid username or password');
        }
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="username"
        placeholder="Username"
        value={data.email}
        onChange={(e) =>  setData({...data, email: e.target.value})}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({...data, password: e.target.value})}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};


export default LoginForm;
