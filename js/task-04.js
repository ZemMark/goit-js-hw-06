const refs = {
  decrement: document.querySelector('[data-action="increment"]'),
  increment: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
};
refs.decrement.addEventListener("click", onDecrementClick);
refs.increment.addEventListener("click", onIncrementClick);

// const counterValue = {
//   value: 0,
//   increase() {
//     this.value += 1;
//   },
//   decrease() {
//     this.value -= 1;
//   },
// };

let counterValue = 0;
function onDecrementClick() {
  // counter.increase();
  // refs.value.textContent = counter.value;
  counterValue += 1;
  refs.value.textContent = counterValue;
}
function onIncrementClick() {
  // counter.decrease();
  // refs.value.textContent = counter.value;
  counterValue -= 1;
  refs.value.textContent = counterValue;
}
