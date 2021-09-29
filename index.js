import myRefs from "./js/refs.js";
const { bodyEl, btnStart, btnStop } = myRefs;

const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyColor = () => {
  bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

let intervalId = null;

btnStart.addEventListener("click", onBtnStartClick);
function onBtnStartClick(e) {
  intervalId = setInterval(bodyColor, 500);
  btnStart.disabled = true;
}

btnStop.addEventListener("click", onBtnStopClick);
function onBtnStopClick(e) {
  clearInterval(intervalId);
  btnStart.disabled = false;
}
