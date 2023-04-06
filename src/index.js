/*import './style.css';*/

/*const tasksToDo = [
  {
    description: '',
    completed: false,
    index: 1,
  },
  {
    description: '',
    completed: false,
    index: 2,
  },
  {
    description: '',
    completed: false,
    index: 3,
  },
];*/

//add new tasks//

/*const add = () => {
  if (addNewTask.value !== '') {
      const tasksToDo = JSON.parse(localStorage.getItem('tasksToDo')) || [];
      tasksToDo.push({completed: false, description: addNewTask.value});
      for (let i = 1; i <= tasksToDo.length; i += 1) { 
          tasksToDo[i - 1].index = i;
      }
      localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
  }
  addNewTask.value = '';
};

const addIcon = document.querySelector('.submit'); 
const addNewTask = document.querySelector('.new-task');

addIcon.addEventListener('click', () => {
  add();
});

addNewTask.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { 
      add();
  }
});*/

/*const taskList = document.getElementById('task-list');*/
/*const displayTasks = () => {
  tasksToDo.forEach((task) => {
    const taskBox = document.createElement('div');
    taskBox.classList = 'task-box-css';
    taskBox.innerHTML = ` <div class="task-activity">
                    <input type="checkbox" class="input-check">
                    <input type="text" class="text-input" value="${task.description}">
                  </div>
                  <i class="move-icon" id="order-icon">&#x22EE;</i>`;
    taskList.appendChild(taskBox);
  });
};

displayTasks();*/

///New task //
const addTask = (taskInput, taskList) => {
  const task = taskInput.value;
  const newTask = document.createElement('div');
  newTask.textContent = task;
  taskList.appendChild(newTask);
  taskInput.value = "";
};

const addIcon = document.getElementById("add-icon");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addIcon.addEventListener("click", () => addTask(taskInput, taskList));

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();// prevents page reload
    addTask(taskInput, taskList);
  }
});
addTask();