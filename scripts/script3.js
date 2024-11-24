import { filterByCategory } from "./script.js";
// console.log(filterByCategory);
import { endPoints } from "./script.js";
// console.log(endPoints);
import { mealSelect } from "./script.js";
// console.log(mealSelect);
import { recipeOptionFront } from "./script.js";
// console.log(recipeOptionFront);

// adds meal catagories as a filter option
async function categorySelect() {
  const data = await fetch(`${endPoints.mealCat}`);
  // console.log(data);
  const jsonData = await data.json();
  // console.log(jsonData.meals, "stuff");
  const mealName = jsonData.meals;
  const newElement0 = document.createElement("option");
  newElement0.id = `categories`;
  newElement0.textContent = `Recipes by Category`;
  filterByCategory.appendChild(newElement0);
  mealName.forEach((item) => {
    const newElement = document.createElement("option");
    newElement.value = item.strCategory;
    newElement.textContent = item.strCategory;
    filterByCategory.appendChild(newElement);
    // console.log(newElement);
  });
}
categorySelect();

// fetch data from the API
filterByCategory.addEventListener("change", () => {
  // console.log("Select options clicked");
  mealSelect.innerHTML = ""; // clear the options in the dropdown menu
  async function fetchData() {
    const selectedOrigin = filterByCategory.value;
    // console.log(selectedOrigin);
    selectedOrigin.toLowerCase();
    const selectedRecipes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedOrigin}`
    );
    const jasonData1 = await selectedRecipes.json();
    // console.log(jasonData1.meals);
    jasonData1.meals.forEach((item) => {
      const newElement = document.createElement("option");
      newElement.id = item.strMeal;
      newElement.textContent = item.strMeal;
      mealSelect.appendChild(newElement);
    });
  }
  fetchData();
});

mealSelect.addEventListener("change", (event) => {
  async function recipeCard() {
    event.target.value.toLowerCase();
    // console.log(event.target.value);
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    recipeOptionFront.innerHTML = "";
    let jason = jsonData.meals;
    jason.forEach((item) => {
      const newH2 = document.createElement("h2");
      newH2.textContent = item.strMeal;
      recipeOptionFront.appendChild(newH2);
      const newImg = document.createElement("img");
      newImg.src = item.strMealThumb;
      newImg.class = "img";
      newImg.style.width = "200px";
      recipeOptionFront.appendChild(newImg);
      const newP = document.createElement("p");
      newP.textContent = item.strInstructions;
      recipeOptionFront.appendChild(newP);
      // const newBtn = document.createElement("button");
      // newBtn.class = "flipButton";
      // newBtn.textContent = "More...";
      // recipeOptionFront.appendChild(newBtn);
    });
  }
  recipeCard();
});
