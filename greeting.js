const askNameForm = document.querySelector(".js-greeting"),
  askNameInput = askNameForm.querySelector(".js-greeting__input"),
  paintGreetSpan = document.querySelector(".js-paint-greeting");

const LS_NAME = "loadedName";

function handleSubmit(evnet) {
  const newName = askNameInput.value;
  localStorage.setItem(LS_NAME, newName);
}

function askName() {
  askNameForm.classList.add("showing");
  askNameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(loadedName) {
  askNameForm.classList.remove("showing");
  paintGreetSpan.classList.add("showing");
  paintGreetSpan.innerHTML = `Hello ${loadedName}!`;
}

function loadName() {
  const loadedName = localStorage.getItem(LS_NAME);
  if (loadedName === null) {
    askName();
  } else {
    paintGreeting(loadedName);
  }
}

function init() {
  loadName();
}

init();
