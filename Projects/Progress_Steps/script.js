const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currantActive = 1;

next.addEventListener('click', () => {
  currantActive++;
  if (currantActive > circles.length) {
    currantActive = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currantActive--;
  if (currantActive < 1) {
    currantActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currantActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 95 + '%';

  if (currantActive === 1) {
    prev.disabled = true;
  } else if (currantActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
