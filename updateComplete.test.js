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

jest.mock('./localStorage', () => ({
  getItem: jest.fn(() => '[{"description":"Task 1","completed":false},{"description":"Task 2","completed":false}]'),
  setItem: jest.fn(),
}));

describe('renderTasks', () => {
  let taskList;

  beforeEach(() => {
    // Create a mock taskList element
    taskList = document.createElement('div');
    taskList.id = 'taskList';
    document.body.appendChild(taskList);
  });

  afterEach(() => {
    // Clean up taskList element after each test
    taskList.remove();
    localStorage.clear();
  });

  test('renders tasks from localStorage', () => {
    renderTasks();

    // Verify that taskList contains two task-box-css elements
    expect(taskList.querySelectorAll('.task-box-css').length).toBe(2);

    // Verify that taskList contains two input-check elements
    expect(taskList.querySelectorAll('.input-check').length).toBe(2);

    // Verify that the first input-check element is not checked
    expect(taskList.querySelectorAll('.input-check')[0].checked).toBe(false);

    // Verify that the second input-check element is not checked
    expect(taskList.querySelectorAll('.input-check')[1].checked).toBe(false);

    // Verify that localStorage.setItem() was called once with the correct arguments
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });

  test('renders no tasks when localStorage is empty', () => {
    localStorage.setItem('toDoArray', '[]');

    renderTasks();

    // Verify that taskList contains no task-box-css elements
    expect(taskList.querySelectorAll('.task-box-css').length).toBe(0);

    // Verify that localStorage.setItem() was not called
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  test('sets task as completed in localStorage when checkbox is clicked', () => {
    renderTasks();

    // Click the first input-check element
    taskList.querySelectorAll('.input-check')[0].click();

    // Verify that localStorage.setItem() was called once with the correct arguments
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'toDoArray',
      '[{"description":"Task 1","completed":true},{"description":"Task 2","completed":false}]',
    );
  });
});
