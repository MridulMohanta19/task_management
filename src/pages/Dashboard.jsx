import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../Api/api';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  const handleAddTask = async (task) => {
    const createdTask = await createTask(task);
    setTasks([...tasks, createdTask]);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = async (updatedTask) => {
    await updateTask(editingTask.id, updatedTask);
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id ? { ...task, ...updatedTask } : task
      )
    );
    setEditingTask(null);
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleLogout = () => {
    navigate('/');
  };

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data.data);
    };
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 space-y-8 relative">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-red-600 transition-all"
        >
          Logout
        </button>

        <h1 className="text-3xl py-2 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-md">
          Task Management Dashboard
        </h1>
        <div className="p-4 bg-gray-50 rounded-md shadow-md">
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleAddTask}
            task={editingTask}
          />
        </div>
        <div className="p-4 bg-gray-50 rounded-md shadow-md">
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
