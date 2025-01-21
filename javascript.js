// Function to create
function showInstructions() {
  var instructions = document.getElementById("instructions");
  if (instructions.style.display === "none") {
    instructions.style.display = "block";
  } else {
    instructions.style.display = "none";
  }
}
let isPaused = false;
let isStopped = false;
let displayElement = document.getElementById("display");
function fizzBuzz() {
  let startNumber = parseFloat(document.getElementById("start-input").value);
  let stopNumber = parseFloat(document.getElementById("stop-input").value);
  let fizz = document.getElementById("fizz-input").value;
  let buzz = document.getElementById("Buzz-input").value;
  let fizzBuzz = document.getElementById("fizzBuzz-input").value;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //created the delay
  displayElement.textContent = ""; //Clearing the display at the start

  const stopButton = document.getElementById("stopButton"); //created the stop button
  stopButton.addEventListener("click", () => {
    isStopped = true; // Set the flag to true when the button is clicked
    displayElement.textContent = "Loop stopped";
  });
}
if (
  !Number.isInteger(startNumber) ||
  !Number.isInteger(stopNumber) ||
  startNumber <= 0 ||
  stopNumber <= 0
) {
  displayElement.textContent = "Please input a positive integer";
}
