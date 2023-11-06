/*
## **Problem Statement**

Write an HTML script, which will tell the user the number of words and number of sentences the user writes, while the user is writing.

Use Event Listener and Query Selector in your script.

### **Write any JS code in `script.js` file.**
*/
const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");

textInput.addEventListener("input", () => {
  const text = textInput.value.trim();
  const words = text.split(/\s+/).filter((word) => word !== "");
  const sentences = text
    .split(/[.!?]/)
    .filter((sentence) => sentence.trim() !== "");

  wordCount.textContent = words.length;
  sentenceCount.textContent = sentences.length;
});
