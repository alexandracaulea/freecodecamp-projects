const navBar = document.querySelector(".nav");
const navButton = document.querySelector(".nav-toggle");
const counterElements = document.querySelectorAll(".get-started .counter");
const footerForm = document.querySelector(".footer-form");
const emailForm = footerForm.querySelector(".footer-email");
const videoContainer = document.querySelector(".video-learning");
const video = videoContainer.querySelector(".video");
const progress = videoContainer.querySelector(".progress");
const progressBar = videoContainer.querySelector(".progress-fill");
const togglePlayButton = videoContainer.querySelector(".toggle");
const skipButtons = videoContainer.querySelectorAll("[data-skip]");
let mousedown = false;

// Hamburger Navigation
function toggleNavigation() {
  if (navBar.classList.contains("is-open")) {
    this.setAttribute("aria-expanded", false);
    navBar.classList.remove("is-open");
  } else {
    navBar.classList.add("is-open");
    this.setAttribute("aria-expanded", true);
  }
}

// Newsletter form submit
function createAlert(elem, msg) {
  if (footerForm.querySelector("span.form-error-message")) return;
  const alertElement = document.createElement(elem);
  alertElement.setAttribute("role", "alert");
  alertElement.classList.add("form-error-message");
  alertElement.textContent = msg;
  emailForm.insertAdjacentElement("afterend", alertElement);
}

function handleFormSubmit(e) {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!pattern.test(emailForm.value.trim())) {
    e.preventDefault();
    footerForm.classList.add("form-error");
    createAlert("span", "Email is not valid");
  }
}

// Video player
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function changeButton() {
  togglePlayButton.textContent = this.paused ? "►" : "❚❚";
}

function skipSeconds() {
  video.currentTime += +this.dataset.skip;
}

function handleProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function handleProgressBarProgress(e) {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
}

// Counters
function counter(target, start, stop) {
  target.innerText = 0.1;
  const counterInterval = setInterval(() => {
    start += 0.1;
    const valueConverted = (Math.round(start * 100) / 100).toFixed(1);
    target.innerText = valueConverted;
    if (valueConverted == stop) {
      clearInterval(counterInterval);
    }
  }, 30);
}

function obCallBack(entries) {
  entries.forEach(entry => {
    const { target } = entry;
    const stopValue = target.innerText;
    const startValue = 0;
    if (!entry.isIntersecting) return;
    counter(target, startValue, stopValue);
    counterObserver.unobserve(target);
  });
}

const counterObserver = new IntersectionObserver(obCallBack, { threshold: 1 });
counterElements.forEach(counterElem => counterObserver.observe(counterElem));

// Event Listeners
navButton.addEventListener("click", toggleNavigation);
footerForm.addEventListener("submit", handleFormSubmit);
video.addEventListener("click", togglePlay);
video.addEventListener("play", changeButton);
video.addEventListener("pause", changeButton);
video.addEventListener("timeupdate", handleProgressBar);
togglePlayButton.addEventListener("click", togglePlay);
progress.addEventListener("click", handleProgressBarProgress);
progress.addEventListener("mousemove", e => mousedown && handleProgressBarProgress(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
skipButtons.forEach(button => button.addEventListener("click", skipSeconds));
