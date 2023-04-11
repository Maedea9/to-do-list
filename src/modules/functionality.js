/// RENDER TASKS///

const taskList = document.getElementById('taskList');

const renderTasks = () => {
  const toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];
  taskList.innerHTML = '';
  // Loop through tasks and create taskBox element for each task
  toDoArray.forEach((task) => {
    const taskBox = document.createElement('div');
    taskBox.classList = 'task-box-css';
    taskBox.innerHTML = ` <div class="task-activity">
                    <input type="checkbox" class="input-check">
                    <input type="text" class="text-input" value="${task.description}">
                  </div>
                  <i class="trash-icon" id="delete-icon">&#x1F5D1;</i>
                  <i class="move-icon" id="order-icon">&#x22EE;</i>`;
    taskList.appendChild(taskBox);

    // COMPLETED TASKS//
    const checkbox = taskBox.querySelector('.input-check');
    checkbox.addEventListener('click', (e) => {
      const taskBox = e.target.parentElement.parentElement;
      const taskIndex = Array.from(taskBox.parentElement.children).indexOf(taskBox);
      const toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];
      toDoArray[taskIndex].completed = e.target.checked;
      localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
    });
  });
};
renderTasks();

// ADD TASKS//

const newTask = document.querySelector('.new-task');
const addTask = () => {
  if (newTask.value !== '') {
    const toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];
    toDoArray.push({ completed: false, description: newTask.value, id: Date.now() });
    for (let i = 1; i <= toDoArray.length; i += 1) {
      toDoArray[i - 1].index = i;
    }
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
    newTask.value = '';
    renderTasks(); //
  }
};

// DELETE TASKS//

const deleteTask = (index) => {
  const toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];
  toDoArray.splice(index, 1);
  for (let i = 0; i < toDoArray.length; i += 1) {
    toDoArray[i].index = i;
  }
  localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
};

/// EDIT TASKS //////

const editTask = (index) => {
  const toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];
  const textInputs = document.querySelectorAll('.text-input');
  textInputs[index].addEventListener('change', () => {
    toDoArray[index].description = textInputs[index].value;
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
  });
};

export {
  addTask, renderTasks, deleteTask, editTask,
};