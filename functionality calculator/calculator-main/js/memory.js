export { memoryListItems, memory, calculationMemory, memoryRestoreValue, showMemory, memoryClear, callShowMemory };
import { history, historyListItems } from "./history.js";
import { operationData, deleteBtn, restoreMemory } from "./sandbox.js";

const memoryBtn = document.querySelector(".memory-btn");
const memoryListItems = document.querySelector(".memory-show-item");
const memory = document.querySelector(".memory-text");
const clearMemoryBtn = document.querySelector(".memory-btn1");
const restoreMemoryBtn = document.querySelector(".memory-btn2");

let memoryRestoreValue;
let calculationMemory = [];
let countMemoryId = 0;

const showMemory = () => {
  memoryListItems.innerHTML = "";
  if (calculationMemory.length > 0) {
    for (let memoryItems of calculationMemory) {
      const { memoryItem, id } = memoryItems;
      const listMemory = document.createElement("li");
      listMemory.id = id;
      listMemory.classList.add("r-text-two");
      listMemory.innerHTML = `${memoryItem}`;
      memoryListItems.style.display = "flex";
      memoryListItems.style.justifyContent = "flex-end";
      memoryListItems.style.flexDirection = "column";
      memoryListItems.style.alignItems = "flex-end";
      memoryListItems.prepend(listMemory);
    }
    if (memoryListItems.style.display !== "none") {
      deleteBtn.style.display = "block";
    }
  } else {
    memoryListItems.innerHTML = "there's nothing saved in memory";
    memoryListItems.style.display = "block";
  }
};

const memoryAddItem = () => {
  calculationMemory.push({
    memoryItem: operationData.textContent,
    id: countMemoryId,
  });
  countMemoryId++;
  if (memoryListItems.style.display === "block" || memoryListItems.style.display === "flex") {
    showMemory();
  }
  restoreMemoryBtn.classList.remove("memory-disabled");
  restoreMemoryBtn.style.cursor = "default";
  restoreMemoryBtn.addEventListener("mouseover", () => {
    restoreMemoryBtn.style.backgroundColor = "#d1d1d1";
  });
  restoreMemoryBtn.addEventListener("mouseout", () => {
    restoreMemoryBtn.style.backgroundColor = "#e6e6e6";
  });
  clearMemoryBtn.classList.remove("memory-disabled");
  clearMemoryBtn.style.cursor = "default";
  clearMemoryBtn.addEventListener("mouseover", () => {
    clearMemoryBtn.style.backgroundColor = "#d1d1d1";
  });
  clearMemoryBtn.addEventListener("mouseout", () => {
    clearMemoryBtn.style.backgroundColor = "#e6e6e6";
  });
};
memoryBtn.addEventListener("click", (e) => {
  let memoryBtnClick = e.target.classList.value;
  switch (memoryBtnClick) {
    case "memory-btn-style memory-btn1":
      memoryClear();
      break;
    case "memory-btn-style memory-btn2":
      memoryRestore();
      break;
    case "memory-btn-style memory-btn3":
      if (calculationMemory.length === 0) {
        memoryAddItem();
      } else {
        memoryPlus();
      }
      break;
    case "memory-btn-style memory-btn4":
      if (calculationMemory.length === 0) {
        memoryAddItem();
      } else {
        memoryMenus();
      }
      break;
    case "memory-btn-style memory-btn5":
      memoryAddItem();
      break;
    case "memory-btn-style memory-btn6":
      break;
  }
});
const memoryPlus = () => {
  let memoryPlusValue = calculationMemory[calculationMemory.length - 1].memoryItem;
  memoryPlusValue = parseFloat(memoryPlusValue) + parseFloat(operationData.textContent);
  calculationMemory[calculationMemory.length - 1].memoryItem = memoryPlusValue;
  callShowMemory();
};

const memoryMenus = () => {
  let memoryMenusValue = calculationMemory[calculationMemory.length - 1].memoryItem;
  memoryMenusValue = parseFloat(memoryMenusValue) - parseFloat(operationData.textContent);
  calculationMemory[calculationMemory.length - 1].memoryItem = memoryMenusValue;
  callShowMemory();
};
const memoryClear = () => {
  calculationMemory = [];
  clearMemoryBtn.classList.add("memory-disabled");
  restoreMemoryBtn.classList.add("memory-disabled");
  deleteBtn.style.display = "none";
  callShowMemory();
};
const memoryRestore = () => {
  memoryRestoreValue = calculationMemory[calculationMemory.length - 1].memoryItem;
  restoreMemory();
};

const callShowMemory = () => {
  if (memoryListItems.style.display === "block" || memoryListItems.style.display === "flex") {
    showMemory();
  }
};
memory.addEventListener("click", (e) => {
  historyListItems.style.display = "none";
  memoryListItems.style.display = "block";
  memory.classList.add("selected-list-item");
  history.classList.remove("selected-list-item");
  if (calculationMemory.length > 0) {
    deleteBtn.style.display = "block";
  } else {
    deleteBtn.style.display = "none";
  }
  showMemory();
});
