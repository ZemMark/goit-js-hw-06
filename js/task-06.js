const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const dataLength = event.currentTarget.getAttribute("data-length");
  // console.log(event.currentTarget.getAttribute("data-length"));
  if (event.currentTarget.value.length < dataLength) {
    input.classList.add("invalid");
  } else if (event.currentTarget.value.length >= dataLength)
    input.classList.remove("invalid");
  input.classList.add("valid");
}
