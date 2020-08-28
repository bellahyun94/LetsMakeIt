const greetingForm = document.querySelector(".js-greeting"),
  greetingInput = document.querySelector(".js-greeting__input"),
  greetingSpan = document.querySelector(".js-paint-greeting");

const LS_USER = "loadedName";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(LS_USER, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const newUser = greetingInput.value;
  saveName(newUser);
  paintGreeting(newUser);
}

function askName() {
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greetingSpan.classList.add(SHOWING_CN);
  greetingSpan.innerText = `Hello, ${text}`;
}

function loadName() {
  const loadedName = localStorage.getItem(LS_USER);
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
