const toggleButton = document.getElementsByClassName("buttons");
const whiteButton = document.querySelector(".white-circle");
const body = document.querySelector("body");

toggleButton[0].addEventListener("click", () => {
  console.log(whiteButton);
  let dark = body.classList.toggle("dark-mode");
  whiteButton.classList.toggle("to-right");
  console.log(dark);
  let text = document.querySelector(".text");
  if (dark) {
    text.innerText = "Dark Mode Activated";
  } else {
    text.innerText = "Click on the Toggle Button";
  }
});
