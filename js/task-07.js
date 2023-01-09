const refs = {
  input: document.querySelector("#font-size-control"),
  // span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputDrag);

function onInputDrag(event) {
  const span = (document.querySelector(
    "#text"
  ).style.fontSize = `${event.currentTarget.value}px`);

  // console.log(event.currentTarget.value);
  // span.style.color = "blue";
}
