let themes = 0;

function theme() {
  // the function to changes the theme in which the root variables are been changes and sone syles of some objects also.
  if (themes === 0) {
    document.body.style.backgroundColor = "rgb(14,14,14)";
    document.documentElement.style.setProperty("--text_color", "#fff");
    document.documentElement.style.setProperty("--text_color2", "#000");
    document.documentElement.style.setProperty("--nav_color", "rgb(14,14,14)");
    document.documentElement.style.setProperty("--icon", "rgb(20,20,20)");
    document.documentElement.style.setProperty("--scroll-color", " #f1f1f1");

    document.getElementById("theme").src =
      "https://i.ibb.co/QFpDYhr/theme-l.png";
    document.getElementById("theme2").src =
      "https://i.ibb.co/QFpDYhr/theme-l.png";
    document.getElementById("theme").style.transform = "rotate(360deg)";
    document.getElementById("theme2").style.transform = "rotate(360deg)";

    themes = 1;
  } else {
    document.body.style.backgroundColor = "white";
    document.documentElement.style.setProperty("--text_color", "#000");
    document.documentElement.style.setProperty("--text_color2", "#fff");
    document.documentElement.style.setProperty("--nav_color", "#fff");
    document.documentElement.style.setProperty("--icon", "#fff");
    document.documentElement.style.setProperty("--scroll-color", "rgb(155, 155, 155)");

    document.getElementById("theme").src =
      "https://i.ibb.co/zrK9B08/theme-d.png";
    document.getElementById("theme2").src =
      "https://i.ibb.co/zrK9B08/theme-d.png";
    document.getElementById("theme").style.transform = "rotate(0deg)";
    document.getElementById("theme2").style.transform = "rotate(0deg)";
    themes = 0;
  }
}


// --------------------------------------------------------------------------------------------

let old_id = "2003";
let old_color = "1";

function display_on(id, color) {
  // thes fuction controals the time line of the html shows the information according to the selected option

  if (document.getElementById(old_id).style.display == "block") {
    document.getElementById(old_id).style.display = "none";
    document.getElementById(old_color).style.background = "transparent";
    document.getElementById(old_color).style.color = "var(--text_color)";
  }
  document.getElementById(id).style.display = "block";
  document.getElementById(color).style.background = "var(--maincolor)";
  document.getElementById(color).style.color = "var(--text_color2)";

  old_id = id;
  old_color = color;
}


// this set the theme according to the theme / mode of user 
const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const userPrefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

if (userPrefersDark) {
  theme();
}

document.getElementById("2003").style.display = "block";
document.getElementById("1").style.background = "var(--maincolor)";


// ---------------------------------------------------------------------------------------------------------
function scroll_w(top) {
  // this is at fuction to scroll the site 
  window.scroll({
    top: top,
    behavior: "smooth",
  });
}

