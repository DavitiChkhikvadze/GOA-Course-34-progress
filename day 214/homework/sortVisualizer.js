const barsContainer = document.getElementById("bars");
const generateBtn = document.getElementById("generate");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const restartBtn = document.getElementById("restart");

let bars = [];
let interval;
let paused = false;

// ქმნის რენდომულ ელემენტებს
generateBtn.addEventListener("click", () => {
  const num = document.getElementById("numElements").value || 20;
  barsContainer.innerHTML = "";
  bars = [];
  for (let i = 0; i < num; i++) {
    const height = Math.floor(Math.random() * 250) + 20;
    const div = document.createElement("div");
    div.className = "bar";
    div.style.height = height + "px";
    barsContainer.appendChild(div);
    bars.push(height);
  }
});

// Bubble Sort-ის მსგავსი ვიზუალიზაცია
startBtn.addEventListener("click", () => {
  let i = 0, j = 0;
  interval = setInterval(() => {
    if (!paused) {
      if (j < bars.length - i - 1) {
        if (bars[j] > bars[j + 1]) {
          [bars[j], bars[j + 1]] = [bars[j + 1], bars[j]];
          updateBars();
        }
        j++;
      } else {
        j = 0;
        i++;
        if (i >= bars.length) clearInterval(interval);
      }
    }
  }, 50);
});

pauseBtn.addEventListener("click", () => paused = !paused);
restartBtn.addEventListener("click", () => location.reload());

function updateBars() {
  const divs = document.querySelectorAll(".bar");
  divs.forEach((div, index) => {
    div.style.height = bars[index] + "px";
  });
}
