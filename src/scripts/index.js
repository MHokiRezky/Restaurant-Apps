import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

const listRestaurant = (data) => {
  const restElement = document.querySelector(".posts");
  restElement.innerHTML = "";
  data.forEach((resto) => {
    const { name, pictureId, city, rating, description } = resto;
    const listResto = document.createElement("div");

    listResto.innerHTML = `
          <div class="post-item" tabindex="0">
              <img class="post-item__thumbnail"
                  src="${pictureId}" alt="${name} restaurant">
              <div class="post-item__content">
                  <h1 class"post-item__title">${name}</h1>
                  <div class="post-item__sub-content">
                  <P class="post-item__city">${city}</p>
                  <P class="post-item__rating">${rating}</p>
                  </div>
                  <P class="post-item__desription">${description}</p>
                  
              </div>
          </div>  
              `;

    restElement.appendChild(listResto);
  });
};
listRestaurant(data.restaurants);

// Navigation responsivity
const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", (event) => {
  drawer.classList.toggle("open");
  event.preventDefault();
});

hero.addEventListener("click", () => {
  drawer.classList.remove("open");
});

main.addEventListener("click", () => {
  drawer.classList.remove("open");
});
