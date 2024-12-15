import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../Api/api';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  
  const handleAddTask = async (task) => {
    const createdTask = await createTask(task);
    setTasks([...tasks, createdTask]);
  };const handleEditTask = (task) => {
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

useEffect(() => {
  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data.data);
  };
  loadTasks();
}, []);
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Task Management Dashboard</h1>
        <div className="mb-4">
          <TaskForm
            onSubmit={editingTask ? handleUpdateTask : handleAddTask}
            task={editingTask}
          />
        </div>
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;