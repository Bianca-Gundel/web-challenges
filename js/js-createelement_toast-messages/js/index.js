console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();
  console.log("It works!");
  const newToast = document.createElement("LI");
  newToast.textContent = "I'm a toast message.";
  newToast.classList.add("toast-container__message");
  toastContainer.append(newToast);
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
