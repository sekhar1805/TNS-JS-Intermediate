/*
## **Problem Statement**

Change the background and text colour of HTML page using JavaScript.

You will take the background colour input from user using event and change the colour using event listener.

**Valid Background Colour:**

- Red
- Blue
- Yellow
- Green
- *Default:* White

**Text colour for background colour:**

- White: Red, Blue, Green
- Black: Yellow & Default

Take only background colour input from the user.

### **Write any JS code in `script.js` file.**
*/

document.getElementById("changeColorButton").addEventListener("click", () => {
  const bgColorInput = document.getElementById("bgColorInput").value;
  let bgColor = "white";
  let textColor = "black";

  switch (bgColorInput.toLowerCase()) {
    case "red":
      bgColor = "red";
      textColor = "white";
      break;
    case "blue":
      bgColor = "blue";
      textColor = "white";
      break;
    case "yellow":
      bgColor = "yellow";
      break;
    case "green":
      bgColor = "green";
      textColor = "white";
      break;
  }
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
});

/*
const changeColor = () => {
  const bgColorInput = document
    .getElementById("bgColorInput")
    .value.toLowerCase();
  const colors = {
    red: { bgColor: "red", textColor: "white" },
    blue: { bgColor: "blue", textColor: "white" },
    yellow: { bgColor: "yellow", textColor: "black" },
    green: { bgColor: "green", textColor: "white" },
  };

  const { bgColor = "white", textColor = "black" } = colors[bgColor] || {};
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
};

document
  .getElementById("changeColorButton")
  .addEventListener("click", changeColor);
  */
