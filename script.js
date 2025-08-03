// 1,2 Add event listener and select DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

// 3. Create the addTask Function:
    const addTask = () => {
        // retrieve and trim the value
        const taskText = taskInput.value.trim();

        // if empty, alert user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }