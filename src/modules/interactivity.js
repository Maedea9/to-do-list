// CLEAR ALL COMPLETED//
const clearAllCompleted = () => {
  const toDoArray = JSON.parse(localStorage.getItem('toDoArray')) || [];
  for (let i = 0; i < toDoArray.length; i += 1) {
    if (toDoArray[i].completed) {
      toDoArray.splice(i, 1);
      i -= 1;
    }
  }
  for (let i = 1; i <= toDoArray.length; i += 1) {
    toDoArray[i - 1].index = i;
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

export { clearAllCompleted, editTask };
