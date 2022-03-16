const dataNumber = document.querySelectorAll(".color-btn");
const outPutData = document.querySelector(".output");
const operationData = document.querySelector(".show-zero");
const parentElementNumber = document.querySelector(".btn-area");
const history = document.querySelector(".history-text");
const historyItem = document.querySelector(".history-show-item");
const memoryList = document.querySelector(".memory-text");
const dot = document.querySelector(".dot");
const deleteBtn = document.querySelector(".delete-btn");
let calculationHistory = [];
let operand = "";
let dataBaseOutPut = [];
let firstVal = "";
let secondVal = "";
let showOperation = "";
let result = null;
let operandForEqual = "";
let shoHistoryResult = "";
let clickButton;
let deleteLastNumberShow = null;
let countId = 0;
let showOpHistory = "";
historyItem.textContent = "There's no history yet";
let resultString = "";

historyAddItem = (ope, res) => {
  debugger;
  calculationHistory.push({
    operationShow: ope,
    resultShow: res,
    id: countId,
  });
  countId++;
  showHistory();
};

parentElementNumber.addEventListener("click", (event) => {
  let classlist = event.target.classList.value;
  switch (classlist) {
    case "color-secondary first-row-btn5":
      clickButton = "&divide;";
      operation(clickButton);
      break;
    case "color-secondary second-row-btn5":
      clickButton = "&times;";
      operation(clickButton);
      break;
    case "color-secondary third-row-btn5":
      clickButton = "&minus;";
      operation(clickButton);
      break;
    case "color-secondary fourth-row-btn5":
      clickButton = "&plus;";
      operation(clickButton);
      break;
    case "color-secondary fifth-row-btn5":
      equalOperation();
      break;
    case "color-secondary first-row-btn1":
      clickButton = "&percnt;";
      operation(clickButton);
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
deleteAllData = () => {
  outPutData.textContent = "";
  operationData.textContent = "0";
  dataBaseOutPut = [];
  firstVal = "";
  secondVal = "";
  showOperation = "";
  result = null;
  deleteLastNumberShow = null;
};
// done deleteLastNumber function
deleteLastNumber = () => {
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
  } else if (clickButton === "&percnt;") {
    if (dataBaseOutPut.length > 0 || firstVal !== "") {
      if (firstVal === "") {
        for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
          firstVal = dataBaseOutPut[i] + firstVal;
        }
      }
      operand = clickButton;
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
    console.log(firstVal);
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
operandForEqual = operand;

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
      console.log(dataBaseOutPut);
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
      console.log(dataBaseOutPut);
      operandForEqual = "";
      break;
  }
  if (operand === "") {
    debugger;
    // for (let i = dataBaseOutPut.length - 1; i >= 0; i--) {
    //   firstVal = dataBaseOutPut[i] + firstVal;
    // }
    firstVal = "00";
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

const showHistory = () => {
  historyItem.innerHTML = "";
  deleteBtn.style.display = "block";

  for (item of calculationHistory) {
    const { operationShow, resultShow, id } = item;
    const listHistoryTwo = document.createElement("li");
    listHistoryTwo.id = id;
    listHistoryTwo.classList.add("r-text-two");
    listHistoryTwo.innerHTML = `${operationShow} <br> ${resultShow}`;
    historyItem.style.display = "flex";
    historyItem.style.justifyContent = "flex-end";
    historyItem.prepend(listHistoryTwo);
  }
};

deleteBtn.addEventListener("click", () => {
  calculationHistory = [];
  historyItem.innerHTML = " there is no history";
  historyItem.style.display = "block";
  deleteBtn.style.display = "none";
});
