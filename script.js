const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteButton')) {
        e.target.parentElement.remove();
    }
});
