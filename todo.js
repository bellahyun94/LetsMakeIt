const toDoForm = document.querySelector(".js-toDo__form"),
  toDoInput = document.querySelector(".js-toDo__input"),
  toDoUl = document.querySelector(".js-toDo__ul");

const LS_TODOS = "loadedToDos";
let toDos = [];

function deleteToDo(event) {
  const selectedBtn = event.target;
  const fatherLi = selectedBtn.parentNode;
  toDoUl.removeChild(fatherLi);
  const cleanedToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(fatherLi.id);
  });
  toDos = cleanedToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(LS_TODOS, JSON.stringify(toDos));
}

function paintToDos(text) {
  const toDoli = document.createElement("li"),
    toDoDelBtn = document.createElement("button"),
    toDoSpan = document.createElement("span");
  toDoDelBtn.addEventListener("click", deleteToDo);

  const newId = toDos.length + 1;

  toDoDelBtn.innerText = "😛";
  toDoSpan.innerHTML = text;
  toDoli.id = newId;

  toDoli.appendChild(toDoDelBtn);
  toDoli.appendChild(toDoSpan);
  toDoUl.appendChild(toDoli);

  const toDoOj = {
    id: newId,
    text: text,
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
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
