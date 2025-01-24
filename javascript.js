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

async function fizzBuzz() {
  document.getElementById("startInput").disabled = true; //locked the inputs at the start of the function
  document.getElementById("stopInput").disabled = true;
  document.getElementById("fizzInput").disabled = true;
  document.getElementById("buzzInput").disabled = true;
  document.getElementById("fizzBuzzInput").disabled = true;
  document.getElementById("fizzNumber").disabled = true;
  document.getElementById("buzzNumber").disabled = true;
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
