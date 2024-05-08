let form = document.querySelector(".questionnaire");
let formItems = document.querySelectorAll(".questionnaire__input > input");
let errorText = document.querySelectorAll(".input__error");
let errorIcon = document.querySelectorAll(".error-icon");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let activeErrors = [];

  for (let i = 0; i < form.length - 1; i++) {
    if (formItems[i].value.length == 0) {
      errorText[i].classList.add("active");
      errorIcon[i].classList.add("active");
    } else {
      errorText[i].classList.remove("active");
      errorIcon[i].classList.remove("active");
    }
  }

  errorText.forEach((item) =>
    item.classList.forEach((elem) =>
      elem == "active" ? activeErrors.push(elem) : elem
    )
  );

  if (activeErrors.length == 0) {
    form.submit();
  }
});
