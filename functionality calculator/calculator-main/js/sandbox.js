import { memoryListItems, calculationMemory, showMemory, memoryClear } from "./memory.js";
import { historyListItems, calculationHistory, historyAddItem, showHistory, historyClear } from "./history.js";
export { operationData, deleteBtn };
const dataNumber = document.querySelectorAll(".color-btn");
const outPutData = document.querySelector(".output");
const operationData = document.querySelector(".show-zero");
const parentElementNumber = document.querySelector(".btn-area");
const dot = document.querySelector(".dot");
const deleteBtn = document.querySelector(".delete-btn");

let percentResult = null;
let operandForPercent = "";
let operand = "";
let dataBaseOutPut = [];
let firstVal = "";
let secondVal = "";
let showOperation = "";
let result = null;
let clickButton;
let deleteLastNumberShow = null;
let showOpHistory = "";
let resultString = "";

parentElementNumber.addEventListener("click", (event) => {
  let classlist = event.target.classList.value;
  switch (classlist) {
    case "color-secondary first-row-btn5":
      clickButton = "&divide;";
      operandForPercent = "&divide;";
      operation(clickButton);
      break;
    case "color-secondary second-row-btn5":
      clickButton = "&times;";
      operandForPercent = "&times;";
      operation(clickButton);
      break;
    case "color-secondary third-row-btn5":
      clickButton = "&minus;";
      operandForPercent = "&minus;";
      operation(clickButton);
      break;
    case "color-secondary fourth-row-btn5":
      clickButton = "&plus;";
      operandForPercent = "&plus;";
      operation(clickButton);
      break;
    case "color-secondary fifth-row-btn5":
      equalOperation();
      break;
    case "color-secondary first-row-btn1":
      clickButton = "&percnt;";
      percentNumber();
      break;
    case "color-secondary second-row-btn1":
      clickButton = "&radic;";
      operation(clickButton);
      break;
    case "color-secondary third-row-btn1":
      clickButton = "&sup2";
      operation(clickButton);
      break;
    case "color-secondary fourth-row-btn1":
      clickButton = "&sup3";
      operation(clickButton);
      break;
    case "color-secondary fifth-row-btn1":
      clickButton = "1/x";
      operation(clickButton);
      break;
    case "color-secondary fifth-row-btn2":
      clickButton = "&plusmn;";
      operation(clickButton);
      break;
    case "color-secondary first-row-btn2":
      clickButton = "ce";
      operation(clickButton);
      deleteAllData();
      break;
    case "color-secondary first-row-btn3":
      clickButton = "c";
      deleteAllData();
      break;
    case "color-secondary first-row-btn4":
      clickButton = "del";
      deleteLastNumber();
      break;
  }
});

// done deleteAllData function
const deleteAllData = () => {
  outPutData.textContent = "";
  operationData.textContent = "0";
  dataBaseOutPut = [];
  firstVal = "";
  secondVal = "";
  showOperation = "";
  result = null;
  deleteLastNumberShow = null;
  percentResult = null;
  operandForPercent = "";
};
// done deleteLastNumber function
const deleteLastNumber = () => {
  if (operand === "" && dataBaseOutPut.length > 0) {
    if (dataBaseOutPut.length > 0) {
      dataBaseOutPut.pop();
      showNumber();
    } else {
      if (deleteLastNumberShow !== null) {
        outPutData.textContent = "";
      } else {
        outPutData.textContent = "";
        operationData.textContent = "0";
      }
    }
  }
};
// done dot button
dot.addEventListener("click", function () {
  if (!dataBaseOutPut.includes(".")) {
    if (dataBaseOutPut.length === 0) {
      dataBaseOutPut.push("0");
      dataBaseOutPut.push(".");
    } else {
      dataBaseOutPut.push(".");
    }
    showNumber();
  }
});
// done get number function
dataNumber.forEach((number) => {
  number.addEventListener("click", () => {
    if (dataBaseOutPut[0] === "0" && dataBaseOutPut.length === 1) {
      dataBaseOutPut.pop();
      dataBaseOutPut.push(number.textContent);
      showNumber();
    } else {
      dataBaseOutPut.push(number.textContent);
      showNumber();
    }
  });
});

