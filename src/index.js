import './style.css';

import {
  addTask, renderTasks, deleteTask,
} from './modules/functionality.js';

import { clearAllCompleted, editTask } from './modules/interactivity.js';

// ADD TASKS//

const addButton = document.querySelector('.submit'); // clicking add button
addButton.addEventListener('click', () => {
  addTask();
  // renderTasks();
});

const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // prevents page to reload when enter is pressed
    addTask();
    // renderTasks();
  }
});

renderTasks();

// DELETE TASKS//

const listContainer = document.querySelector('.list-content');

listContainer.addEventListener('click', (event) => {
  const removeTask = event.target.closest('.trash-icon');
  if (removeTask) {
    const trashIcons = listContainer.querySelectorAll('.trash-icon');
    const index = Array.from(trashIcons).indexOf(removeTask);
    deleteTask(index);
    renderTasks();
  }
});

// EDIT TASKS //

// add event listener for editing a task//
listContainer.addEventListener('click', (event) => {
  const textInput = event.target.closest('.text-input');
  if (textInput) {
    const textInputs = listContainer.querySelectorAll('.text-input');
    const index = Array.from(textInputs).indexOf(textInput);
    editTask(index);
  }
});

// CLEAR ALL COMPLETED //

const clearButton = document.getElementById('clear-complete');
clearButton.addEventListener('click', () => {
  clearAllCompleted();
  renderTasks();
});

