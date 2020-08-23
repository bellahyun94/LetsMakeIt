const toDoForm = document.querySelector(".js-toDo__form"),
  toDoInput = toDoForm.querySelector(".js-toDo__input"),
  toDoUl = document.querySelector(".js-toDo__ul");

const LS_TODOS = "loadedToDos";
const toDo = [];

function saveToDos(toDo) {
  localStorage.setItem(LS_TODOS, JSON.stringify(toDo));
}

function paintToDos(text) {
  const toDoLi = document.createElement("li"),
    toDoDelBtn = document.createElement("button"),
    toDoSpan = document.createElement("span");
  const newId = toDo.length + 1;
  toDoDelBtn.innerText = "😛";
  toDoSpan.innerText = text;
  toDoLi.id = newId;
  toDoLi.appendChild(toDoDelBtn);
  toDoLi.appendChild(toDoSpan);
  toDoUl.appendChild(toDoLi);
  const toDoOj = {
    text: text,
    id: newId,
  };
  toDo.push(toDoOj);
  saveToDos(toDo);
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDos = toDoInput.value;
  paintToDos(newToDos);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(LS_TODOS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function printToDos(toDo) {
      paintToDos(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
