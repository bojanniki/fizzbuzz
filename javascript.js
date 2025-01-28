// Function to create
function showInstructions() {
  var instructions = document.getElementById("instructions");
  if (instructions.style.display === "none") {
    instructions.style.display = "block";
  } else {
    instructions.style.display = "none";
  }
}

let displayElement = document.getElementById("display");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
document.getElementById("stopButton").disabled = true; //locked buttons before the start of the function
document.getElementById("pauseButton").disabled = true;
document.getElementById("resumeButton").disabled = true;
let isStopped = false;

async function fizzBuzz() {
  document.getElementById("startInput").disabled = true; //locked the inputs at the start of the function
  document.getElementById("stopInput").disabled = true;
  document.getElementById("fizzInput").disabled = true;
  document.getElementById("buzzInput").disabled = true;
  document.getElementById("fizzBuzzInput").disabled = true;
  document.getElementById("fizzNumber").disabled = true; //enabling/disabling buttons before the start of the function
  document.getElementById("buzzNumber").disabled = true;
  document.getElementById("startButton").disabled = true;
  document.getElementById("resetButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
  document.getElementById("pauseButton").disabled = false;

  let startNumber = parseFloat(document.getElementById("startInput").value);
  let stopNumber = parseFloat(document.getElementById("stopInput").value);
  let fizzNumber = parseFloat(document.getElementById("fizzNumber").value);
  let buzzNumber = parseFloat(document.getElementById("buzzNumber").value);
  let fizz = document.getElementById("fizzInput").value || "Fizz"; // fizz is default
  let buzz = document.getElementById("buzzInput").value || "Buzz"; // Buzz is default
  let fizzBuzz = document.getElementById("fizzBuzzInput").value || "FizzBuzz"; // fizzBuzz is default

  // input validations
  if (isNaN(startNumber) || isNaN(stopNumber)) {
    displayElement.textContent = "Please enter valid numbers for the range.";
    return;
  }

  if (startNumber > stopNumber) {
    displayElement.textContent =
      "Start number should be less than or equal to the stop number.";
    return;
  }

  // display clear at the start
  displayElement.textContent = "";

  // fizzBuzz logic
  for (let i = startNumber; i <= stopNumber; i++) {
    // input values
    if (isStopped == true) {
      break;
    }
    let result = "";
    if (i % fizzNumber === 0 && i % buzzNumber === 0) {
      result = fizzBuzz;
    } else if (i % fizzNumber === 0) {
      result = fizz;
    } else if (i % buzzNumber === 0) {
      result = buzz;
    } else {
      result = i;
    }

    // Output the result with a delay
    displayElement.textContent = result;
    await delay(1000); // Add a delay of 1000 ms
  }
}
const stopButton = document.getElementById("stopButton"); // stop button functionality
stopButton.addEventListener("click", function () {
  isStopped = true;
  displayElement.textContent = "Stop button pressed";
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = true;
  document.getElementById("resumeButton").disabled = true;
  document.getElementById("pauseButton").disabled = true;
  document.getElementById("resetButton").disabled = false;
});
const resetButton = document.getElementById("resetButton"); // reset button functionality
resetButton.addEventListener("click", async function () {
  displayElement.textContent = "Reset button pressed";
  await delay(1000);
  displayElement.textContent = "";
  document.getElementById("startButton").disabled = false; //Reset input and button conditions
  document.getElementById("resetButton").disabled = false;
  document.getElementById("startInput").disabled = false;
  document.getElementById("stopInput").disabled = false;
  document.getElementById("fizzInput").disabled = false;
  document.getElementById("buzzInput").disabled = false;
  document.getElementById("fizzBuzzInput").disabled = false;
  document.getElementById("fizzNumber").disabled = false;
  document.getElementById("buzzNumber").disabled = false;
  document.getElementById("startInput").value = "";
  document.getElementById("stopInput").value = "";
  document.getElementById("fizzNumber").value = "";
  document.getElementById("buzzNumber").value = "";
  document.getElementById("fizzInput").value = "";
  document.getElementById("buzzInput").value = "";
  document.getElementById("fizzBuzzInput").value = "";
});
