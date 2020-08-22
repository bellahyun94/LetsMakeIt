const askNameBox = document.querySelector(".js-greeting"),
  askNameInput = askNameBox.querySelector(".js-greeting__input"),
  paintGreetSpan = document.querySelector(".js-paint-greeting");

const LS_USER = "currentUser";
const SHOWING_CN = "showing";

function saveName(newUser) {
  localStorage.setItem(LS_USER, newUser);
}

function handleSubmit(evnet) {
  event.preventDefault();
  const newUser = askNameInput.value;
  paintGreeting(newUser);
  saveName(newUser);
}

function askName() {
  askNameBox.classList.add(SHOWING_CN);
  askNameBox.addEventListener("submit", handleSubmit);
}

function paintGreeting(userName) {
  askNameBox.classList.remove(SHOWING_CN);
  paintGreetSpan.classList.add(SHOWING_CN);
  paintGreetSpan.innerText = `Hello, ${userName}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(LS_USER);
  if (currentUser === null) {
    askName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
