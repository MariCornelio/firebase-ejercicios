import {
  onGetTasks,
  saveTask,
  getTasks,
  deletTask,
  getTask,
  updatetask

} from "./firebase.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");
let editStatus = false;
let id = ''



window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";
    let html = '';
    querySnapshot.forEach((doc) => {
      const task = doc.data();

      html += `
      <div>
    <h3 class="h5">${task.title}</h3>
    <p>${task.description}</p>
    <button class='btn-delete' data-id="${doc.id}">Delete</button>
    <button class='btn-edit' data-id="${doc.id}">Edit</button>
  </div>`;
    });
    tasksContainer.innerHTML = html;

    // haciendo click para eliminar boton
    const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')
    btnsDelete.forEach(btn => {
      btn.addEventListener('click', (e) => {
        deletTask(e.target.dataset.id)

      })
    })
    // haciendo click para editar
    const btnEdit = tasksContainer.querySelectorAll('.btn-edit')
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        // console.log(e.target.dataset.id)
        const doc = await getTask(e.target.dataset.id)
        const task = doc.data();
        taskForm['task-title'].value = task.title;
        taskForm['task-description'].value = task.description;

        editStatus = true;
        id = doc.id

        taskForm['btn-task-form'].innerHTML = 'update'
      })
    })


  });
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];

  if (!editStatus) {
    saveTask(title.value, description.value);
  } else {
    updatetask(id, { title: title.value, description: description.value });

    editStatus = false;
  }


  taskForm.reset();
  taskForm['btn-task-form'].innerHTML = 'Save'
});
