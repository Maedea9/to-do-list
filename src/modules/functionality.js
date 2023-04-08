// Function to render tasks on the page
const renderTasks = (tasks, taskList) => {
  // Clear existing tasks
  taskList.innerHTML = '';

  // Loop through tasks and create taskBox element for each task
  tasks.forEach((taskObject) => {
    const taskBox = document.createElement('div');
    taskBox.classList = 'task-box-css';
    taskBox.innerHTML = ` <div class="task-activity">
                    <input type="checkbox" class="input-check">
                    <input type="text" class="text-input" value="${taskObject.description}">
                  </div>
                  <i class="trash-icon" id="delete-icon">&#x1F5D1;</i>
                  <i class="move-icon" id="order-icon">&#x22EE;</i>`;
    taskBox.dataset.taskObject = JSON.stringify(taskObject);
    taskList.appendChild(taskBox);

    const checkbox = taskBox.querySelector('.input-check');
    checkbox.addEventListener('click', (e) => {
      const taskBox = e.target.parentElement.parentElement;
      const taskObject = JSON.parse(taskBox.dataset.taskObject);
      if (e.target.checked) {
        taskObject.completed = true; // Marcar como completado
      } else {
        taskObject.completed = false; // Marcar como no completado
      }
    
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem(taskObject.id, JSON.stringify(taskObject));
    });
  });
};

const updateTask = (oldTask, newTask) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const index = tasks.findIndex((task) => task.description === oldTask);
  if (index !== -1) {
    tasks[index].description = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

// add new tasks//
const addTask = (taskInput, taskList) => {
  const task = taskInput.value;

  const taskObject = {
    description: task,
    completed: false,
    id: Date.now(),
  };

  // Create taskBox element
  const taskBox = document.createElement('div');
  taskBox.classList = 'task-box-css';
  taskBox.innerHTML = ` <div class="task-activity">
                    <input type="checkbox" class="input-check">
                    <input type="text" class="text-input" value="${task}">
                  </div>
                  <i class="trash-icon" id="delete-icon">&#x1F5D1;</i>
                  <i class="move-icon" id="order-icon">&#x22EE;</i>`;

  // Append taskBox to taskList
  taskBox.dataset.taskObject = JSON.stringify(taskObject);
  taskList.appendChild(taskBox);

  // add event listener for editing a task//
  const textInput = taskBox.querySelector('.text-input');
  textInput.addEventListener('change', (e) => {
    const editedTask = e.target.value;
    updateTask(taskObject, editedTask);
  });

  taskInput.value = '';

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskObject); // push taskObject to task array
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {
  renderTasks, addTask, updateTask,
};