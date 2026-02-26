const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskValue = input.value.trim();
    
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    //list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <button class="delete-btn">Delete</button>
    `;

    //text to toggle completion
    li.querySelector('.task-text').addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    // Delete button logic
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = ""; // Clear input
}

// Trigger on button click
addBtn.addEventListener('click', addTask);

// Trigger on 'Enter' key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});