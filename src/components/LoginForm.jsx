import { useState } from "react";

const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({username, password});
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="username"
        placeholder="Username"
        value={username}
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
