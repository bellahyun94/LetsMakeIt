const toDoForm = document.querySelector(".js-toDo__form"),
  toDoInput = document.querySelector(".js-toDo__input"),
  toDoUl = document.querySelector(".js-toDo__ul");

const LS_TODOS = "loadedToDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(LS_TODOS, JSON.stringify(toDos));
}

function handleToDoDelBtn(event) {
  const clickedBtn = event.target;
  const clickedLi = clickedBtn.parentNode;
  toDoUl.removeChild(clickedLi);
  const cleanedToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(clickedLi.id);
  });
  toDos = cleanedToDos;
  saveToDos();
}

function paintToDos(text) {
  const toDoLi = document.createElement("li"),
    toDoName = document.createElement("span"),
    toDoDelBtn = document.createElement("button");

  const newId = toDos.length + 1;

  toDoDelBtn.innerText = "😛";
  toDoName.innerText = text;
  toDoLi.id = newId;

  toDoLi.appendChild(toDoName);
  toDoLi.appendChild(toDoDelBtn);
  toDoUl.appendChild(toDoLi);

  toDoDelBtn.addEventListener("click", handleToDoDelBtn);

  const toDoOj = {
    id: newId,
    text: text,
  };

  toDos.push(toDoOj);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDos(newToDo);
  saveToDos(newToDo);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(LS_TODOS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDos(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();
