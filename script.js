// 1,2 Add event listener for page load and select DOM Elements
document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

// 3. Create the addTask Function:
    function addTask() {
        // retrieve and trim the value
        const taskText = taskInput.value.trim();

        // if empty, alert user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

// 4. Task Creation and Removal:
        // create a list(li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // assign onclick to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };    
        
        // append remove button to li, then li to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // clear input field
        taskInput.value = '';
    };
// 5. Add Event Listeners:
    // addButton click
    addButton.addEventListener('click', addTask);

    // Allow Enter key to add task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });