const form = document.querySelector("form");
const labelEmail = form.firstElementChild;
const buttonSubmit = document.querySelector("button");
const labelPassword = buttonSubmit.previousElementSibling;
const inputEmail = labelEmail.firstElementChild;
const inputPassword = labelPassword.firstElementChild;
const inputs = document.querySelectorAll(".input");
const formDataObject = {};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  formDataShow();
  // const fd = new FormData(form);

  // for (const item of fd) {
  //   // console.log(item[0], item[1]);
  //   const key = item[0];
  //   const value = item[1];
  //   formDataObject.item[0] = item[1];
  // }

  form.reset();
}

function formDataShow() {
  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("please fill all fields!");
  } else {
    const loginData = {
      email: `${inputEmail.value}`,
      password: `${inputPassword.value}`,
    };
    console.log(loginData);
  }
}

// buttonSubmit.addEventListener("click", onButtonSubmitClick);
// function onButtonSubmitClick() {
// inputEmail.reset();
// inputPassword.reset();
//   inputs.value.reset();
// }
