

const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.getElementById('boxes');

createBtnRef.addEventListener('click', () => {
  createBoxes(inputRef.value)});
destroyBtnRef.addEventListener('click', () => { destroyBoxes() });

function createBoxes(amount) {
  divBoxesRef.style.marginTop = "20px";
  
  const arrayOfDivs = [];

  for (let i = 0; i < amount; i += 1) {
    arrayOfDivs[i] = document.createElement('div');
    arrayOfDivs[i].style.width = 30 + i*10 + 'px';
    arrayOfDivs[i].style.height = 30 + i*10 + 'px';
    arrayOfDivs[i].style.backgroundColor = getRandomHexColor();
  }
  divBoxesRef.append(...arrayOfDivs);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
  inputRef.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}