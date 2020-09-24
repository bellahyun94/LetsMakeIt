const TOTAL_IMG = 15;

function paintBg(imgNo) {
  const img = new Image();
  img.src = `images/${imgNo}.jpg`;
  img.classList.add("bgImg");
  body.prepend(img);
}

function getRandomNumber() {
  const rNumber = Math.ceil(Math.random() * TOTAL_IMG);
  return rNumber;
}

function init() {
  const randomNo = getRandomNumber();
  paintBg(randomNo);
}
init();
