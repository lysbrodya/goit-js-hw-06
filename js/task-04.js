const value = document.querySelector("#value");
let counterValue = 0;
const btnSub = document.querySelector('button[data-action="decrement"]');
const btnAdd = document.querySelector('button[data-action="increment"]');
btnSub.addEventListener("click", (ev) => {
  counterValue -= 1;
  console.log(counterValue);
  value.textContent = counterValue;
});
btnAdd.addEventListener("click", (ev) => {
  counterValue += 1;
  console.log(counterValue);
  value.textContent = counterValue;
});
