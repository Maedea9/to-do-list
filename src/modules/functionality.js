export const addTask = (taskInput, taskList) => {
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
                  <i class="trash-icon" id="delete-icon">&#x1F5D1;</i>
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

export const updateTask = (oldTask, newTask) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const index = tasks.findIndex(task => task.description === oldTask);
  if (index !== -1) {
    tasks[index].description = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const taskBox = document.createElement('div');
    taskBox.classList = 'task-box-css';
    taskBox.innerHTML = ` <div class="task-activity">
                    <input type="checkbox" class="input-check">
                    <input type="text" class="text-input" value="${task.description}">
                  </div>
                  <i class="trash-icon" id="delete-icon">&#x1F5D1;</i>
                  <i class="move-icon" id="order-icon">&#x22EE;</i>`;

    // Append taskBox to taskList
    taskList.appendChild(taskBox);

    // Add event listener for editing tasks
    const textInput = taskBox.querySelector('.text-input');
    textInput.addEventListener('change', (e) => {
      const editedTask = e.target.value;
      updateTask(task.description, editedTask);
    });
  });
};

export const deleteTask = (index) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};