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
const targetContainer = document.querySelector("#ingredients");
const makeIngredient = (ingredients) => {
  return ingredients.map((i) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = i;
    targetContainer.append(item);
  });
};
console.log(makeIngredient(ingredients));
