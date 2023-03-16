const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
const item = list.querySelectorAll(".item");
item.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.outerText}`);
  let ul = el.querySelector("ul");
  console.log(`Elements: ${ul.children.length}`);
});
