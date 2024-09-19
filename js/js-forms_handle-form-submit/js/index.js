console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  console.log(formElements.firstName.value);
  const ageValue = Number(formElements.age.value);
  const badnessValue = Number(formElements.badness.value);
  console.log(ageValue + badnessValue);
  event.target.elements.firstName.focus();
  event.target.reset();
});
