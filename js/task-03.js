const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector("ul");
let elImg = ``;
images.forEach((image) => {
  elImg += `<li  ><img class = "task3" src =${image.url} alt = ${image.alt}></li>`;
});
ul.insertAdjacentHTML("beforeend", elImg);

// const elments = images.map(({ url, alt }) => {
//   const liEl = document.createElement("li");
//   const ElImage = document.createElement("img");
//   ElImage.src = url;
//   ElImage.alt = alt;
//   liEl.prepend(ElImage);
//   return liEl;
// });
// ul.insertAdjacentHTML("beforeend", liEl);
// console.log(ul);

// const list = document.createElement("ul");
// list.classList.add("country-list");

// document.body.append(list);

// let backup = ``;

// countries.forEach((country) => {
//   backup += `<li><p class = 'name'>${country.name}</p> <p>${country.area}</p></li>`;
// });

// list.insertAdjacentHTML("beforeend", backup);