const operation = (clickButton) => {
  if (
    clickButton === "&divide;" ||
    clickButton === "&times;" ||
    clickButton === "&minus;" ||
    clickButton === "&plus;"
  ) {
    if (dataBaseOutPut.length > 0 || firstVal !== "") {
      if (firstVal === "") {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          firstVal = dataBaseOutPut[i] + firstVal;
        }
      }
      operand = clickButton;
      showOperation = `${firstVal} ${operand} `;
      operationData.textContent = firstVal;
    }
  } else if (clickButton === "&radic;") {
    if (dataBaseOutPut.length > 0 || firstVal !== "") {
      if (firstVal === "") {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          firstVal = dataBaseOutPut[i] + firstVal;
        }
      }
      result = Math.sqrt(parseFloat(firstVal));
      operationData.textContent = String(result);
      operand = clickButton;
      showOperation = `${operand} ( ${firstVal} )`;
      firstVal = String(result);
    }
  } else if (clickButton === "&sup2") {
    if (dataBaseOutPut.length > 0 || firstVal !== "") {
      if (firstVal === "") {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          firstVal = dataBaseOutPut[i] + firstVal;
        }
      }
      result = Math.pow(parseFloat(firstVal), 2);
      operationData.textContent = String(result);
      showOperation = "sqr(" + String(firstVal) + ")";

      outPutData.innerHTML = "showOperation";
      firstVal = String(result);
    }
  } else if (clickButton === "&sup3") {
    if (dataBaseOutPut.length > 0 || firstVal !== "") {
      if (firstVal === "") {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          firstVal = dataBaseOutPut[i] + firstVal;
        }
      }
      result = Math.pow(parseFloat(firstVal), 3);
      operationData.textContent = String(result);
      operand = clickButton;
      showOperation = `cube(${firstVal})`;
      firstVal = String(result);
    }
  } else if (clickButton === "1/x") {
    if (dataBaseOutPut.length > 0 || firstVal !== "") {
      if (firstVal === "") {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          firstVal = dataBaseOutPut[i] + firstVal;
        }
      }
      result = 1 / parseFloat(firstVal);
      operationData.textContent = String(result);
      operand = clickButton;
      showOperation = `1/(${firstVal})`;
      firstVal = String(result);
    }
  } else if (clickButton === "&plusmn;") {
    if (dataBaseOutPut.length > 0 || firstVal !== "") {
      if (firstVal === "") {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          firstVal = dataBaseOutPut[i] + firstVal;
        }
      }
      if (firstVal.includes("-")) {
        firstVal = firstVal.replace("-", "");
        result = parseFloat(firstVal);
        firstVal = String(result);
      } else {
        firstVal = "-" + firstVal;

        result = parseFloat(firstVal);
        firstVal = String(result);
      }
      operationData.textContent = String(result);
      operand = clickButton;
    }
  }
  outPutData.innerHTML = showOperation;

  dataBaseOutPut = [];
};

const equalOperation = () => {
  outPutData.innerHTML = "";

  switch (operand) {
    case "&divide;":
      secondVal = "";
      if (dataBaseOutPut.length === 0 && result === null) {
        secondVal = firstVal;
      } else {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          secondVal = dataBaseOutPut[i] + secondVal;
        }
      }
      result = parseFloat(firstVal) / parseFloat(secondVal);
      operationData.textContent = String(result);
      break;
    case "&times;":
      secondVal = "";
      if (dataBaseOutPut.length === 0 && result === null) {
        secondVal = firstVal;
      } else {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          secondVal = dataBaseOutPut[i] + secondVal;
        }
      }
      result = parseFloat(firstVal) * parseFloat(secondVal);
      operationData.textContent = String(result);
      break;
    case "&minus;":
      secondVal = "";
      if (dataBaseOutPut.length === 0 && result === null) {
        secondVal = firstVal;
      } else {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          secondVal = dataBaseOutPut[i] + secondVal;
        }
      }
      result = parseFloat(firstVal) - parseFloat(secondVal);
      operationData.textContent = String(result);
      break;
    case "&plus;":
      secondVal = "";
      if (dataBaseOutPut.length === 0 && result === null) {
        secondVal = firstVal;
      } else {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          secondVal = dataBaseOutPut[i] + secondVal;
        }
      }
      result = parseFloat(firstVal) + parseFloat(secondVal);
      operationData.textContent = String(result);
      break;
  }
  if (operand === "") {
    firstVal = "0";
    outPutData.innerHTML = `${firstVal} =`;
    showOpHistory = `${firstVal} =`;
    resultString = `${firstVal} `;
  } else {
    outPutData.innerHTML = `${firstVal} ${operand} ${secondVal} = `;
    showOpHistory = `${firstVal} ${operand} ${secondVal} = `;
    resultString = String(result);
    historyAddItem(showOpHistory, resultString);
    firstVal = `${result}`;
    dataBaseOutPut = [];
    deleteLastNumberShow = result;
  }
};

const showNumber = () => {
  operationData.innerText = "";
  dataBaseOutPut.forEach((number) => {
    operationData.append(number);
  });
};

deleteBtn.addEventListener("click", () => {
  if (calculationHistory.length > 0 && historyListItems.style.display !== "none") {
    historyClear();
    deleteBtn.style.display = "none";
    showHistory();
  } else if (calculationMemory.length > 0 && memoryListItems.style.display !== "none") {
    memoryClear();
  }
});

function percentNumber() {
  if (dataBaseOutPut.length > 0 || firstVal !== "") {
    if (firstVal === "") {
      for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
        firstVal = dataBaseOutPut[i] + firstVal;
      }
    }
    if (percentResult !== null) {
      firstVal = String(percentResult);
    }
    if (secondVal === "") {
      for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
        secondVal = dataBaseOutPut[i] + secondVal;
      }
    } else {
      secondVal = firstVal;
    }
    percentResult = (parseFloat(firstVal) * parseFloat(secondVal)) / 100;
    outPutData.innerHTML = `${firstVal} ${operandForPercent} ${secondVal}`;
    secondVal = String(percentResult);
    dataBaseOutPut = secondVal;
    operationData.textContent = percentResult;
  }
}
(() => {
  if (historyListItems.style.display !== "none") {
    showHistory();
  } else if (memoryListItems.style.display !== "none") {
    showMemory();
  }
})();
