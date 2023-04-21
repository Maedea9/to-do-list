/**
 * @jest-environment jsdom
 */

import { clearAllCompleted } from './src/modules/interactivity.js';
import { renderTasks } from './src/modules/functionality.js';


//CLEAR ALL COMPLETED TEST//

describe('clearAllCompleted', () => {
  it('The clearAllCompleted function updates the task matrix correctly.', () => {
  // Create a test array on the localStorage
    const toDoArray = [
      { index: 1, task: 'Go to the market', completed: true },
      { index: 2, task: 'Walk the dog', completed: false },
      { index: 3, task: 'Call the doctor', completed: true },
    ];
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));

    // Execute the function
    clearAllCompleted();

    // Check if the task array is well updated
    const updatedToDoArray = JSON.parse(localStorage.getItem('toDoArray'));
    expect(updatedToDoArray).toEqual([
      { index: 1, task: 'Walk the dog', completed: false },
    ]);
  });
});

//CHECKBOX TEST//

jest.mock('./src/modules/storage.js', () => ({
  getItem: jest.fn(() => '[{"description":"Task 1","completed":false},{"description":"Task 2","completed":false}]'),
  setItem: jest.fn(),
}));

describe('renderTasks', () => {
  beforeEach(() => {
    // Create some test data to use for localStorage
    const testToDoArray = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: true },
    ];
    localStorage.setItem('toDoArray', JSON.stringify(testToDoArray));
  });

  describe('COMPLETED TASKS', () => {
    test('should mark a task as completed in localStorage when checkbox is clicked', () => {
      // Render the tasks to the DOM
      document.body.innerHTML = `
        <div id="taskList"></div>
      `;
      renderTasks();

      // Wait for the tasks to be rendered
      setTimeout(() => {
        // Simulate a click on the checkbox for Task 1
        const checkbox = document.querySelector('.input-check');
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event('click'));

        // Check that the completed state of Task 1 was updated in localStorage
        const toDoArray = JSON.parse(localStorage.getItem('toDoArray'));
        expect(toDoArray[0].completed).toBe(true);

        done();
      }, 1000);
    });
  });
});
