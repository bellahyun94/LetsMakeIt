const TOTAL_IMAGE = 15;

function paintBg(imgNo) {
  const img = new Image();

  img.src = `images/${imgNo}.jpg`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function getRandomNo() {
  const number = Math.ceil(Math.random() * TOTAL_IMAGE);
  return number;
}

function init() {
  const randomNo = getRandomNo();
  paintBg(randomNo);
}

init();
