document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addTaskButton").addEventListener("click", addTask);
    document.getElementById("taskInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `<input type='text' value='${taskInput.value}' readonly> 
                    <button class='edit' onclick="editTask(this)">Edit</button> 
                    <button onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function editTask(button) {
    let inputField = button.parentElement.querySelector("input");
    if (button.textContent === "Edit") {
        inputField.removeAttribute("readonly");
        inputField.focus();
        button.textContent = "Save";
        button.style.background = "green";
    } else {
        inputField.setAttribute("readonly", "true");
        button.textContent = "Edit";
        button.style.background = "blue";
    }
}