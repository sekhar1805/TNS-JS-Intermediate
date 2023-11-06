/*
## **Problem Statement**

Make a simple calculator using HTML.

The calculator sould

- Add two number
- Subtract two number
- Multiply two number
- Devide two number

**Constaints:**

- There should be two field to input two number.
- There should be one field to output the result.
- There should be four buttons for four operations.
- All text should be under `h2` header tag.

### **Write any JS code in `script.js` file.**
*/

document.getElementById("addButton").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result").textContent = result;
});

document.getElementById("subtractButton").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 - num2;
  document.getElementById("result").textContent = result;
});

document.getElementById("multiplyButton").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 * num2;
  document.getElementById("result").textContent = result;
});

document.getElementById("divideButton").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (num2 !== 0) {
    const result = num1 / num2;
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent = "Error: Division by zero";
  }
});
