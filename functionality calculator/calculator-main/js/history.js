export { history, historyListItems, calculationHistory, historyAddItem, showHistory, historyClear };
import { memoryListItems, memory } from "./memory.js";
import { deleteBtn } from "./sandbox.js";

const history = document.querySelector(".history-text");
const historyListItems = document.querySelector(".history-show-item");
let calculationHistory = [];
let countId = 0;

const historyAddItem = (ope, res) => {
  calculationHistory.push({
    operationShow: ope,
    resultShow: res,
    id: countId,
  });
  countId++;
  if (historyListItems.style.display === "block" || historyListItems.style.display === "flex") {
    showHistory();
  }
};

history.addEventListener("click", (e) => {
  memoryListItems.style.display = "none";
  historyListItems.style.display = "block";
  history.classList.add("selected-list-item");
  memory.classList.remove("selected-list-item");
  if (calculationHistory.length > 0) {
    deleteBtn.style.display = "block";
  } else {
    deleteBtn.style.display = "none";
  }
  showHistory();
});

const showHistory = () => {
  historyListItems.innerHTML = "";
  if (calculationHistory.length > 0) {
    for (let item of calculationHistory) {
      const { operationShow, resultShow, id } = item;
      const listHistoryTwo = document.createElement("li");
      listHistoryTwo.id = id;
      listHistoryTwo.classList.add("r-text-two");
      listHistoryTwo.innerHTML = `${operationShow} <br> <span>${resultShow}</span>`;
      historyListItems.style.display = "flex";
      historyListItems.style.justifyContent = "flex-end";
      historyListItems.prepend(listHistoryTwo);
    }
    if (historyListItems.style.display !== "none") {
      deleteBtn.style.display = "block";
    }
  } else {
    historyListItems.innerHTML = "there is no history yet";
    historyListItems.style.display = "block";
  }
};
const historyClear = () => {
  calculationHistory = [];
  deleteBtn.style.display = "none";
  showHistory();
};
