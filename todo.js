const toDoForm = document.querySelector(".js-toDo__form"),
  toDoInput = toDoForm.querySelector(".js-toDo__input"),
  toDoUl = document.querySelector(".js-toDo__ul");

<<<<<<< Updated upstream
const LS_TODOS = "loadedToDos";
const toDos = [];

function saveToDos() {
  localStorage.setItem(LS_TODOS, JSON.stringify(toDos));
}

function paintToDos(text) {
  const toDoLi = document.createElement("li");
  const toDoDelBtn = document.createElement("button");
  const toDoSpan = document.createElement("span");
  const newId = toDos.length + 1;
  toDoDelBtn.innerText = "🧡";
  toDoSpan.innerText = text;
  toDoLi.id = newId;
  toDoLi.appendChild(toDoDelBtn);
  toDoLi.appendChild(toDoSpan);
  toDoUl.appendChild(toDoLi);
  const toDoOj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoOj);
=======
const LS_TODOS = "savedToDos";
let toDos = [];

function handleDel(event) {
  const clickedBtn = event.target;
  const selectedLi = clickedBtn.parentNode;
  toDoUl.removeChild(selectedLi);
  const cleanedToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(selectedLi.id);
  });
  toDos = cleanedToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(LS_TODOS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const toDoItem = document.createElement("li"),
    toDoDelBtn = document.createElement("button"),
    toDoName = document.createElement("span");
  toDoDelBtn.innerText = "❌";
  toDoDelBtn.addEventListener("click", handleDel);
  toDoName.innerText = text;
  toDoItem.appendChild(toDoDelBtn);
  toDoItem.appendChild(toDoName);
  toDoUl.appendChild(toDoItem);
  const newId = toDos.length + 1;
  toDoItem.id = newId;
  const toDosOj = {
    text: text,
    id: newId,
  };
  toDos.push(toDosOj);
>>>>>>> Stashed changes
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  paintToDo(newToDo);
  toDoInput.value = "";
}

function print(toDos) {
  paintToDos(toDos.text);
}

function loadToDos() {
<<<<<<< Updated upstream
  const loadedToDos = localStorage.getItem(LS_TODOS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(print);
=======
  const savedToDos = localStorage.getItem(LS_TODOS);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
>>>>>>> Stashed changes
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
