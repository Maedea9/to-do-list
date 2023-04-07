/*import './style.css';*/
import { 
  addTask, updateTask, deleteTask, loadTasks} from './modules/functionality.js';

//add new tasks//

const addIcon = document.getElementById("add-icon");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addIcon.addEventListener("click", () => addTask(taskInput, taskList));

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); //prevents page to reload when enter is pressed
    addTask(taskInput, taskList);
  }
});

//Load tasks//
window.addEventListener("load", () => {
  loadTasks();
});

//Delete task //
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('trash-icon')) {
    const taskBox = e.target.parentElement;

    taskBox.remove();

    const index = Array.from(taskList.children). indexOf(taskBox);
    deleteTask(index);
  }
});

// Add event listener for editing tasks
const textInput = taskBox.querySelector('.text-input');
textInput.addEventListener('change', (e) => {
  const editedTask = e.target.value;
  updateTask(task.description, editedTask);
});
