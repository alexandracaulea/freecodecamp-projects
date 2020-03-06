const navButton = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav__list");
const navItems = navList.querySelectorAll(".nav__item");
const navLinks = Array.from(navList.querySelectorAll(".nav-link"));
const overlay = document.querySelector(".overlay");
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

function observerCallback(entries) {
  entries.forEach(entry => {
    let sectionId = entry.target.id;
    let currentLink = navLinks.filter(link => link.getAttribute("href").substr(1) === sectionId);
    if (!entry.isIntersecting) {
      currentLink[0].classList.remove("current");
    } else {
      currentLink[0].classList.add("current");
    }
  });
}

sections.forEach(section => observer.observe(section));

function handleButtonClick() {
  if (!getComputedStyle(navButton, null).display) return;
  document.body.classList.toggle("nav-open");
  overlay.classList.toggle("overlay-toggle");
}

function handleLinkClicked() {
  if (getComputedStyle(navButton, null).display === "" || getComputedStyle(navButton, null).display === "none") return;
  document.body.classList.remove("nav-open");
  overlay.classList.toggle("overlay-toggle");
}

function closeModal(e) {
  if (!getComputedStyle(navButton, null).display) return;
  if (e.key === "Escape" || e.target.classList.contains("overlay")) {
    document.body.classList.remove("nav-open");
    overlay.classList.remove("overlay-toggle");
  }
}

navButton.addEventListener("click", handleButtonClick);
navLinks.forEach(link => link.addEventListener("click", handleLinkClicked));
overlay.addEventListener("click", closeModal);
window.addEventListener("keyup", closeModal);
