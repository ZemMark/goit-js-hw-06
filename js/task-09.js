// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const button = document.querySelector("button");
// const span = document.querySelector("span");

// button.addEventListener("click", onButtonClick);
// function onButtonClick() {
//   document.body.style.backgroundColor = getRandomHexColor();
//   span.textContent = getRandomHexColor();
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector("button");
const span = document.querySelector("span");
button.addEventListener("click", onButtonClick);
function onButtonClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}
