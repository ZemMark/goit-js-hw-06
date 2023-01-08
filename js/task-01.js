const refs = {
  categoriesContainerRef: document.querySelector("#categories"),
  titleRef: document.querySelectorAll(".item > h2"),
  itemsRef: document.querySelectorAll(".item"),
  childCategoriesListRef: document.querySelectorAll(".item > ul"),
};

// console.log(refs.childCategoriesListRef);
// console.log(refs.itemsRef);
// const array = [...refs.itemsRef];
// const titles = array.map((el) => {
//   //array of all of h2
//   return el.textContent;
// });
// console.log(titles);
const arrayOfCategoriesLists = [...refs.childCategoriesListRef];
// const childsOfCategoriesChildList = arrayOfCategoriesLists.map((list) => {
//   return list.childElementCount;
// });
// console.log(childsOfCategoriesChildList);

const numberOfCategories = () => {
  return `Number of categories: ${refs.categoriesContainerRef.childElementCount}`; //${arrayOfCategoriesLists.length}
};

// const categoriesWithQuontityAndName = (arrayOfCategoriesLists) => {
//   const categorie = this
// }

const result = arrayOfCategoriesLists
  .map((el) => {
    // const total = arrayOfCategoriesLists.length;
    return `Category: ${el.previousElementSibling.textContent}\nElements: ${el.childElementCount}\n`;
  })
  .join("");
console.log(numberOfCategories());
console.log(result);
