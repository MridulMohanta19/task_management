import axios from 'axios';

const API_BASE_URL = 'https://localhost:7033/api/';

export const fetchTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/Task`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(`${API_BASE_URL}/Task`, task);
  return response.data;
};

export const fetchTaskById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/Task/${id}`);
    return response.data;
};

export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_BASE_URL}/Task/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/Task/${id}`);
  return response.data;
};


export const Register= async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/Auth/register`);
  return response.data;
};

export const LoginAPI= async (email, pass) => {
  const response = await axios.post(`${API_BASE_URL}/Auth/Login`, {email, pass},{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};