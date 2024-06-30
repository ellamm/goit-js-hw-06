function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const btnchangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnchangeColor.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  const currentBackgroundColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentBackgroundColor;
  spanColor.textContent = currentBackgroundColor;
}