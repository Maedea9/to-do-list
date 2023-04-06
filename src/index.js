/*import './style.css';*/

const tasksToDo = [];

//add new tasks//

const addTask = (taskInput, taskList) => {
  const task = taskInput.value;
  const newTask = document.createElement('div');
  newTask.textContent = task;

  const taskObject = {
    description: task,
    completed: false,
    index: taskList.childElementCount + 1
  };

  // Create taskBox element
  const taskBox = document.createElement('div');
  taskBox.classList = 'task-box-css';
  taskBox.innerHTML = ` <div class="task-activity">
                    <input type="checkbox" class="input-check">
                    <input type="text" class="text-input" value="${task}">
                  </div>
                  <i class="move-icon" id="order-icon">&#x22EE;</i>`;

  // Append taskBox to taskList
  taskList.appendChild(taskBox);

  //add event listener for editing a task//
  const textInput = taskBox.querySelector('.text-input');
  textInput.addEventListener('change', (e) => {
    const editedTask = e.target.value;
    updateTask(task, editedTask);
  });

  taskInput.value = "";

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskObject); //push taskObject to task array
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const updateTask = (oldTask, newTask) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const index = tasks.indexOf(oldTask);
  if (index !== -1) {
    tasks[index] = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

const addIcon = document.getElementById("add-icon");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addIcon.addEventListener("click", () => addTask(taskInput, taskList));

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask(taskInput, taskList);
  }
});

window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    // Create taskBox element
    const taskBox = document.createElement('div');
    taskBox.classList = 'task-box-css';
    taskBox.innerHTML = ` <div class="task-activity">
                    <input type="checkbox" class="input-check">
                    <input type="text" class="text-input" value="${task}">
                  </div>
                  <i class="move-icon" id="order-icon">&#x22EE;</i>`;

    // Append taskBox to taskList
    taskList.appendChild(taskBox);

    // Add event listener for editing tasks
    const textInput = taskBox.querySelector('.text-input');
    textInput.addEventListener('change', (e) => {
      const editedTask = e.target.value;
      updateTask(task, editedTask);
    });
  });
});