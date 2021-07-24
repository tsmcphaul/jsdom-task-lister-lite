document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')

  function createNewTask(event) {
    event.preventDefault();
    let task = document.getElementById('new-task-description').value
    let newTask = document.createElement('li')

    newTask.innerHTML = task;

    let taskList = document.getElementById('tasks')

    let addTask = taskList.appendChild(newTask)

 
  }

  form.addEventListener("submit", createNewTask)
});
