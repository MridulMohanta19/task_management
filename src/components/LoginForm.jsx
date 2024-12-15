import { useState } from "react";
import { LoginAPI } from "../Api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await LoginAPI(data.email, data.password);
      if (response && response.accessToken) {
        localStorage.setItem("token", response.accessToken);
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md py-2">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        {error && (
          <div className="text-sm text-red-500 text-center bg-red-50 p-2 rounded-md">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          {loading ? "Logging in..." : "LOGIN"}
        </button>
      </form>
      <div className="text-center">
        <a
          href="/register"
          className="text-sm text-purple-600 hover:underline hover:text-purple-800"
        >
          Already have an account? : Sign Up
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
