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

async function fizzBuzz() {
  // input values
  let startNumber = parseFloat(document.getElementById("startInput").value);
  let stopNumber = parseFloat(document.getElementById("stopInput").value);
  let fizz = document.getElementById("fizzInput").value || "Fizz"; // fizz is default
  let buzz = document.getElementById("buzzInput").value || "Buzz"; // Buzz is default
  let fizzBuzz = document.getElementById("fizzBuzzInput").value || "FizzBuzz"; // fizzBuzz is default
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // Delay function

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
    let result = "";
    if (i % 3 === 0 && i % 5 === 0) {
      result = fizzBuzz;
    } else if (i % 3 === 0) {
      result = fizz;
    } else if (i % 5 === 0) {
      result = buzz;
    } else {
      result = i;
    }

    // Output the result with a delay
    displayElement.textContent = result;
    await delay(500); // Add a delay of 500 ms
  }
}
