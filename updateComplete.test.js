/**
 * @jest-environment jsdom
 */

import { clearAllCompleted } from './src/modules/interactivity.js';

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
