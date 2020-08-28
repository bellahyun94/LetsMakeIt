const toDoBox = document.querySelector(".js-toDo__form"),
  toDoInput = document.querySelector(".js-toDo__input"),
  toDoUl = document.querySelector(".js-toDo__ul");

const LS_TODOS = "loadedToDos";
let toDos = [];

function handleDelBtn(event) {
  const selectedBtn = event.target;
  const selectedLi = selectedBtn.parentNode;
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

function paintNewToDos(text) {
  const toDoLi = document.createElement("li"),
    toDoDelBtn = document.createElement("button"),
    toDoSpan = document.createElement("span");

  toDoDelBtn.addEventListener("click", handleDelBtn);

  const newID = toDos.length + 1;

  toDoDelBtn.innerText = "😛";
  toDoSpan.innerText = text;

  toDoLi.appendChild(toDoDelBtn);
  toDoLi.appendChild(toDoSpan);
  toDoUl.appendChild(toDoLi);

  toDoLi.id = newID;

  const toDoOj = {
    id: newID,
    text: text,
  };
  toDos.push(toDoOj);
  saveToDos(toDos);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDos = toDoInput.value;
  paintNewToDos(newToDos);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(LS_TODOS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintNewToDos(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoBox.addEventListener("submit", handleToDoSubmit);
}

init();
