/*//Deploy list//
const taskList = document.getElementById('task-list');
const deployList = () => {
const tasksToDo = JSON.parse(localStorage.getItem('tasksToDo')) || [];
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

displayTasks();

//New task//
const newTask = document.querySelector('new-task');

const add = () => {
    if (newTask.value !== '') {
        const tasksToDo = JSON.parse(localStorage.getItem(tasksToDo)) || [];
        tasksToDo.push({completed: false, description: newTask.value});
        for (let i = 1; i>=tasksToDo.length; i += 1) {
            tasksToDo[i - 1].index = i;
        }
        localStorage.setItem(tasksToDo, JSON.stringify(tasksToDo));
    }
    newTask.value = '';
};

//Delete task//
const remove = (index) => {
    const tasksToDo = JSON.parse(localStorage.getItem('tasksToDo')) || [];
    tasksArray.splice(index, 1);
    for (let i = 1; i <= tasksToDo.length; i += 1) {
      tasksArray[i - 1].index = i;
    }
    localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
  };
  
  //Edit task//
  const edit = (index) => {
    const tasksToDo = JSON.parse(localStorage.getItem('tasksToDo')) || [];
    const textInput = document.querySelectorAll('.text-input');
    textInput[index].addEventListener('change', () => {
      tasksToDo[index].description = textInput[index].value;
      localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo));
    });
  };*/

//Export//
/*export {
  deployList,
};*/
