import React, { useState } from "react";
import { updateTask } from "../Api/api";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({});

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTask(task);
  };

  const handleInputChange = (event, field) => {
    setUpdatedTask((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSaveClick = async () => {
    try {
      await updateTask(editingTaskId, updatedTask);
      setEditingTaskId(null); // Exit editing mode
      if (onEdit) onEdit(editingTaskId, updatedTask); // Notify parent about the update
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
              <div className="flex flex-col space-y-2 w-full">
                <input
                  type="text"
                  value={updatedTask.title || ""}
                  onChange={(e) => handleInputChange(e, "title")}
                  placeholder="Title"
                  className="p-2 border rounded w-full"
                />
                <textarea
                  value={updatedTask.description || ""}
                  onChange={(e) => handleInputChange(e, "description")}
                  placeholder="Description"
                  className="p-2 border rounded w-full"
                ></textarea>
                <input
                  type="date"
                  value={updatedTask.dueDate || ""}
                  onChange={(e) => handleInputChange(e, "dueDate")}
                  className="p-2 border rounded w-full"
                />
                <select
                  value={updatedTask.priority || ""}
                  onChange={(e) => handleInputChange(e, "priority")}
                  className="p-2 border rounded w-full"
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <select
                  value={updatedTask.status || ""}
                  onChange={(e) => handleInputChange(e, "status")}
                  className="p-2 border rounded w-full"
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            ) : (
              <div className="flex flex-col space-y-1 w-full">
                <span className="font-semibold text-gray-700">{task.title}</span>
                <span className="text-gray-600">{task.description}</span>
                <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
                <span className="text-sm text-gray-500">Priority: {task.priority}</span>
                <span className="text-sm text-gray-500">Status: {task.status}</span>
              </div>
            )}
            <div className="flex space-x-2">
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
                  className="p-2 bg-yellow-400 text-white rounded"
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
