const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

const elments = ingredients.map((elem) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = elem;
  return liEl;
});
ul.prepend(...elments);
console.log(ul);
