// activating nav bar 
const menubtn = document.querySelector(".nav-btn");
menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("nav-active");
  document.querySelector(".nav").classList.toggle("active");
  document.querySelector(".header").classList.toggle("header-nav-active")
});


// added a trigger btn to html
let theme = false;
const toggle_btn = document.querySelector(".theme");
toggle_btn.addEventListener("click", theme_changer);

// added theme changer func 
function theme_changer() {
  document
    .querySelector(".toggle-btn-switch")
    .classList.toggle("toggle-btn-switch-change");
  console.log("hi");
  if (theme === false) {
    theme = true;
    document.documentElement.style.setProperty("--primary-color-800", "#fff");
    document.documentElement.style.setProperty("--primary-color-0", "#181a1b");
  } else if (theme === true) {
    theme = false;
    document.documentElement.style.setProperty("--primary-color-800","#181a1b");
    document.documentElement.style.setProperty("--primary-color-0", "#fff");
  }
}

function remove_nav() {
  menubtn.classList.toggle("nav-active");
  document.querySelector(".nav").classList.toggle("active");
  document.querySelector(".header").classList.toggle("header-nav-active")
}

// func to makesite to got top 
function back_to_top() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  remove_nav();
}

// auto set theme according to used browser theme
const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const userPrefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

if (userPrefersDark) {
  theme_changer();
}
