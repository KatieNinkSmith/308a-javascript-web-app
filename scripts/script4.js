import { endPoints } from "./script.js";
// console.log(endPoints);
import { mealSelect } from "./script.js";
import { recipeOption } from "./script.js";

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

mealSelect.addEventListener("change", (event) => {
  async function recipeCard() {
    // console.log(event.target.value);
    const data = await fetch(`${endPoints.random}`);
    // console.log(data);
    const jsonData = await data.json();
    // console.log(jsonData);
    recipeOption.innerHTML = "";
    let jason = jsonData.meals;
    jason.forEach((item) => {
      const newH2 = document.createElement("h2");
      newH2.textContent = item.strMeal;
      recipeOption.appendChild(newH2);
      const newImg = document.createElement("img");
      newImg.src = item.strMealThumb;
      newImg.class = "img";
      newImg.style.width = "200px";
      recipeOption.appendChild(newImg);
      const newP = document.createElement("p");
      newP.textContent = item.strInstructions;
      recipeOption.appendChild(newP);
      // const newBtn = document.createElement("button");
      // newBtn.id = "filpBtn";
      // newBtn.textContent = "More...";
      // recipeOption.appendChild(newBtn);
    });
  }
  recipeCard();
});
