const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('addTask');
const clearCompleted = document.getElementById('clearCompleted');
const taskList = document.getElementById('taskList');

addTask.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskText}
            <button class="delete">X</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
        listItem.querySelector('.delete').addEventListener('click', () => {
            listItem.remove();
        });
    }
});

clearCompleted.addEventListener('click', () => {
    const completedItems = taskList.querySelectorAll('li');
    completedItems.forEach((item) => {
        if (item.classList.contains('completed')) {
            item.remove();
        }
    });
});
