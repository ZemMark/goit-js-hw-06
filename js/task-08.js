const form = document.querySelector("form");
const labelEmail = form.firstElementChild;
const buttonSubmit = document.querySelector("button");
const labelPassword = buttonSubmit.previousElementSibling;
const inputEmail = labelEmail.firstElementChild;
const inputPassword = labelPassword.firstElementChild;
const inputs = document.querySelectorAll(".input");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (inputEmail.value === "") {
    alert("please fill the email field!");
  } else if (inputPassword === "") {
    alert("please fill the password field!");
  }
  const loginData = {
    email: `${inputEmail.value}`,
    password: `${inputPassword.value}`,
  };
  console.log(loginData);
  form.reset();
  // formData.forEach((email, password) => {
  //   console.log(`email: ${email}, password: ${password}`);
  // });
}

// buttonSubmit.addEventListener("click", onButtonSubmitClick);
// function onButtonSubmitClick() {
// inputEmail.reset();
// inputPassword.reset();
//   inputs.value.reset();
// }
