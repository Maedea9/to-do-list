/* import './style.css'; */
import {
  addTask, updateTask, deleteTask, loadTasks,
} from './modules/functionality.js';

// add new tasks//

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

// Load tasks//
window.addEventListener('load', () => {
  loadTasks();
});

// Delete task //
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('trash-icon')) {
    const taskBox = e.target.parentElement;
    const taskId = taskBox.dataset.id;
    taskBox.remove();

    deleteTask(taskId);
  }
});

updateTask();