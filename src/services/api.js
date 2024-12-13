import axios from 'axios';

const API_BASE_URL = 'http://localhost:7172/api';

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