const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  const textOutput = document.querySelector('[data-js="age-output"]');

  if (age >= 13 && age <= 19) {
    textOutput.innerHTML = "You are a teen";
    console.log("You are a teen.");
  } else if (age >= 20 || age >= 0) {
    textOutput.innerHTML = "You are not a teen.";
    console.log("You are not a teen.");
  } else {
    textOutput.innerHTML = "You are not born yet.";
    console.log("You are not born yet.");
  }

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
