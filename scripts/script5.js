// EVERYTHING THAT DIDNT WORK!!!!

// attemping to turn my functions into reuseable functions i could not figure out how to handle getting the str value to put into text content as a paramater and time was ticking so i went back to my original mostly copypasted functions with the changes needed for each.
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
// ingredientsArray.push(item.strIngredient1);
// measurementsArray.push(item.strMeasure1);
// console.log(ingredientsArray, measurementsArray, "is it in");
// const ingredients = ["strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5", "strIngredient6", "strIngredient7", "strIngredient8", "strIngredient9", "strIngredient10", "strIngredient11", "strIngredient12", "strIngredient13", "strIngredient14", "strIngredient15", "strIngredient16", "strIngredient17", "strIngredient18", "strIngredient19", "strIngredient20"];
// ingredients.forEach((ingredient) => {
//   const newLi = document.createElement("li");
//   newLi.textContent = ingredient;
//   recipeOptionBack.appendChild(newLi);
// });
// const measurements = ["strMeasure1", "strMeasure2", "strMeasure3", "strMeasure4", "strMeasure5", "strMeasure6", "strMeasure7", "strMeasure8", "strMeasure9", "strMeasure10", "strMeasure11", "strMeasure12", "strMeasure13", "strMeasure14", "strMeasure15", "strMeasure16", "strMeasure17", "strMeasure18", "strMeasure19", "strMeasure20"];
// measurements.forEach((measurement) => {
//   const newLi = document.createElement("li");
//   newLi.textContent = measurement;
//   recipeOptionBack.appendChild(newLi);
// });
// const newLi = document.createElement("li");
//this is rediculous and still doesnt look nice
// newLi.textContent = `${item.strIngredient1}-----${item.strMeasure1},
//         ${item.strIngredient2}-----${item.strMeasure2},
//         ${item.strIngredient3}-----${item.strMeasure3},
//         ${item.strIngredient4}-----${item.strMeasure4},
//         ${item.strIngredient5}-----${item.strMeasure5},
//         ${item.strIngredient6}-----${item.strMeasure6},
//         ${item.strIngredient7}-----${item.strMeasure7},
//         ${item.strIngredient8}-----${item.strMeasure8},
//         ${item.strIngredient9}-----${item.strMeasure9},
//         ${item.strIngredient10}-----${item.strMeasure10},
//         ${item.strIngredient11}-----${item.strMeasure11},
//         ${item.strIngredient12}-----${item.strMeasure12},
//         ${item.strIngredient13}-----${item.strMeasure13},
//         ${item.strIngredient14}-----${item.strMeasure14},
//         ${item.strIngredient15}-----${item.strMeasure15},
//         ${item.strIngredient16}-----${item.strMeasure16},
//         ${item.strIngredient17}-----${item.strMeasure17},
//         ${item.strIngredient18}-----${item.strMeasure18},
//         ${item.strIngredient19}-----${item.strMeasure19},
//         ${item.strIngredient20}-----${item.strMeasure20}`;
// newLi.style.display = "flex";
// newLi.style.justifyContent = "space-between";
// recipeOptionBack.appendChild(newLi);
// const videoWrapper = document.createElement("div");
// const videoLink = document.createElement("a");
// videoLink.href = item.strYoutube;
// videoLink.textContent = "Watch the video";
// videoWrapper.appendChild(videoLink);

// const newVideo = document.createElement("video");
// newVideo.src = item.strYoutube;
// newVideo.width = "200";
// newVideo.height = "150";
// newVideo.allow =
//   "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
// newVideo.allowFullscreen = true;
// } catch (error) {
//   console.log("Please try again, meal name must be selected");
//   const ohNoMyTableItsBroken = document.createElement("p");
//   ohNoMyTableItsBroken.style.color = "red";
//   ohNoMyTableItsBroken.textContent =
//     "An ohNoMyTableItsBroken occurred. Please make a selection";
//   recipeOptionFront.appendChild(ohNoMyTableItsBroken);
// }
// import { originSelect } from "./script2.js";

// originSelect(
//   endPoints.mealOrigin,
//   "countryOrigin",
//   "Filter by Country of Origin",
//   filterByOrigin
// );
