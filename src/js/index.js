console.log("It works!");

const calcResult = document.querySelector(".calc__result");
const calcInput = document.querySelector(".calc__input");
const btnClear = document.getElementById("btn-clear");
const btnAddition = document.getElementById("btn-addition");
const btnEquals = document.getElementById("btn-equals");

// Result row in calculation - will be used for sub-results and final result
const result = (number) => {
  calcResult.innerHTML = number;
};

subInput = 0;

const input = (number) => {
  if (number == null) {
    calcInput.addEventListener("input", (e) => {
      // console.log(e.target.value);
      subInput = e.target.value;
    });
  } else {
    subInput = number;
  }
  return subInput;
};

// Clear button that will clear Result row
btnClear.addEventListener("click", () => {
  console.log("Clear button click");
  result(0);
  calcInput.value = input(0);
});

// Handeling Additon
btnAddition.addEventListener("click", () => {
  console.log("Addition button click");
  console.log(input());
  result(input());
});

// Handeling Equals
btnEquals.addEventListener("click", () => {
  console.log("Equals button click");
});
