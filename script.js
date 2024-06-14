// script.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDate');
    const priorityInput = document.getElementById('priority');

    const taskValue = taskInput.value.trim();
    const dueDateValue = dueDateInput.value;
    const priorityValue = priorityInput.value;

    if (taskValue === '' || dueDateValue === '') {
        alert('Please enter both a task and a due date.');
        return;
    }

    // Check if the due date is in the past
    if (new Date(dueDateValue) < new Date().setHours(0, 0, 0, 0)) {
        alert('Due date cannot be in the past.');
        return;
    }

    const li = document.createElement('li');
    li.className = priorityValue;

    // Create a span to hold the task details
    const taskDetails = document.createElement('span');
    taskDetails.textContent = `${taskValue} - Due: ${dueDateValue}`;
    li.appendChild(taskDetails);

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.onclick = function() {
        editTask(this);
    };
    li.appendChild(editButton);

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };
    li.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
}

// Function to edit a task
function editTask(button) {
    const li = button.parentElement;
    const taskDetails = li.querySelector('span').textContent.split(' - Due: ');
    const task = taskDetails[0];
    const dueDate = taskDetails[1];

    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDate');
    const priorityInput = document.getElementById('priority');

    taskInput.value = task;
    dueDateInput.value = dueDate;
    priorityInput.value = li.className;

    li.remove();
}
