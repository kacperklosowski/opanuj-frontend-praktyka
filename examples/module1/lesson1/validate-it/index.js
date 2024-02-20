const VALIDATION_MESSAGES = {
  ERROR: 'Invalid number. Please try again.',
  SUCCESS: 'The number is valid'
};

function validateNumber(number) {
  const validators = [
    (number) => number > 0,
    (number) => number < 100,
    (number) => number % 2 === 0,
    (number) => Number.isInteger(number)
  ];

  return validators.every(validator => validator(number));
}

function handleValidationButtonClick(value, validationResult) {
  const isValid = validateNumber(value);

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

    const isValidateButton = event.target.id === 'validateButton';
    const isClearButton = event.target.id === 'clearButton';
    const inputValue = +validationInput.value;

    if (isValidateButton) {
      handleValidationButtonClick(inputValue, validationResult);
    } else if (isClearButton) {
      handleClearButtonClick(validationInput, validationResult);
    }
  });
}

main();
