const burger = document.getElementById("burgerbtn");
const menuPanel = document.getElementById("menu-panel-id");
const closeBtn = document.getElementById("btn-close");
const closeBtn1 = document.querySelector(".menulist");

burger.addEventListener("click", () => {
  menuPanel.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});

closeBtn1.addEventListener("click", function () {
  menuPanel.classList.remove("active");
});
