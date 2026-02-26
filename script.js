const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskValue = input.value.trim();
    
    
    if (!taskValue) return; 

    
    const li = document.createElement('li');
    li.className = 'todo-item'; 
    
    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <button class="delete-btn" aria-label="Delete task">Delete</button>
    `;

   
    const taskText = li.querySelector('.task-text');
    taskText.addEventListener('click', () => {
        taskText.classList.toggle('completed');
    });

    
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });

    
    todoList.appendChild(li);
    input.value = "";
    input.focus(); 
}


addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', (e) => { 
    if (e.key === 'Enter') addTask(); 
});