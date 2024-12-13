import React, { useState } from 'react';

const TaskForm = ({ onSubmit, task }) => {
  const [name, setName] = useState(task ? task.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {task ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;