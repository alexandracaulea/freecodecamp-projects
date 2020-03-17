const inputCelsius = document.querySelector("[name='celsius']");
const inputFahrenheit = document.querySelector("[name='fahrenheit']");
const formula = document.querySelector(".formula-value");

function roundNumber(elem) {
  return Math.round(+elem * 10000) / 10000;
}

function handleKeyRestriction(e) {
  const key = e.key;
  const pattern = /[^\d\-]/gi;

  if (pattern.test(key)) {
    e.preventDefault();
  }
}

function updateFormula(value = 0, result = 32) {
  if (value == -0 || value == +0) {
    value = 0;
  }
  if (result == -0 || result == +0) {
    result = 0;
  }
  formula.innerHTML = `(${Number(value)}<b>°C</b> &times; 9<span aria-label="divided by">/</span>5) + 32 = ${Number(
    result
  )}<b>°F</b>`;
}

function handleConversion({ target }) {
  let targetValue = target.value;
  const targetName = target.name;
  let convertedResult;
  if (targetValue === "") {
    if (targetName === "celsius") {
      inputFahrenheit.value = "";
    }
    if (targetName === "fahrenheit") {
      inputCelsius.value = "";
    }
    updateFormula();
    return;
  }
  if (targetName === "celsius") {
    convertedResult = roundNumber(targetValue * (9 / 5) + 32);
    inputFahrenheit.value = convertedResult;
    updateFormula(targetValue, convertedResult);
  }
  if (targetName === "fahrenheit") {
    convertedResult = roundNumber((targetValue - 32) * (5 / 9));
    inputCelsius.value = convertedResult;
    updateFormula(convertedResult, inputFahrenheit.value);
  }
}

inputCelsius.addEventListener("input", handleConversion);
inputCelsius.addEventListener("keypress", handleKeyRestriction);
inputFahrenheit.addEventListener("input", handleConversion);
inputFahrenheit.addEventListener("keypress", handleKeyRestriction);
