/* import './style.css'; */
import {
  renderTasks, addTask,
} from './modules/functionality.js';

// const tasksToDo = [];

const addIcon = document.getElementById('add-icon');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addIcon.addEventListener('click', () => addTask(taskInput, taskList));

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // prevents page to reload when enter is pressed
    addTask(taskInput, taskList);
  }
});

// Fetch tasks from localStorage on page load
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  renderTasks(tasks, taskList);
};

// Delete task //
// Add event listener for task list
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('trash-icon')) {
    const taskBox = e.target.parentElement;

    taskBox.remove();
    const taskObject = JSON.parse(taskBox.dataset.taskObject);
    const taskId = taskObject.id;
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
});