const input = document.querySelector("input");

const bgc = getRandomHexColor();
let startSize = 30;
const divEl = {
  color: bgc,
  width: 30,
  height: 30,
};
const onInputChange = (event) => {
  const value = event.currentTarget.value;
  return value;
};
input.addEventListener("input", onInputChange);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function makeNewSize(value) {
  startSize += 10;
}

// const createBox = function (value) {
//   for (let i = 0; i <= value; i++) {
//     const divEl = `<div width="${startSize}", height="${startSize}" backgroundColor="${bgc}"></div>`;
//     document.body.insertAdjacentHTML("beforeend", divEl);
//   }
// };

//try loDash range

const valueArray = [];
const fnArray = (value) => {
  for (let i = 0; i <= value; i++) {
    valueArray.push(i);
  }
  return valueArray;
};
console.log(fnArray(4));

const makeDivEl = function (array) {
  return array
    .map((el) => {
      el = `<div width="${makeNewSize()}px", height="${makeNewSize()}px" background-color="${getRandomHexColor()}" class="divsLastTask"></div>`;
      return el;
    })
    .join("");
};

// const makeDivRefs = valueArray.map();
console.log(valueArray);
console.log(makeDivEl(valueArray));
document.body.insertAdjacentHTML("beforeend", makeDivEl(valueArray));
