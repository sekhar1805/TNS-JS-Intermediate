/*
## **Problem Statement**

You are given a basic HTML counter by a client and have been told to add the functionality to it. The counter contains 3 buttons, Add, Subtract and Reset. If the user clicks on the Add button, 1 should be added to the value. If the user clicks on the Subtract button, 1 should be subtracted from the value. If reset is clicked, the value goes back to 0. Write JS code to implement the functionality.

**Hint:** Use onclick to attach respective events to the buttons
*/
let counter = 0;

function updateCounterDisplay() {
  document.getElementById("counterValue").textContent = counter;
}

function addOne() {
  counter += 1;
  updateCounterDisplay();
}

function subtractOne() {
  counter -= 1;
  updateCounterDisplay();
}

function resetValue() {
  counter = 0;
  updateCounterDisplay();
}
