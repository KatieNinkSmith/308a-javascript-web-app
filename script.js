const endPoints = {
  meals: "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast",
  mealIngredients: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
  mealCatagory: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
};

async function food() {
  const data = await fetch(`${endPoints.mealIngredients}/food.json`);
  console.log(data);
  const jsonData = await data.json();
  console.log(jsonData, "stuff");
}
food();
console.log("your a banana");
