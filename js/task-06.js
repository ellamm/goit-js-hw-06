const textInput = document.getElementById('validation-input');
const dataLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", onInputBlur);

function onInputBlur (event) {
  const inputTextLength = event.currentTarget.value.length;

  if (inputTextLength === dataLength) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
  else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  };
};