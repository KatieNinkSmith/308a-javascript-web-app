import { endPoints } from "./script.js";
// console.log(endPoints);

// adds random recipe for an optins to the meal options
async function randomRecipe() {
  const data1 = await fetch(`${endPoints.random}`);
  // console.log(data1);
  const ranRecipe = document.createElement("option");
  ranRecipe.value = data1.strMeal;
  ranRecipe.textContent = "Random Recipe";
  mealDropDown.appendChild(ranRecipe);
}
randomRecipe();
