const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.oninput = function () {
  if (nameInput.value === '') {
    nameOutput.innerHTML = 'Anonymous';
  } else {
    nameOutput.innerHTML = nameInput.value;
  }
};
console.log(nameOutput.innerHTML);