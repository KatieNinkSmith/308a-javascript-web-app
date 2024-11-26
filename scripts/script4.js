import {
  endPoints,
  mealSelect,
  recipeOptionFront,
  randomBtn,
} from "./script.js";

// adds random recipe for an optins to the meal options
async function randomRecipe() {
  const data1 = await fetch(`${endPoints.random}`);
  // console.log(data1);
  // const ranRecipe = document.createElement("option");
  // ranRecipe.value = "random";
  // ranRecipe.textContent = "Random Recipe";
  // mealDropDown.appendChild(ranRecipe);
}
randomRecipe();

randomBtn.addEventListener("click", () => {
  // Fetch data asynchronously
  async function fetchDataRandom() {
    const randomRecipeBtn = randomBtn.value.toLowerCase(); // Get selected value
    console.log(randomRecipeBtn); // Log the selected button value (for debugging)

    try {
      const selected = await fetch(`${endPoints.random}${randomRecipeBtn}`);
      const jsonData = await selected.json();
      mealSelect.innerHTML = ""; // clear the options in the dropdown menu
      // Check if there are meals returned
      if (jsonData.meals) {
        // Add "Random Recipe" option to the dropdown
        const randomRecipe = document.createElement("option");
        randomRecipe.textContent = "Random Recipe";
        mealSelect.appendChild(randomRecipe);

        // Add fetched meals to the dropdown
        jsonData.meals.forEach((item) => {
          const newElement = document.createElement("option");
          newElement.id = item.strMeal;
          newElement.textContent = item.strMeal;
          mealSelect.appendChild(newElement);
        });
      } else {
        console.log("No meals found for this category.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchDataRandom();
});
