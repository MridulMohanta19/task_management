import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  console.log("TASK LIST:", tasks);
    return (
      <div className="space-y-4">
        {Array.isArray(tasks) && tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border border-gray-200 rounded flex justify-between items-center"
          >
            <span>{task.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => onEdit(task)}
                className="p-2 bg-yellow-400 rounded"
              >
                Edit
              </button>
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