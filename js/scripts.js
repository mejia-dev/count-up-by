// Business Logic
function isEmpty(testValue) {
  return (testValue === 0 || testValue === null);
}


function countUpBy() {
  event.preventDefault();
  const countTo = parseInt(document.getElementById("countTo").value);
  const countBy = parseInt(document.getElementById("countBy").value);
  if (isEmpty(countTo) || isEmpty(countBy)) {
      printResult("input a different number");
  } else {
    let result = 0;
    for (let i = 0; i <= countTo; i +=countBy) {
      result = i;
      console.log(i);
      printResult(result);
    }
  }
}


// UI Logic
window.addEventListener("load", function () {
  this.document.getElementById("formForm").addEventListener("submit", countUpBy)
});

function printResult(input) {
  const resultsDiv = document.getElementById("resultsDiv")
  let p = document.createElement("p")
  p.append(input);
  resultsDiv.append(p);
}