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
            SaveData();
            taskInput.value = '';
        }
}

function SaveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function ShowList() {
    taskList.innerHTML = localStorage.getItem("data");
}

addTaskButton.addEventListener('click', AddTask);

ShowList();
