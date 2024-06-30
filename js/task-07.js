const inputSize = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputSize.addEventListener('input', onInputChange);

function onInputChange(event) {
  const barRangeSize = event.currentTarget.value;
  textRef.style.fontSize = `${barRangeSize}px`;
}