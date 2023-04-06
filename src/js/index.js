// Select Result row of calculator
const calcResult = document.querySelector(".calc__result");
// Select Input row of calculator
const calcInput = document.querySelector(".calc__input");
// Select all buttons containing 'calc_btn' class
const buttons = document.querySelectorAll("button[class*='calc__btn']");

let calculation = [];
let accumulativeCalc;

// Function handeling calculation
const calculate = (button) => {
  const value = button.textContent;

  if (value == "C") {
    calculation = [];
    calcResult.textContent = 0;
    calcInput.textContent = 0;
    calcInput.value = 0;
  } else if (value == "=") {
    console.log(accumulativeCalc);
    calcResult.innerHTML = eval(accumulativeCalc);
  } else {
    calculation.push(value);
    console.log(calculation);
    accumulativeCalc = calculation.join("");
    console.log(accumulativeCalc);
    calcInput.textContent = accumulativeCalc;
    calcInput.value = accumulativeCalc;
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

// Result row in calculation - will be used for sub-results and final result
const result = (number) => {
  calcResult.innerHTML = number;
};
