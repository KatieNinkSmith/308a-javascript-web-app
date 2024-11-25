// import {
//   filterByOrigin,
//   filterByCategory,
//   mealSelect,
//   recipeCard,
//   recipeOptionFront,
//   recipeOptionBack,
// } from "./script.js";

// async function originSelect(
//   fetchLocation,
//   className,
//   textContent,
//   textContent2,
//   parent
// ) {
//   const data = await fetch(`${fetchLocation}`);
//   // console.log(data);
//   const jsonData = await data.json();
//   // console.log(jsonData.meals, "stuff");
//   const meals = jsonData.meals;
//   console.log(meals);
//   const newElement0 = document.createElement("option");
//   newElement0.class = className;
//   newElement0.textContent = textContent;
//   parent.appendChild(newElement0);
//   console.log(newElement0);
//   meals.forEach((item) => {
//     const newElement = document.createElement("option");
//     newElement.textContent = textContent2;
//     parent.appendChild(newElement);
//     console.log(newElement);
//   });
// }
