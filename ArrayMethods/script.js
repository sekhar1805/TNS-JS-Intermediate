/*
1. Consider an array A = [2,5,4,7,3] and write a JavaScript code to create new array 'B' having square of each element of array A. Print the output on console. (0.5 marks)
2. Find the addition of all elements in an Array C = [45,2,4,7,85]. (0.25 marks)
3. Find the duplicate elemenets in an Array D = [4,8,6,4,8,6,1,2,9] (0.25 marks)
*/

const arrA = [2, 5, 4, 7, 3];

const arrB = [];

for (let i = 0; i < arrA.length; i++) {
  const square = arrA[i] ** 2;
  arrB.push(square);
}
console.log(arrB);

const arrC = [45, 2, 4, 7, 85];
let sum = 0;
for (let i = 0; i < arrC.length; i++) {
  sum += arrC[i];
}
console.log("The sum of elements in the array is:", sum);

const arrD = [4, 8, 6, 4, 8, 6, 1, 2, 9];

const duplicate = [];
const seen = new Set();

for (const element of arrD) {
  if (seen.has(element) && !duplicate.includes(element)) {
    duplicate.push(element);
  } else {
    seen.add(element);
  }
}
console.log(duplicate);
