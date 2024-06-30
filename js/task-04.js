let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const currentValue = document.getElementById('value');

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  currentValue.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  currentValue.textContent = counterValue;
});