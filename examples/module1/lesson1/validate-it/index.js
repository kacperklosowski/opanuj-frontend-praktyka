const VALIDATION_MESSAGES = {
  ERROR: 'Invalid number. Please enter a number between 0 and 100',
  SUCCESS: 'The number is valid'
};

function validate(number) {
  const validators = [
    (number) => number > 0,
    (number) => number < 100,
    (number) => number % 2 === 0,
    (number) => Number.isInteger(number)
  ];

  return validators.every(validator => validator(number));
}

function handleValidationButtonClick(value, validationResult) {
  const isValid = validate(value);

  isValid ? validationResult.innerHTML = VALIDATION_MESSAGES.SUCCESS : validationResult.innerHTML = VALIDATION_MESSAGES.ERROR;
}

function handleClearButtonClick(validationInput, validationResult) {
  validationInput.value = '';
  validationResult.innerHTML = '';
}

function main() {
  const validationInput = document.getElementById('validationInput');
  const validationButtons = document.getElementById('validationButtons');
  const validationResult = document.getElementById('validationResult');

  validationButtons.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') { // listen for button clicks only
      return;
    }

    const isValidationButton = event.target.id === 'validationButton';
    const isClearButton = event.target.id === 'clearButton';
    const inputValue = +validationInput.value;

    if (isValidationButton) {
      handleValidationButtonClick(inputValue, validationResult);
    } else if (isClearButton) {
      handleClearButtonClick(validationInput, validationResult);
    }
  });
}

main();
