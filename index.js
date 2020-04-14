const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const switchColors = {
  isActive: false,
  intervalId: null,

  start() {
    this.isActive = true;

    if (this.isActive) {
      refs.startButton.disabled = true;
    }

    this.intervalId = setInterval(() => {
      const randomColor = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.style.backgroundColor = colors[randomColor];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    refs.startButton.disabled = false;
  },
};

refs.startButton.addEventListener(
  'click',
  switchColors.start.bind(switchColors),
);
refs.stopButton.addEventListener('click', switchColors.stop.bind(switchColors));

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
