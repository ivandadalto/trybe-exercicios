const submitButton = document.querySelector('#submit-btn');
const clearButton = document.querySelector('#clear-btn')
function handleSubmit(event) {
  event.preventDefault();
}
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}

window.onload = () => {
  submitButton.add('click', handleSubmit);
  // clearButton.addEventListener('click', clearFields);
}
clearButton.addEventListener('click', clearFields);