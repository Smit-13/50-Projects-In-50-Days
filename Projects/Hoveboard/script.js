const container = document.getElementById('container');

const colors = ['#96BAF7', '#FBEEF8', '#C5F776', '#FF8B61', '#6AC799'];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const element = document.createElement('div');
  element.classList.add('square');
  element.addEventListener('mouseover', () => {
    setColor(element);
  });
  element.addEventListener('mouseout', () => {
    removeColor(element);
  });
  container.appendChild(element);
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
