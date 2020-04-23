(async () => {
  if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img[loading='lazy']");
    images.forEach((img) => {
      img.src = img.dataset.src;
    });
  } else {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js";
    document.body.appendChild(script);
  }
})();

const siteHeader = document.querySelector(".site-header");
const navigationButton = siteHeader.querySelector(".menu-toggle");
const navigationLinks = siteHeader.querySelectorAll(".nav__link");
const navigationLink = siteHeader.querySelector(".nav__list");
const profileImg = document.querySelector(".intro__img");
const showMoreProjectsButton = document.querySelector(".show-more-projects");
const hiddenProjects = document.querySelectorAll(".project__item--hidden");

function toggleNavigation() {
  if (!siteHeader.classList.contains("show-navigation")) {
    siteHeader.classList.add("show-navigation");
    navigationButton.setAttribute("aria-expanded", true);
  } else {
    navigationLink.classList.add("fadeOut");
    siteHeader.classList.remove("show-navigation");
    navigationButton.setAttribute("aria-expanded", false);
    siteHeader.addEventListener("animationend", function () {
      navigationLink.classList.remove("fadeOut");
    });
  }
}

function closeNavMenu() {
  setTimeout(() => {
    siteHeader.classList.remove("show-navigation");
  }, 250);
}

navigationButton.addEventListener("click", toggleNavigation);
navigationLinks.forEach((navLink) => navLink.addEventListener("click", closeNavMenu));
profileImg.addEventListener("mouseenter", () => {
  profileImg.src = profileImg.dataset.srcgif;
});
profileImg.addEventListener("mouseleave", () => {
  profileImg.src = profileImg.dataset.srcimg;
});
showMoreProjectsButton.addEventListener("click", () => {
  hiddenProjects.forEach((project) => {
    project.classList.remove("project__item--hidden");
    project.removeAttribute("hidden");
  });
  showMoreProjectsButton.remove();
});
