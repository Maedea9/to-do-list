// class ToDo {
//     strikeCompleted(index) {
//         this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         const checkBoxes = document.querySelectorAll('input-check');
//         if (checkBoxes[index].checked) {
//             this.tasks[index].completed = true;
//             localStorage.setItem('tasks', JSON.stringify(this.tasks));
//         } else {
//             this.tasks[index].completed = false;
//             localStorage.setItem('tasks', JSON.stringify(this.tasks));
//         }
//     }
// }
// const listContainer = document.querySelector('.list-content');

// const toDo = new ToDo();
// listContainer.addEventListener('click', (event) => {
//   const checkBox = event.target.closest('.input-check');
//   if (checkBox) {
//   const checkBoxes = listContainer.querySelectorAll('.input-check');
//   const index = Array.from(checkBoxes).indexOf(checkBox);
// toDo.strikeCompleted(index);
// renderTasks();
//   }
// });


// export{ToDo};