const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const refs = {
// targetContainer: document.querySelector("#ingredients"),
// };
const ingredientsArray = [];
const targetContainer = document.querySelector("#ingredients");
const makeIngredient = (ingredients) => {
  return ingredients.map((i) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = i;
    ingredientsArray.push(item);
  });
};
makeIngredient(ingredients);
targetContainer.append(...ingredientsArray);
