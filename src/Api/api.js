import axios from 'axios';

const API_BASE_URL = 'https://localhost:7033/api';

export const fetchTasks = async () => {
  const response = await axios.get(`${API_BASE_URL}/Task`);
  return response;
};

export const createTask = async (task) => {
  const response = await axios.post(`${API_BASE_URL}/Task`, task);
  return response.data;
};

export const fetchTaskById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/Task/${id}`);
    return response;
};

export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_BASE_URL}/Task/${id}`, task);
  return response;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/Task/${id}`);
  return response;
};


export const Register= async (email, password, firstName, lastName) => {
  const response = await axios.post(`${API_BASE_URL}/Auth/register`, {email, password, firstName, lastName},{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const LoginAPI= async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/Auth/Login`, {email, password},{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};