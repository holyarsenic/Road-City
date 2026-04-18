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
