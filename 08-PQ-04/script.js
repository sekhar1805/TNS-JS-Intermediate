// IIFE to display "App is loading" on page reload
(function () {
  console.log("App is loading");
})();

// IIFE to handle background color change on "LOAD" button click
(function () {
  document.getElementById("loadButton").addEventListener("click", function () {
    const validColors = ["red", "blue", "green", "black", "yellow", "orange"];
    const userColor = prompt("Enter your favorite color:").toLowerCase();
    if (validColors.includes(userColor)) {
      document.body.style.backgroundColor = userColor;
      console.log("App is loaded");
    } else {
      console.error("INVALID COLOUR");
    }
  });
})();
