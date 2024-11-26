import {
  filterByOrigin,
  endPoints,
  mealSelect,
  recipeOptionFront,
  recipeOptionBack,
} from "./script.js";

// adds all world orgin locations as a recipe filter option
async function originSelect() {
  const data = await fetch(`${endPoints.mealOrigin}`);
  // console.log(data);
  const jsonData = await data.json();
  // console.log(jsonData.meals, "stuff");
  const meals = jsonData.meals;
  // console.log(meals);
  meals.forEach((item) => {
    const newElement = document.createElement("option");
    newElement.textContent = item.strArea;
    filterByOrigin.appendChild(newElement);
    // console.log(newElement);
  });
}
originSelect();
// ***working leave it alone***

// fetch data from the API
filterByOrigin.addEventListener("change", () => {
  // console.log("Select options clicked");

  mealSelect.innerHTML = ""; // clear the options in the dropdown menu
  async function fetchDataOrigin() {
    const selectedOrigin = filterByOrigin.value.toLowerCase();
    // console.log(selectedOrigin);
    const selected = await fetch(`${endPoints.mealByOrigin}${selectedOrigin}`);
    // console.log(selected);
    const jsonData = await selected.json();
    // console.log(jsonData);
    const countryOrigin = document.createElement("option");
    countryOrigin.class = "countryOfOrigin";
    countryOrigin.textContent = "Recipe by Country of Origin";
    mealSelect.appendChild(countryOrigin);
    jsonData.meals.forEach((item) => {
      const newElement = document.createElement("option");
      newElement.id = item.strMeal;
      newElement.textContent = item.strMeal;
      mealSelect.appendChild(newElement);

      // console.log(newElement);
    });
  }
  fetchDataOrigin();
});
// ***working leave it alone***

mealSelect.addEventListener("change", (event) => {
  // front of recipe card
  async function recipeCardFront() {
    // try {
    event.target.value.toLowerCase();
    // console.log(event.target.value);
    mealSelect.onClick = toggleVisibilityFront(recipeOptionFront);
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
      // console.log(newH2);
      const newImg = document.createElement("img");
      newImg.src = item.strMealThumb;
      newImg.class = "img";
      newImg.style.width = "200px";
      recipeOptionFront.appendChild(newImg);
      const newP = document.createElement("p");
      newP.textContent = item.strInstructions;
      recipeOptionFront.appendChild(newP);
    });
  }
  recipeCardFront();
  async function recipeCardBack() {
    // back of recipe card
    event.target.value.toLowerCase();
    // console.log(event.target.value);
    mealSelect.onClick = toggleVisibilityBack(recipeOptionFront);
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`
    );
    const jsonData = await data.json();
    recipeOptionBack.innerHTML = "";
    let jason = jsonData.meals;
    jason.forEach((item) => {
      const newH2 = document.createElement("h2");
      newH2.textContent = item.strMeal;
      recipeOptionBack.appendChild(newH2);
      // console.log(newH2);
      const ingredientsArray = [];
      const measurementsArray = [];
      // console.log(ingredientsArray, measurementsArray, "its empty");
      // Loop through the keys of the recipe object
      for (let key in item) {
        if (key.startsWith("strIngredient") && item[key]?.trim() !== "") {
          ingredientsArray.push(item[key].trim());
        }
        if (key.startsWith("strMeasure") && item[key]?.trim() !== "") {
          measurementsArray.push(item[key].trim());
        }
      }
      // Pair ingredients with measurements
      const pairedList = ingredientsArray.map((ingredient, index) => {
        const measurement = measurementsArray[index] || "No measurement";
        return `${ingredient} ${measurement}`;
      });
      // Create a new list to display paired ingredients and measurements
      const ingredientsList = document.createElement("ul");
      pairedList.forEach((ingredientWithMeasurement) => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredientWithMeasurement;
        ingredientsList.appendChild(listItem);
      });
      recipeOptionBack.appendChild(ingredientsList);
      // create a link to a youtube video
      const videoLink = document.createElement("a");
      videoLink.href = item.strYoutube;
      videoLink.target = "_blank";
      videoLink.textContent = "Watch the video";
      recipeOptionBack.appendChild(videoLink);
    });
  }
  recipeCardBack();
});
// hide the cards until the fuction runs
export function toggleVisibilityFront() {
  if (recipeOptionFront.style.visibility === "hidden") {
    recipeOptionFront.style.visibility = "visible";
  }
} // ***working leave it alone***
export function toggleVisibilityBack() {
  if (recipeOptionBack.style.visibility === "hidden") {
    recipeOptionBack.style.visibility = "visible";
  }
} // ***working leave it alone***
