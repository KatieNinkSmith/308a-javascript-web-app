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
  async function recipeCardFront() {
    try {
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
      });
    } catch (error) {
      console.log("Please try again, meal name must be selected");
      const ohNoMyTableItsBroken = document.createElement("p");
      ohNoMyTableItsBroken.style.color = "red";
      ohNoMyTableItsBroken.textContent =
        "An ohNoMyTableItsBroken occurred. Please make a selection";
      recipeOptionFront.appendChild(ohNoMyTableItsBroken);
    }
  }
  recipeCardFront();
  async function recipeCardBack() {
    try {
      event.target.value.toLowerCase();
      console.log(event.target.value);
      mealSelect.onClick = toggleVisibilityFront(recipeOptionFront);
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`
      );
      const jsonData = await data.json();
      recipeOptionBack.innerHTML = "";
      let jason = jsonData.meals;
      jason.forEach((item) => {
        const newUl = document.createElement("ul");
        newUl.textContent = item.strMeal;
        recipeOptionBack.appendChild(newUl);
        console.log(newUl); // **********working to here need to figure out the list of ingredients and measurements and adding the youtube videos do not forget to ensure script3.js is functioning all the way through and script4.js is working
        const newLi = document.createElement("li");
        newLi.textContent = `${item.strIngredient1}${item.strMeasure1}${item.strIngredient2}${item.strMeasure2}${item.strIngredient3}${item.strMeasure3}${item.strIngredient4}${item.strMeasure4}${item.strIngredient5}${item.strMeasure5}${item.strIngredient6}${item.strMeasure6}${item.strIngredient7}${item.strMeasure7}${item.strIngredient8}${item.strMeasure8}${item.strIngredient9}${item.strMeasure9}${item.strIngredient10}${item.strMeasure10}${item.strIngredient11}${item.strMeasure11}${item.strIngredient12}${item.strMeasure12}${item.strIngredient13}${item.strMeasure13}${item.strIngredient14}${item.strMeasure14}${item.strIngredient15}${item.strMeasure15}${item.strIngredient16}${item.strMeasure16}${item.strIngredient17}${item.strMeasure17}${item.strIngredient18}${item.strMeasure18}${item.strIngredient19}${item.strMeasure19}${item.strIngredient20}${item.strMeasure20}`;
        newLi.style.display = "flex";
        newLi.style.justifyContent = "space-between";
        recipeOptionBack.appendChild(newLi);
        const newVideo = document.createElement("video");
        newVideo.src = url(item.strYoutube);
        // newVideo.textContent = `<a href="${item.strYoutube}">Watch Video</a>`;
        newVideo.style.width = "300px";
        recipeOptionBack.appendChild(newVideo);
        console.log(newVideo);
      });
    } catch (error) {
      console.log("Please try again, meal name must be selected");
      const ohNoMyTableItsBroken = document.createElement("p");
      ohNoMyTableItsBroken.style.color = "red";
      ohNoMyTableItsBroken.textContent =
        "An ohNoMyTableItsBroken occurred. Please make a selection";
      recipeOptionFront.appendChild(ohNoMyTableItsBroken);
    }
  }
  recipeCardBack();
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
