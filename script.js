let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.className = "task";
        listItem.innerHTML = `
            <span>${task.text}</span>
            <div class="task-buttons">
                <button title="Edit Task" onclick="editTask(${index})"><i class="fas fa-edit"></i></button>
                <button title="Delete Task" onclick="deleteTask(${index})"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
        taskList.appendChild(listItem);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText });
        renderTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a valid task.");
    }
}

function editTask(index) {
    const newTaskText = prompt("Enter the new task:", tasks[index].text);
    if (newTaskText !== null) {
        tasks[index].text = newTaskText.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Initial rendering
renderTasks();

// Add task button event listener
document.getElementById("addTaskBtn").addEventListener("click", addTask);
