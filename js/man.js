const menuBtn = document.getElementById("btn");
const menu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

console.log(menuBtn);
menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("hide")) {
    show();
  } else {
    hide();
  }
});

overlay.addEventListener("click", () => {
  if (menu.classList.contains("hide")) {
    show();
  } else {
    hide();
  }
});

const show = () => {
  menu.classList.remove("hide");
  overlay.classList.remove("hide-2");
};
const hide = () => {
  menu.classList.add("hide");
  overlay.classList.add("hide-2");
};
