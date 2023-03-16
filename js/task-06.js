const inputEl = document.querySelector("#validation-input");
const validInput = inputEl.addEventListener("blur", (el) => {
  //   console.log(inputEl.dataset.length);
  // if (inputEl.value.length === inputEl.dataset.length.value) {
  if (inputEl.value.length === 6) {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  }
  inputEl.classList.remove("valid");
  return inputEl.classList.add("invalid");
});
