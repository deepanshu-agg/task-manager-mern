const Task = require('../models/Task');


// Get all tasks with pagination and filtering
exports.getTasks = async (req, res) => {
  try {
    const { page = 1, limit = 10, filter } = req.query;

    // Filtering logic
    const filterCondition = filter
      ? { isCompleted: filter === 'completed' }
      : {};

    const tasks = await Task.find(filterCondition)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const totalTasks = await Task.countDocuments(filterCondition);

    res.status(200).json({
      message: 'Tasks fetched successfully',
      data: tasks,
      totalPages: Math.ceil(totalTasks / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
  }
};


// Create a task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ message: 'Task created successfully', data: task });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  }
};

// Update a task or toggle completion
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Toggle isCompleted if the request body has "toggleCompletion"
    if (req.body.toggleCompletion !== undefined) {
      task.isCompleted = !task.isCompleted;
      await task.save();
      const message = task.isCompleted
        ? 'Marked as completed'
        : 'Marked as uncompleted';
      return res.status(200).json({ message, data: task });
    }

    // Update other fields (default behavior)
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: 'Task updated successfully', data: updatedTask });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Failed to update task', error: error.message });
  }
};


// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
};
