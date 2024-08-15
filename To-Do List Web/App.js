//function to save tasks to local storage
"use strict";
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//function to load tasks from local storage
function loadTasks(){
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

//function to render tasks
function renderTasks(){
    const tasks = loadTasks();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';// Clear existing tasks

    tasks.forEach((task,index)=>{
        const li = document.createElement('li');
        li.innerHTML = `<span class="task-text">${task.text}</span>
        <button class="delete" aria-label="Delete task" data-index="${index}">Delete</button>`;


        taskList.appendChild(li);
    });

    // Add event listener to delete buttons
    document.querySelectorAll('#task-list .delete').forEach((button) => {
        button.addEventListener('click',handleDelete);    

        });

}
//function to add tasks
function addTask(text){
    const tasks = loadTasks();
    tasks.push({text});
    saveTasks(tasks);
    renderTasks();
}

//function to delete tasks
function handleDelete(event){
    const index = event.target.getAttribute('data-index');
    const tasks = loadTasks();
    tasks.splice(index,1);
    saveTasks(tasks);
    renderTasks();
}

//add event listener for modal add task button
document.getElementById('modal-add-task-button').addEventListener('click',()=>{
    const taskInput = document.getElementById('modal-task-input')
    const taskText = taskInput.value.trim();
    if (taskText){
        addTask(taskText);
        taskInput.value = '';// Clear the input field
        document.getElementById('add-task-modal').style.display = 'none'; // Hide the modal
    }
});

//Event listener for modal close  button
document.getElementById('close-modal').addEventListener('click',()=>{
    document.getElementById('add-task-modal').style.display = 'none'; // Hide the modal
})

// Event listener for open modal button
document.getElementById('open-modal-button').addEventListener('click',()=>{
    document.getElementById('add-task-modal').style.display = 'block'; // Show the modal
});

// Event listener for logout button
document.getElementById('logout-button').addEventListener('click',()=>{
    document.getElementById('todo-container').style.display = 'none'; // Hide the todo container
    document.getElementById('login-container').style.display = 'block'; // Show the login container
});

// Event listener for login button (for demonstration purposes; replace with actual login functionality)
document.getElementById('login-button').addEventListener('click',()=>{
    document.getElementById('login-container').style.display = 'none'; // Hide the login container
    document.getElementById('todo-container').style.display = 'block'; // Show the todo container
});

// Event listener for signup button (for demonstration purposes; replace with actual signup functionality)
document.getElementById('signup-button').addEventListener('click',()=>{
    // signup logic here
    alert('Sign Up button clicked!'); // Placeholder action
})

renderTasks();