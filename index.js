const body = document.querySelector("body"),
  h1 = document.querySelector("h1"),
  select = document.querySelector("select");

function saveCV(event) {
  event.preventDefault();
  const currentValue = select.value;
  localStorage.setItem("LS_country", currentValue);
}

function getSaved() {
  const savedCountry = localStorage.getItem("LS_country");
}

function init() {
  getSaved();

  select.addEventListener("change", saveCV);
}

init();
