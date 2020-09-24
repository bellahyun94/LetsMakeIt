const greetForm = document.querySelector(".js-greeting"),
  greetInput = document.querySelector(".js-greeting__input"),
  greetSpan = document.querySelector(".js-paint-greeting");

const LS_USER = "loadedUser";

function saveNewUser(newUser) {
  localStorage.setItem(LS_USER, newUser);
}

function handleGreetSubmit(event) {
  event.preventDefault();
  greetForm.classList.remove("showing");
  const newUser = greetInput.value;
  paintGreeting(newUser);
  saveNewUser(newUser);
}

function askName() {
  greetForm.classList.add("showing");
  greetForm.addEventListener("submit", handleGreetSubmit);
}

function paintGreeting(userName) {
  greetSpan.classList.add("showing");
  greetSpan.innerText = `Hello, ${userName}. Have A nice Day!`;
}

function loadName() {
  const loadedUser = localStorage.getItem(LS_USER);
  if (loadedUser === null) {
    askName();
  } else {
    paintGreeting(loadedUser);
  }
}

function init() {
  loadName();
}

init();
