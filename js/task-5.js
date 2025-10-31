function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEement = document.querySelector('body');
const btnElement = document.querySelector('.change-color');
const spanElement = document.querySelector('.color');

btnElement.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyEement.style.backgroundColor = color;
  spanElement.textContent = color;
})
