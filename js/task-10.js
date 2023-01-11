// const input = document.querySelector("input");

// const bgc = getRandomHexColor();
// let startSize = 30;
// const divEl = {
//   color: bgc,
//   width: 30,
//   height: 30,
// };
// const onInputChange = (event) => {
//   const value = event.currentTarget.value;
//   return value;
// };
// input.addEventListener("input", onInputChange);
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function makeNewSize(value) {
//   startSize += 10;
// }

// // const createBox = function (value) {
// //   for (let i = 0; i <= value; i++) {
// //     const divEl = `<div width="${startSize}", height="${startSize}" backgroundColor="${bgc}"></div>`;
// //     document.body.insertAdjacentHTML("beforeend", divEl);
// //   }
// // };

// //try loDash range

// const valueArray = [];
// const fnArray = (value) => {
//   for (let i = 0; i <= value; i++) {
//     valueArray.push(i);
//   }
//   return valueArray;
// };
// console.log(fnArray(4));

// const makeDivEl = function (array) {
//   return array
//     .map((el) => {
//       el = `<div width="${makeNewSize()}px", height="${makeNewSize()}px" background-color="${getRandomHexColor()}" class="divsLastTask"></div>`;
//       return el;
//     })
//     .join("");
// };

// // const makeDivRefs = valueArray.map();
// console.log(valueArray);
// console.log(makeDivEl(valueArray));
// document.body.insertAdjacentHTML("beforeend", makeDivEl(valueArray));
const input = document.querySelector("input");
const boxesContainer = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const iterationArray = [];
let initialSizeValue = 30;

// //
// function makeSizeValue() {
//   const iterableSizeValue = (initialSizeValue += 10);
//   return iterableSizeValue;
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const onCreateClick = function () {
//   boxesContainer.insertAdjacentHTML("beforeend", makeDiv());
// };
// const onDestroyClick = () => {
//   boxesContainer.innerHTML = "";
//   iterationArray = [];
// };
// const makeIterationCountArray = function () {
//   const iterations = input.value;
//   for (let i = 0; i < iterations; i += 1) {
//     iterationArray.push(i);
//     // const divRef = `<div class="divsLastTask", width="", height=""></div>`;
//   }
//   return iterationArray;
// };
// const makeDiv = function (e) {
//   makeIterationCountArray();
//   return iterationArray
//     .map((el) => {
//       const createdDiv = `<div class="divsLastTask" width="${makeSizeValue()}" height="30" background-color="${getRandomHexColor()}"></div>`;
//       return createdDiv;
//     })
//     .join("");
// };
// btnCreate.addEventListener("click", onCreateClick);
// btnDestroy.addEventListener("click", onDestroyClick);
btnCreate.addEventListener("click", onCreateClick);
btnDestroy.addEventListener("click", onDesrtoyClick);
function onDesrtoyClick() {
  boxesContainer.innerHTML = "";
  input.value = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onCreateClick() {
  let sizeValue = 30;
  for (let i = 0; i < input.value; i++) {
    const divObj = {
      width: `${sizeValue}px`,
      height: `${sizeValue}px`,
    };
    console.log(sizeValue);
    const divEl = document.createElement("div");
    // divEl.setAttribute("width", divObj.width);
    // divEl.setAttribute("height", divObj.height);
    divEl.style.width = divObj.width;
    divEl.style.height = divObj.width;
    divEl.classList.add("divsLastTask");
    divEl.style.display = "block";
    divEl.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(divEl);
    sizeValue += 10;
  }
  input.value = "";
}
