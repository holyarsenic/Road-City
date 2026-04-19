const signinBtn = document.querySelector(".sign-btn");
const signinPage = document.querySelector(".sign-in");
const accSignin = document.querySelector(".sign-in .acc-sign");

signinBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  signinPage.classList.toggle("sign-popup");
});

signinPage.addEventListener("click", () => {
  signinPage.classList.remove("sign-popup");
});

accSignin.addEventListener("click", (e) => {
  e.stopPropagation();
});

const user = document.querySelector(".user input");
const password = document.querySelector(".pass input");
const loginBtn = document.querySelector(".signin-btn1");

loginBtn.addEventListener("click", () => {
  if (user.value === '') {
    alert("Add Email First!");
    user.focus();
  } else if (password.value === '') {
    alert("Add Password First!");
    password.focus();
  } else {
    signinPage.classList.remove("sign-popup");
  }

  user.value = '';
  password.value = '';
});
