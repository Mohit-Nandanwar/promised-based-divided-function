// Arrow function that returns a Promise for division
const divideNumbers = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Error: Division by zero is not allowed.");
    } else {
      resolve(num1 / num2);
    }
  });
};


const displayResult = (message, isError = false) => {
  const resultsDiv = document.getElementById("results");
  const p = document.createElement("p");
  p.textContent = message;
  p.className = isError ? "error" : "success";
  resultsDiv.appendChild(p);
};


const testCases = [
  { a: 10, b: 2 },   
  { a: 15, b: 3 },  
  { a: 7, b: 0 },    
  { a: 20, b: 5 },   
  { a: 9, b: -3 }
];


testCases.forEach(({ a, b }) => {
  divideNumbers(a, b)
    .then(result => displayResult(`${a} ÷ ${b} = ${result}`))
    .catch(error => displayResult(`${a} ÷ ${b} → ${error}`, true));
});
