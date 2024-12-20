import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import API from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [message, setMessage] = useState(null); // For success/error messages
  const [filter, setFilter] = useState(''); // Filter state
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [totalPages, setTotalPages] = useState(1);

  // Function to show a temporary message
  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 2000); // Clear message after 2 seconds
  };

  // Fetch tasks with pagination and filtering
  const fetchTasks = async (page = 1, selectedFilter = '', showMessageFlag = false) => {
    try {
      const res = await API.get('/tasks', {
        params: { page, limit: 5, filter: selectedFilter },
      });
      setTasks(res.data.data || []);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
      if (showMessageFlag) {
        showMessage('success', 'Tasks fetched successfully');
      }
    } catch (error) {
      showMessage('error', 'Failed to fetch tasks');
    }
  };

  // Add a new task
  const addTask = async (task) => {
    try {
      const res = await API.post('/tasks', task);
      showMessage('success', 'Task added successfully');
      fetchTasks(); // Fetch without showing a message
    } catch (error) {
      showMessage('error', 'Failed to add task');
    }
  };

  // Update a task
  const updateTask = async (task) => {
    try {
      await API.put(`/tasks/${task._id}`, task);
      showMessage('success', 'Task updated successfully');
      fetchTasks(); // Fetch without showing a message
    } catch (error) {
      showMessage('error', 'Failed to update task');
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = async (task) => {
    try {
      await API.put(`/tasks/${task._id}`, { toggleCompletion: true });
      showMessage('success', 'Task status updated successfully');
      fetchTasks(); // Fetch without showing a message
    } catch (error) {
      showMessage('error', 'Failed to update task status');
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      showMessage('success', 'Task deleted successfully');
      fetchTasks(); // Fetch without showing a message
    } catch (error) {
      showMessage('error', 'Failed to delete task');
    }
  };

  const editTask = (task) => setTaskToEdit(task);

  // Handle filter change
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    fetchTasks(1, selectedFilter, true); // Show a message for filter change
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    fetchTasks(newPage, filter); // Fetch without showing a message
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchTasks(); // Fetch without showing a message
  }, []);

  return (
    <div className="app-container">
      <h1 className="text-center my-4">Task Manager</h1>

      {/* Message Popup */}
      {message && (
        <div className={`popup-message ${message.type}`}>{message.text}</div>
      )}

      <div className="task-manager">
        {/* Task Form */}
        <TaskForm
          addTask={addTask}
          updateTask={updateTask}
          taskToEdit={taskToEdit}
        />

        {/* Filter Section */}
        <div className="filter-container">
          <label htmlFor="filter">Filter tasks:</label>
          <select
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>

        {/* Task List */}
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleCompletion={toggleTaskCompletion}
        />

        {/* Pagination */}
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
