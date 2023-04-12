// // CLEAR ALL COMPLETED//

const clearAllCompleted = () => {
  let toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];
  toDoArray = toDoArray.filter((task) => !task.completed);
  toDoArray = toDoArray.map((task, index) => {
    task.index = index + 1;
    return task;
  });
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

export { clearAllCompleted, editTask };
