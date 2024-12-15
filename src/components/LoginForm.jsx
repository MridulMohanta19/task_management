import { useState } from "react";
import { LoginAPI } from "../Api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); 

    try {
      const response = await LoginAPI(data.email, data.password);
      if (response && response.accessToken) {
        localStorage.setItem('token', response.accessToken);
        navigate('/dashboard');
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
      {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}  // Disable button while loading
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
