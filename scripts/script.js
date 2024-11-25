export const filterByOrigin = document.querySelector("#originSelect");
// console.log(filterByOrigin);
export const filterByCategory = document.querySelector("#categorySelect");
// console.log(filterByCategory);
export const mealSelect = document.querySelector("#mealDropDown");
// console.log(mealSelect);
export const recipeCard = document.querySelector(".card");
// console.log(recipeCard);
export const recipeOptionFront = document.querySelector(".front");
// console.log(recipeOptionFront);
export const recipeOptionBack = document.querySelector(".back");
// console.log(recipeOptionBack);
// export const selectedOrigin = filterByCategory.value;
// selectedOrigin.toLowerCase();
// console.log(selectedOrigin);

export const endPoints = {
  mealOrigin: `https://www.themealdb.com/api/json/v1/1/list.php?a=list`,
  mealByOrigin: `https://www.themealdb.com/api/json/v1/1/filter.php?a=`,
  mealCat: `https://www.themealdb.com/api/json/v1/1/list.php?c=list`,
  mealByCategory: `https://www.themealdb.com/api/json/v1/1/filter.php?c=`,
  random: `https://www.themealdb.com/api/json/v1/1/random.php`,
};

const ranRecipe = document.createElement("option");
ranRecipe.value = "random";
ranRecipe.textContent = "Random Recipe";
mealDropDown.appendChild(ranRecipe);
const countryOrigin = document.createElement("option");
countryOrigin.class = "countryOfOrigin";
countryOrigin.textContent = "Recipe by Country of Origin";
filterByOrigin.appendChild(countryOrigin);
console.log(countryOrigin);
const category = document.createElement("option");
category.class = "category";
category.textContent = "Recipe by Category";
filterByCategory.appendChild(category);
console.log(category);
// console.log(endPoints);
// console.log("your a banana");

// import { originSelect } from "./script2.js";

// originSelect(
//   endPoints.mealOrigin,
//   "countryOrigin",
//   "Filter by Country of Origin",
//   filterByOrigin
// );
