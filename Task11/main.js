// Function to load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
}

// Function to add task to the DOM
function addTaskToDOM(taskText, isCompleted) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.classList.add('task-item');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;
    if (isCompleted) li.classList.add('completed');
    
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
        updateLocalStorage();
    });
    
    const span = document.createElement('span');
    span.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '✖';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateLocalStorage();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Function to update local storage
function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll('li').forEach(taskItem => {
        const text = taskItem.querySelector('span').textContent;
        const completed = taskItem.querySelector('input').checked;
        tasks.push({ text, completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add new task
document.getElementById('add-task').addEventListener('click', () => {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        addTaskToDOM(taskText, false);
        updateLocalStorage();
        newTaskInput.value = '';
    }
});

// Load tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);
