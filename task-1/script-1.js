document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".buttons")
    .addEventListener("click", function (event) {
      const target = event.target;
      if (target.matches("button")) {
        const value = target.textContent;
        if (value === "=") {
          calculateResult();
        } else if (value === "C") {
          clearResult();
        } else if (value === "%") {
          calculatePercentage();
        } else if (value === "+/-") {
          toggleSign();
        } else {
          appendToResult(value);
        }
      }
    });

  // Add event listeners for keyboard input
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (
      !isNaN(key) ||
      key === "." ||
      key === "*" ||
      key === "/" ||
      key === "-" ||
      key === "+"
    ) {
      appendToResult(key);
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      clearLastCharacter();
    }
  });
});

function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function clearLastCharacter() {
  let currentInput = document.getElementById("result").value;
  document.getElementById("result").value = currentInput.slice(0, -1);
}

function calculatePercentage() {
  let currentInput = document.getElementById("result").value;
  let percentage = parseFloat(currentInput) / 100;
  document.getElementById("result").value = percentage;
}

function toggleSign() {
  let currentInput = document.getElementById("result").value;
  // Check if the number is negative
  if (currentInput.startsWith("-")) {
    // Remove the negative sign if it exists
    document.getElementById("result").value = currentInput.substr(1);
  } else {
    // Add a negative sign if it's positive or zero
    document.getElementById("result").value = "-" + currentInput;
  }
}

function calculateResult() {
  let expression = document.getElementById("result").value;
  try {
    const result = evalExpression(expression);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function evalExpression(expression) {
  const operators = /[+\-*/]/g;
  const parts = expression.split(operators);
  const operands = parts
    .filter((part) => part !== "")
    .map((part) => parseFloat(part));
  const ops = expression.match(operators);

  let result = operands[0];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const nextOperand = operands[i + 1];
    switch (op) {
      case "+":
        result += nextOperand;
        break;
      case "-":
        result -= nextOperand;
        break;
      case "*":
        result *= nextOperand;
        break;
      case "/":
        if (nextOperand === 0) {
          throw new Error("Division by zero");
        }
        result /= nextOperand;
        break;
      default:
        throw new Error("Invalid operator");
    }
  }
  return result;
}
