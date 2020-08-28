const greetingForm = document.querySelector(".js-greeting"),
  greetingInput = document.querySelector(".js-greeting__input"),
  greetingSpan = document.querySelector(".js-paint-greeting");

const LS__USER = "loadedName";
const SHOWING_CN = "showing";

function saveNewUser(newUser) {
  localStorage.setItem(LS__USER, newUser);
}

function handleSubmit(event) {
  event.preventDefault();
  const newUser = greetingInput.value;
  paintGreeting(newUser);
  saveNewUser(newUser);
  greetingInput.value = "";
}

function askName() {
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greetingSpan.classList.add(SHOWING_CN);
  greetingSpan.innerText = `Hello ${text}!`;
}

function init() {
  const loadedUser = localStorage.getItem(LS__USER);
  if (loadedUser === null) {
    askName();
  } else {
    paintGreeting(loadedUser);
  }
}

init();
