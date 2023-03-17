const inputEl = document.querySelector("#validation-input");
const validInput = inputEl.addEventListener("blur", () => {
  //   console.log(inputEl.dataset.length);
  const dataLeng = document.querySelector('input[data-length="6"]');
  // console.log(typeof inputEl.dataset.length.length);
  if (inputEl.value.length === parseInt(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  }
  inputEl.classList.remove("valid");
  return inputEl.classList.add("invalid");
});
