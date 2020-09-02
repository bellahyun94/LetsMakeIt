const API_KEY = "01e3914df4b20f808ce0813d43b708fa";

const COORDS_LS = "coords";

function loadCoords() {}

function init() {
  const loadedCoords = localStorage.getItem(COORDS_LS);
  if (loadedCoords === null) {
    askCords();
  } else {
    getWeather();
  }
}

init();
s;
