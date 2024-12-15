import React, { useState } from "react";
import { updateTask } from "../Api/api";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({});

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTask(task);
  };

  const handleInputChange = (e, field) => {
    setUpdatedTask((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSaveClick = async () => {
    try {
      await updateTask(editingTaskId, updatedTask);
      setEditingTaskId(null); // Exit editing mode
      if (onEdit) onEdit(editingTaskId, updatedTask); // Optional: Notify parent about the update
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <div className="space-y-4">
      {Array.isArray(tasks) &&
        tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border border-gray-200 rounded flex justify-between items-center"
          >
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={updatedTask.title}
                  onChange={(e) => handleInputChange(e, "title")}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  value={updatedTask.description}
                  onChange={(e) => handleInputChange(e, "description")}
                  className="p-2 border rounded"
                />
                <input
                  type="date"
                  value={updatedTask.dueDate}
                  onChange={(e) => handleInputChange(e, "dueDate")}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  value={updatedTask.priority}
                  onChange={(e) => handleInputChange(e, "priority")}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  value={updatedTask.status}
                  onChange={(e) => handleInputChange(e, "status")}
                  className="p-2 border rounded"
                />
              </>
            ) : (
              <>
                <span>{task.title}</span>
                <span>{task.description}</span>
                <span>{task.dueDate}</span>
                <span>{task.priority}</span>
                <span>{task.status}</span>
              </>
            )}
            <div className="space-x-2">
              {editingTaskId === task.id ? (
                <button
                  onClick={handleSaveClick}
                  className="p-2 bg-green-500 text-white rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(task)}
                  className="p-2 bg-yellow-400 rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => onDelete(task.id)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
