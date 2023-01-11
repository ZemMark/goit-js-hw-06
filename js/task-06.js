const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const dataLength = event.currentTarget.getAttribute("data-length");
  // console.log(event.currentTarget.getAttribute("data-length"));
  // if (event.currentTarget.value.length < dataLength) {
  // input.classList.add("invalid");
  if (event.currentTarget.value.length === Number(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}
