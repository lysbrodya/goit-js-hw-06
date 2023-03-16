function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const lol = btnChangeColor.addEventListener("click", (el) => {
  body.style.backgroundColor = getRandomHexColor();
});
