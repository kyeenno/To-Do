const main = () => {
    // This is an empty function
}

const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function AddTask() {
    const taskText = taskInput.value;
        if (!taskText) {
            alert("You must enter some kind of task!");
        }else {
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            taskList.appendChild(newTask);
            taskInput.value = '';
        }
}

addTaskButton.addEventListener('click', AddTask);