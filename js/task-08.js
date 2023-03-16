const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value.length === 0 ||
    event.target.elements.password.value.length === 0
  ) {
    alert(`всі поля повинні бути заповнені`);
  } else {
    const arrOfInp = {
      email: "",
      password: "",
    };
    arrOfInp.email = event.target.elements.email.value;
    arrOfInp.password = event.target.elements.password.value;
    console.log(arrOfInp);
    form.reset();
  }
}
