import {
  filterByCategory,
  endPoints,
  mealSelect,
  recipeOptionFront,
  recipeOptionBack,
} from "./script.js";

// adds all world orgin locations as a recipe filter option
async function catagorySelect() {
  const data = await fetch(`${endPoints.mealCat}`);
  // console.log(data);
  const jsonData = await data.json();
  // console.log(jsonData.meals, "stuff");
  const meals = jsonData.meals;
  // console.log(meals);
  meals.forEach((item) => {
    const newElement = document.createElement("option");
    newElement.textContent = item.strCategory;
    filterByCategory.appendChild(newElement);
    // console.log(newElement);
  });
}
catagorySelect();
// ***working leave it alone***

// fetch data from the API
filterByCategory.addEventListener("change", () => {
  // console.log("Select options clicked");
  mealSelect.innerHTML = ""; // clear the options in the dropdown menu
  async function fetchDataCategory() {
    const selectedCategory = filterByCategory.value.toLowerCase();
    console.log(selectedCategory);
    const selected = await fetch(
      `${endPoints.mealByCategory}${selectedCategory}`
    );
    console.log(selected);
    const jsonData = await selected.json();
    console.log(jsonData);
    mealSelect.innerHTML = ""; // clear the options in the dropdown menu
    const category = document.createElement("option");
    category.class = "category";
    category.textContent = "Recipe by Category";
    mealSelect.appendChild(category);

    jsonData.meals.forEach((item) => {
      const newElement = document.createElement("option");
      newElement.id = item.strMeal;
      newElement.textContent = item.strMeal;
      mealSelect.appendChild(newElement);
      console.log(newElement);
    });
  }
  fetchDataCategory();
});
// ***working leave it alone***
