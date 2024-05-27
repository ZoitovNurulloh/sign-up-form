document.querySelector("#username").addEventListener("focusout", fName);
document.querySelector("#lastname").addEventListener("focusout", fLastName);
document.querySelector("#email").addEventListener("focusout", fEmail);
document.querySelector("#password").addEventListener("focusout", fPassword);


document.querySelector("#btn").addEventListener("click", function () {
  fName();
  fLastName();
  fEmail();
  fPassword();
});



function fName() {
  let userName = document.querySelector("#username"),
      text = document.querySelector("#username").value;

        if(text == "") {
          userName.classList.add("form__input--error");
          userName.classList.remove("form__input--valid");
        }
        if (text.length > 0) {
          userName.classList.remove("form__input--error");
          userName.classList.add("form__input--valid");
        }
};

function fLastName() {
  let userLastName = document.querySelector("#lastname"),
      text = document.querySelector("#lastname").value;

        if(text == "") {
          userLastName.classList.add("form__input--error");
          userLastName.classList.remove("form__input--valid");
        }
        if (text.length > 0) {
          userLastName.classList.remove("form__input--error");
          userLastName.classList.add("form__input--valid");
        }
}

function fEmail() {
  let userEmail = document.querySelector("#email"),
      text = document.querySelector("#email").value;

      if(text == "") {
        userEmail.textContent = "email@example/com";
        userEmail.classList.add("form__input--error");
        userEmail.classList.remove("form__input--valid");
      }

      if (text.length > 0) {
        userEmail.classList.remove("form__input--error");
        userEmail.classList.add("form__input--valid");
      }
}

function fPassword() {
  let userEmail = document.querySelector("#password"),
      text = document.querySelector("#password").value;

      if(text == "") {
        userEmail.classList.add("form__input--error");
        userEmail.classList.remove("form__input--valid");
      }

      if (text.length > 0) {
        userEmail.classList.remove("form__input--error");
        userEmail.classList.add("form__input--valid");
      }
}
