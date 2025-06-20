const counter = document.getElementById('counter');
const highScore = document.getElementById('highScore');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');
const clickSound = document.getElementById('clickSound');

let count = 0;
let best = localStorage.getItem('highScore') || 0;
highScore.textContent = best;

clickBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
  clickSound.currentTime = 0;
  clickSound.play();

  if (count > best) {
    best = count;
    localStorage.setItem('highScore', best);
    highScore.textContent = best;
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});
