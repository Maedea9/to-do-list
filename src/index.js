import './style.css';

const tasksToDo = [
  {
    description: 'task to do 1',
    completed: false,
    index: 1,
  },
  {
    description: 'task to do 2',
    completed: false,
    index: 2,
  },
  {
    description: 'task to do 3',
    completed: false,
    index: 3,
  },
];

const taskList = document.getElementById('task-list');
const displayTasks = () => {
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