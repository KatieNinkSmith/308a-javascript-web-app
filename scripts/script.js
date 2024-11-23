// export const buttons = document.querySelector(".btn");
// console.log(buttons);
export const filterByOrigin = document.querySelector("#originSelect");
// console.log(filterByOrigin);
export const filterByCategory = document.querySelector("#categorySelect");
// console.log(filterByCategory);
export const random = document.querySelector("#randomBtn");
// console.log(random);
export const mealSelect = document.querySelector("#mealDropDown");
// console.log(mealSelect);
export const recipeForm = document.querySelector("#racipeCard");
console.log(recipeForm);

export const endPoints = {
  mealOrigin: `https://www.themealdb.com/api/json/v1/1/list.php?a=list`,
  mealCat: `https://www.themealdb.com/api/json/v1/1/list.php?c=list`,
  random: `https://www.themealdb.com/api/json/v1/1/random.php`,
};
// console.log(endPoints);

// adds all world orgin locations as a recipe filter option
async function originSelect(event) {
  const data = await fetch(`${endPoints.mealOrigin}`);
  // console.log(data);
  const jsonData = await data.json();
  // console.log(jsonData.meals, "stuff");
  const mealName = jsonData.meals;
  mealName.forEach((item) => {
    const newElement = document.createElement("option");
    newElement.value = item.strArea;
    newElement.textContent = item.strArea;
    filterByOrigin.appendChild(newElement);
    // console.log(newElement);
  });
}
originSelect();

// adds meal catagories as a filter option
async function categorySelect(event) {
  const data = await fetch(`${endPoints.mealCat}`);
  // console.log(data);
  const jsonData = await data.json();
  // console.log(jsonData.meals, "stuff");
  const mealName = jsonData.meals;
  mealName.forEach((item) => {
    const newElement = document.createElement("option");
    newElement.value = item.strCategory;
    newElement.textContent = item.strCategory;
    filterByCategory.appendChild(newElement);
    // console.log(newElement);
  });
}
categorySelect();
// console.log("your a banana");

// adds random recipe for an optins to the meal options
async function randomRecipe(event) {
  const data1 = await fetch(`${endPoints.random}`);
  const ranRecipe = document.createElement("option");
  ranRecipe.value = data1.strMeal;
  ranRecipe.textContent = "Random Recipe";
  mealDropDown.appendChild(ranRecipe);
  const recipeCard = document.createElement("p");
  recipeCard.id = data1.strMeal;
  recipeCard.innerHTML = data1.strInstructions;
}
randomRecipe();
