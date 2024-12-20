import React from 'react';

const TaskItem = ({ task, deleteTask, editTask, toggleCompletion }) => {
  const handleCheckboxChange = () => {
    toggleCompletion(task);
  };

  return (
    <div className="task-item">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-item-buttons">
        <button onClick={() => editTask(task)} className="btn btn-primary edit-button">
          Edit
        </button>
        <button onClick={() => deleteTask(task._id)} className="btn btn-danger delete-button">
          Delete
        </button>
        <div>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={handleCheckboxChange}
            className="task-checkbox"
          />
          <label className="checkbox-label">
            {task.isCompleted ? 'Completed' : 'Incomplete'}
          </label>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
