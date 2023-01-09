const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange() {
  refs.output.textContent = refs.input.value;
}
