let form = document.querySelector('.form');

let button = document.querySelector("button")
button.addEventListener("click", checkErrors)

let email = document.querySelector('#email');
let country = document.querySelector('#country');
let zipCode = document.querySelector('#zip-code');
let password = document.querySelector('#password');
let passwordConfirmation = document.querySelector('#passwordConfirmation');

let error = document.querySelector('#error')

function checkErrors(e) {
  error.innerHTML = '';
  form.classList.toggle('submitted')

  if (!email.checkValidity()) {
    let msg = document.createElement("p");
    msg.textContent = email.validationMessage;
    error.append(msg);
  }
  if (!country.checkValidity()) {
    let msg = document.createElement("p");
    msg.textContent = "Please fill out all highlighted fields.";
    console.log(country)
    error.append(msg);
  }

}