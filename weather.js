const weather = document.querySelector(".js-weather");

const API_KEY = "01e3914df4b20f808ce0813d43b708fa";

const LS_COORDS = "loadedCoords";

const coords = [];

function saveCoords(coordsOj) {
  localStorage.setItem(LS_COORDS, JSON.stringify(coordsOj));
}

function handleGeoSuccess(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coordsOj = {
    latitude: lat,
    longitude: lon,
  };

  saveCoords(coordsOj);
}

function handleGeoError() {
  console.log("This Doesn't work");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(LS_COORDS);
  if (loadedCoords === null) {
    askCoords();
  } else {
    //getWeather();
  }
}

function init() {
  loadCoords();
}

init();
