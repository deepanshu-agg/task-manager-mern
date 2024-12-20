import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask, toggleCompletion }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;