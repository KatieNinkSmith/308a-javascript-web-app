import { filterByOrigin } from "./script.js";
// console.log(filterByOrigin);
import { endPoints } from "./script.js";
// console.log(endPoints);
import { mealSelect } from "./script.js";
// console.log(mealSelect);

// adds all world orgin locations as a recipe filter option
async function originSelect() {
  const data = await fetch(`${endPoints.mealOrigin}`);
  // console.log(data);
  const jsonData = await data.json();
  // console.log(jsonData.meals, "stuff");
  const mealName = jsonData.meals;
  const newElement0 = document.createElement("option");
  newElement0.id = `countryOrigin`;
  newElement0.textContent = `Recipes by Country of Origin`;
  filterByOrigin.appendChild(newElement0);
  mealName.forEach((item) => {
    const newElement = document.createElement("option");
    newElement.value = item.strArea;
    newElement.textContent = item.strArea;
    filterByOrigin.appendChild(newElement);
    // console.log(newElement);
  });
}
originSelect();

// fetch data from the API
filterByOrigin.addEventListener("change", () => {
  // console.log("Select options clicked");
  mealSelect.innerHTML = ""; // clear the options in the dropdown menu
  async function fetchData() {
    const selectedOrigin = filterByOrigin.value;
    // console.log(selectedOrigin);
    selectedOrigin.toLowerCase();
    const selectedRecipes = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedOrigin}`
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
