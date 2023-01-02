const taskInput = document.querySelector(".task-input input");
taskbox = document.querySelector(".task-box");
filtes = document.querySelectorAll(".filters span");
let editId;
let isEditedTask = false;
// let todos = JSON.parse(localStorage.getItem("todo-list"));
let todos = JSON.parse(localStorage.getItem("todo-list"));

function showtodo() {
  let li = "";
  todos.forEach((todo, id) => {
    let isCompleted = todo.status == "completed" ? "checked" : "";
    li += `  <li class="task">
          <label for='${id}'>
            <input type="checkbox" onclick='updateStatus(this)' id='${id}' ${isCompleted}/>
            <p class='${isCompleted}'>${todo.name}</p>
          </label>
          <div class="setting">
            <i 
            onclick='showMenu(this)'
            class="uil uil-ellipsis-h"></i>

            <ul class="task-menu">
              <li><i class="uil uil-pen" onclick="EditTask('${id}','${todo.name}')">Edit</i></li>
              <li class="uil uil-trash" 
              onclick="deleteTask('${id}')">Delete</li>
            </ul>
          </div>
        </li>`;
  });

  taskbox.innerHTML = li;
}
showtodo();

function showMenu(selected) {
  let taskMenu = selected.parentElement.lastElementChild;
  taskMenu.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != selected) {
      taskMenu.classList.remove("show");
    }
  });
}

function EditTask(taskId, taskName) {
  editId = taskId;
  isEditedTask = true;
  taskInput.value = taskName;
}

function deleteTask(deleteId) {
  console.log(deleteId);
  todos.splice(deleteId, 1);
  localStorage.setItem("todo-list", JSON.stringify(todos));
  showtodo();
}

function updateStatus(selected) {
  let taskName = selected.parentElement.lastElementChild;
  if (selected.checked) {
    taskName.classList.add("checked");
    todos[selected.id].status = "completed";
  } else {
    taskName.classList.remove("checked");
    todos[selected.id].status = "pending";
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.value.trim();

  if (e.key == "Enter" && userTask) {
    if (!isEditedTask) {
      if (!todos) {
        todos = [];
      }
      taskInput.value = "";
      let taskInfo = { name: userTask, status: "pending" };
      todos.push(taskInfo);
    } else {
      todos[editId].name = userTask;
    }

    localStorage.setItem("todo-list", JSON.stringify(todos));
    showtodo();
  }
});
