const storeTasks = (toDoArray) => {
localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
};

export default storeTasks;