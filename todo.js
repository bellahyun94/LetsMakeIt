const toDoForm = document.querySelector(".js-toDo__form"),
  toDoInput = toDoForm.querySelector(".js-toDo__input"),
  toDoUl = document.querySelector(".js-toDo__ul");

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
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDos = toDoInput.value;
  paintToDos(newToDos);
  toDoInput.value = "";
}

function print(toDos) {
  paintToDos(toDos.text);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(LS_TODOS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(print);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
