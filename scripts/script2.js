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
  console.log(data);
  const jsonData = await data.json();
  console.log(jsonData.meals, "stuff");
  const meals = jsonData.meals;
  console.log(meals);
  meals.forEach((item) => {
    const newElement = document.createElement("option");
    newElement.textContent = item.strArea;
    filterByOrigin.appendChild(newElement);
    console.log(newElement);
  });
}
originSelect();
// ***working leave it alone***

// fetch data from the API
filterByOrigin.addEventListener("change", () => {
  // console.log("Select options clicked");
  // mealSelect.innerHTML = ""; // clear the options in the dropdown menu
  async function fetchData() {
    const selectedOrigin = filterByOrigin.value.toLowerCase();
    // console.log(selectedOrigin);
    const selected = await fetch(`${endPoints.mealByOrigin}${selectedOrigin}`);
    // console.log(selected);
    const jsonData = await selected.json();
    // console.log(jsonData);
    jsonData.meals.forEach((item) => {
      const newElement = document.createElement("option");
      newElement.id = item.strMeal;
      newElement.textContent = item.strMeal;
      mealSelect.appendChild(newElement);
      // console.log(newElement);
    });
  }
  fetchData();
});
// ***working leave it alone***

mealSelect.addEventListener("change", (event) => {
  async function recipeCard() {
    event.target.value.toLowerCase();
    console.log(event.target.value);
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
      mealSelect.onClick = toggleVisibilityBack(recipeOptionFront);
      const newUl = document.createElement("ul");
      newUl.textContent = item.strMeal;
      recipeOptionBack.appendChild(newUl);
      console.log(newUl);
      const newLi = document.createElement("li");
      newLi.textContent = `${item.strIngredient1}${item.strMeasure1}\n${item.strIngredient2}${item.strMeasure2}'\n'${item.strIngredient3}${item.strMeasure3}'\n'${item.strIngredient4}${item.strMeasure4}'\n'${item.strIngredient5}${item.strMeasure5}`;
      newLi.style.display = "flex";
      newLi.style.justifyContent = "space-between";
      recipeOptionBack.appendChild(newLi);
      const newA = document.createElement("a");
      newA.herf = item.strYoutube;
      newA.class = "video";
      newA.style.width = "300px";
      recipeOptionBack.appendChild(newA);
      console.log(newA);
    });
    this.error = {
      errorCode: 400,
      error: "Error",
      errorMessage: "failed to select recipe name",
      fielderror: ["Please try again, meal name must be selected"],
    };
    // const ohNoMyTableItsBroken = document.createElement("p");
    // ohNoMyTableItsBroken.style.color = "red";
    // ohNoMyTableItsBroken.textContent =
    //   "An ohNoMyTableItsBroken occurred. Please make a selection";
    // recipeOptionFront.appendChild(ohNoMyTableItsBroken);
  }
  recipeCard();
});

function toggleVisibilityFront() {
  if (recipeOptionFront.style.visibility === "hidden") {
    recipeOptionFront.style.visibility = "visible";
  }
} // ***working leave it alone***

function toggleVisibilityBack() {
  if (recipeOptionBack.style.visibility === "hidden") {
    recipeOptionBack.style.visibility = "visible";
  }
} // ***working leave it alone***
