/**
 * Toggles the visibility of the instructions section.
 * If the instructions are visible, it hides them; otherwise, it shows them.
 * Updates the button text accordingly.
 */

function showInstructions() {
  const instructions = document.getElementById("instructions");
  const instructionsButton = document.getElementById("instructionsButton");
  if (instructions.style.display === "none") {
    instructions.style.display = "block";
    instructionsButton.textContent = "Hide Instructions";
  } else {
    instructions.style.display = "none";
    instructionsButton.textContent = "Show Instructions";
  }
}

/**
 * Initializes key variables and UI elements for the FizzBuzz game.
 *
 * - `displayElement`: Reference to the display area where numbers will be shown.
 * - `delay(ms)`: A helper function that returns a promise to create a delay.
 * - Disables the stop, pause, and resume buttons initially to prevent invalid actions.
 * - `isStopped`: Tracks whether the game has been stopped.
 * - `isPaused`: Tracks whether the game is currently paused.
 * - `currentNumber`: Stores the current number being processed.
 */

let displayElement = document.getElementById("display");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
document.getElementById("stopButton").disabled = true;
document.getElementById("pauseButton").disabled = true;
document.getElementById("resumeButton").disabled = true;
let isStopped = false;
let isPaused = false;
let currentNumber = null;

/**
 * Starts the FizzBuzz game by disabling input fields and enabling control buttons.
 *
 * - Disables input fields and buttons to prevent changes during execution.
 * - Enables the stop and pause buttons for user control.
 * - Retrieves user inputs, including start and stop numbers, Fizz/Buzz conditions, and custom labels.
 * - If the game was paused, resumes from the last processed number (`currentNumber`).
 * - Checks if either `startNumber` or `stopNumber` is not a valid number.
 * - If invalid, displays an error message and stops execution.
 * - checks if the start number is less or equal to the stop number
 * - if invalid, displays an error message
 * - clears the display element at the beginning of the function
 *  * Loops through numbers from `start` to `stopNumber`, applying FizzBuzz logic.
 * - If `isStopped` is true, exits the loop immediately.
 * - If `isPaused` is true, saves the current number and exits to allow resumption.
 * - Checks divisibility by `fizzNumber` and `buzzNumber` to determine the output:
 * - If divisible by both, assigns `fizzBuzz`.
 * - If divisible only by `fizzNumber`, assigns `fizz`.
 * - If divisible only by `buzzNumber`, assigns `buzz`.
 * - Otherwise, assigns the number itself.
 * - outputs to the display element with a delay of 1000 ms
 */
async function fizzBuzz() {
  document.getElementById("startInput").disabled = true;
  document.getElementById("stopInput").disabled = true;
  document.getElementById("fizzInput").disabled = true;
  document.getElementById("buzzInput").disabled = true;
  document.getElementById("fizzBuzzInput").disabled = true;
  document.getElementById("fizzNumber").disabled = true;
  document.getElementById("buzzNumber").disabled = true;
  document.getElementById("startButton").disabled = true;
  document.getElementById("resetButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
  document.getElementById("pauseButton").disabled = false;
  let startNumber = parseFloat(document.getElementById("startInput").value);
  let stopNumber = parseFloat(document.getElementById("stopInput").value);
  let fizzNumber = parseFloat(document.getElementById("fizzNumber").value);
  let buzzNumber = parseFloat(document.getElementById("buzzNumber").value);
  let fizz = document.getElementById("fizzInput").value || "Fizz";
  let buzz = document.getElementById("buzzInput").value || "Buzz";
  let fizzBuzz = document.getElementById("fizzBuzzInput").value || "fizzBuzz";
  let start;

  if (currentNumber !== null) {
    start = currentNumber;
  } else {
    start = startNumber;
  }

  if (isNaN(startNumber) || isNaN(stopNumber)) {
    displayElement.textContent = "Please enter valid numbers for the range.";
    return;
  }

  if (startNumber > stopNumber) {
    displayElement.textContent =
      "Start number should be less than or equal to the stop number.";
    return;
  }

  displayElement.textContent = "";
  for (let i = start; i <= stopNumber; i++) {
    if (isStopped == true) {
      break;
    }
    if (isPaused == true) {
      currentNumber = i;
      return;
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

    displayElement.textContent = result;
    await delay(1000);
  }
}

/**
 * Handles the stop button functionality.
 *
 * - Adds an event listener to the stop button.
 * - Sets `isStopped` to `true`, stopping the game loop.
 * - Updates the display to indicate the program has stopped.
 * - Disables the start, stop, pause, and resume buttons.
 * - Enables the reset button to allow restarting the game.
 */

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", function () {
  isStopped = true;
  displayElement.textContent = "Stop button pressed";
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = true;
  document.getElementById("resumeButton").disabled = true;
  document.getElementById("pauseButton").disabled = true;
  document.getElementById("resetButton").disabled = false;
});

/**
 * Handles the reset button functionality.
 *
 * - Adds an event listener to the reset button.
 * - Displays a reset message for 1000ms, then clears the display.
 * - Re-enables all input fields and buttons for a new game.
 * - Clears all input values to reset the game state.
 * - Sets `currentNumber` to `null` and resets `isStopped` and `isPaused` to `false`.
 */

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", async function () {
  displayElement.textContent = "Reset button pressed";
  await delay(1000);
  displayElement.textContent = "";
  document.getElementById("startButton").disabled = false;
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
  currentNumber = null;
  isStopped = false;
  isPaused = false;
});

/**
 * Handles the pause button functionality.
 *
 * - Adds an event listener to the pause button.
 * - Sets `isPaused` to `true`, stopping the current execution.
 * - Displays a message instructing the user to press "Resume" to continue.
 * - Disables all input fields and buttons except the resume button.
 */

const pauseButton = document.getElementById("pauseButton"); // reset button functionality
pauseButton.addEventListener("click", async function () {
  isPaused = true;
  displayElement.textContent =
    "Pause button pressed, press resume button to resume the fizzBuzz";
  document.getElementById("startInput").disabled = true;
  document.getElementById("stopInput").disabled = true;
  document.getElementById("fizzInput").disabled = true;
  document.getElementById("buzzInput").disabled = true;
  document.getElementById("fizzBuzzInput").disabled = true;
  document.getElementById("fizzNumber").disabled = true;
  document.getElementById("buzzNumber").disabled = true;
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = true;
  document.getElementById("resetButton").disabled = true;
  document.getElementById("resumeButton").disabled = false;
  document.getElementById("pauseButton").disabled = false;
});

/**
 * Handles the resume button functionality.
 *
 * - Sets `isPaused` to `false`, allowing the FizzBuzz game to resume.
 * - Disables all input fields and buttons to prevent further modifications.
 * - Calls the `fizzBuzz` function to continue the game from where it was paused.
 */
const resumeButton = document.getElementById("resumeButton");
resumeButton.addEventListener("click", async function () {
  isPaused = false;

  document.getElementById("startInput").disabled = true;
  document.getElementById("stopInput").disabled = true;
  document.getElementById("fizzInput").disabled = true;
  document.getElementById("buzzInput").disabled = true;
  document.getElementById("fizzBuzzInput").disabled = true;
  document.getElementById("fizzNumber").disabled = true;
  document.getElementById("buzzNumber").disabled = true;
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = true;
  document.getElementById("resetButton").disabled = true;
  document.getElementById("pauseButton").disabled = true;
  document.getElementById("resumeButton").disabled = true;
  fizzBuzz();
});
