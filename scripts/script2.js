import {
  filterByOrigin,
  endPoints,
  mealSelect,
  recipeOption,
  recipeOptionFront,
  recipeOptionBack,
} from "./script.js";
// console.log(filterByOrigin);
// import { endPoints } from "./script.js";
// // console.log(endPoints);
// import { mealSelect } from "./script.js";
// // console.log(mealSelect);

// import { recipeOptionFront } from "./script.js";
// console.log(recipeOptionFront);

// adds all world orgin locations as a recipe filter option
async function originSelect() {
  const data = await fetch(`${endPoints.mealOrigin}`);
  // console.log(data);
  const jsonData = await data.json();
  // console.log(jsonData.meals, "stuff");
  const mealName = jsonData.meals;
  const newElement0 = document.createElement("option");
  newElement0.class = `countryOrigin`;
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
    const newElement0 = document.createElement("option");
    newElement0.class = `countryOrigin`;
    newElement0.textContent = `Recipes by Country of Origin`;
    mealSelect.appendChild(newElement0);
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
    try {
      event.target.value.toLowerCase();
      console.log(event.target.value);
      mealSelect.onClick = toggleVisibility(recipeOptionFront);

      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`
      );
      const jsonData = await data.json();
      console.log(jsonData);
      recipeOptionFront.innerHTML = "";
      let jason = jsonData.meals;
      jason.forEach((item) => {
        const newH2 = document.createElement("h2");
        newH2.textContent = item.strMeal;
        recipeOptionFront.appendChild(newH2);
        console.log(newH2);
        const newImg = document.createElement("img");
        newImg.src = item.strMealThumb;
        newImg.class = "img";
        newImg.style.width = "200px";
        recipeOptionFront.appendChild(newImg);
        const newP = document.createElement("p");
        newP.textContent = item.strInstructions;
        recipeOptionFront.appendChild(newP);
        const newUl = document.createElement("ul");
        newUl.textContent = item.strMeal;
        recipeOptionBack.appendChild(newUl);
        console.log(newUl);
        const newLi = document.createElement("li");
        newLi.textContent = `${item.strIngredient1}${item.strMeasure1}`;
        newLi.style.display = "flex";
        newLi.style.justifyContent = "space-between";
        recipeOptionBack.appendChild(newLi);
        const newA = document.createElement("a");
        newA.herf = item.strYoutube;
        newA.class = "video";
        newA.style.width = "300px";
        recipeOptionBack.appendChild(newA);
      });
    } catch (error) {
      const ohNoMyTableItsBroken = document.createElement("p");
      ohNoMyTableItsBroken.style.color = "red";
      ohNoMyTableItsBroken.textContent =
        "An ohNoMyTableItsBroken occurred. Please make a selection";
      recipeOptionFront.appendChild(ohNoMyTableItsBroken);
    }
  }
  recipeCard();
});

function toggleVisibility() {
  if (recipeOptionFront.style.visibility === "hidden") {
    recipeOptionFront.style.visibility = "visible";
  }
}
