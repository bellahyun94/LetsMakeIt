const askNameBox = document.querySelector("js-greeting"),
  askNameInput = document.querySelector("js-greeting__input"),
  greetingSpan = document.querySelector("js-paint-greeting");

const LS_USER = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(userName) {
  askNameBox.classList.remove(SHOWING_CN);
  greetingSpan.classList.add(SHOWING_CN);
  greetingSpan.innerText = `Hello, ${userName}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(LS_USER);
  if (currentUser === null) {
    //dd
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
