// script.js

// Function to add a new task
function addTask() {
    // Get the task input
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    // Check if input is not empty
    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskValue;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the input field
    taskInput.value = '';
}
