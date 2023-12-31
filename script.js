const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.querySelector("button");
//event listener
button.addEventListener("click", () => {
  addTask();
});
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    storeData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    storeData();
  }
});
//Functions
const addTask = function () {
  if (inputBox.value === "") {
    alert("Add a new Task!");
  } else {
    let newTask = `<li>${inputBox.value}<span>🗑️</span></li>`;
    listContainer.insertAdjacentHTML("afterbegin", newTask);
  }
  inputBox.value = "";
  storeData();
};
//save in local storage then call it
function storeData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
//creare un estensione per google
