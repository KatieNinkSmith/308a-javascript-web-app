const mealSelect = document.querySelector("#mealDropDown");

console.log(mealSelect);
const endPoints = {
  meals: "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast",
  mealIngredients: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
  mealCatagory: `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`,
  random: `https://www.themealdb.com/api/json/v1/1/random.php`,
  mealInfo: ``,
};

async function food() {
  const data = await fetch(`${endPoints.mealCatagory}`);
  // console.log(data);
  const jsonData = await data.json();
  // console.log(jsonData.meals, "stuff");
  jsonData.meals.forEach((item) => {
    const newElement = document.createElement("option");
    newElement.value = item.mealId;
    newElement.textContent = item.strMeal;
    mealDropDown.appendChild(newElement);
    // console.log(newElement);
  });
  const data1 = await fetch(`${endPoints.random}`);
  // console.log(data);
  const random = document.createElement("option");
  random.value = data1.mealId;
  random.textContent = "Random";
  mealDropDown.appendChild(random);

  mealSelect.addEventListener("change", async (event) => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${event.target.mealId}`
    );
    const jsonData = await data.json();
    console.log(jsonData, "stuff1");
  });
  console.log("your a banana");
}
food();
