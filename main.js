const hamber = document.querySelector(".hamber");
const menu = document.querySelector(".menu");
const startIcon = document.querySelector(".start");
const closeIcon = document.querySelector(".close");

if (hamber && menu) {
  if (window.innerWidth <= 760) menu.classList.remove("tampil");

  hamber.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("tampil");
    hamber.setAttribute("aria-expanded", isOpen);
    startIcon.style.display = isOpen ? "none" : "block";
    closeIcon.style.display = isOpen ? "block" : "none";
  });
}
