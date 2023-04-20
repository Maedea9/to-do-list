/**
 * @jest-environment jsdom
 */

import { addTask } from './src/modules/functionality.js';

//isolated environment with no tasks
document.body.innerHTML = '<div class="main"><h1>To Do List</h1><hr><!--To do list--><div class="task-container"><div class="task-header"><h2>Todays To Do</h2><i class="clockwise">&#8635;</i></div><div><form class="add-task-form"><input id="taskInput" class="new-task" type="text" placeholder="Add to your list..."><i id="add-icon" class="submit">&#8617;</i></div><div id="taskList" class="list-content"><!--task list created dynamically--></div></form><div class="clear-tasks"><button id="clear-complete" class="clear-all-complete" type="button">Clear all completed</button></div></div></div>'
const container = document.querySelector('.list-content');

describe('addTask function', () => {
    test('should add one task to the container', () => {
      const input = document.querySelector('.new-task');
      input.value = "Task 1";
      addTask();
      setTimeout(() => {
        expect(container.children.length).toEqual(1);
      }, 1000);
    });
});