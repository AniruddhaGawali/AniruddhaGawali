// let up_arrow = "https://i.ibb.co/NsMtrZw/up-arrow.png";
// let down_arrow = "https://i.ibb.co/fFdYGWQ/angle-arrow-down.png";
// function menu() {
//   var x = document.getElementById("nav");
//   if (x.style.display === "none") {
//     x.style.display = "flex";
//     document.getElementById("menubtn").src = up_arrow;
//   } else {
//     x.style.display = "none";
//     document.getElementById("menubtn").src = down_arrow;
//   }
// }

// function change_arrow() {
//   var x = document.getElementById("nav");
//   if (x.style.display === "none") {
//     document.getElementById("menubtn").src = down_arrow;
//   } else if (x.style.display === "flex") {
//     document.getElementById("menubtn").src = up_arrow;
//   } else {
//     document.getElementById("menubtn").src = down_arrow;
//   }
// }

let themes = 0;
function theme() {
  if (themes === 0) {
    document.body.style.backgroundColor = "rgb(14,14,14)";
    document.documentElement.style.setProperty("--text_color", "#fff");
    document.documentElement.style.setProperty("--text_color2", "#000");
    document.documentElement.style.setProperty("--nav_color", "rgb(14,14,14)");
    document.documentElement.style.setProperty("--scroll-color", " #f1f1f1");

    document.getElementById("theme").src =
      "https://i.ibb.co/QFpDYhr/theme-l.png";
    document.getElementById("theme2").src =
      "https://i.ibb.co/QFpDYhr/theme-l.png";
    document.getElementById("theme").style.transform = "rotate(360deg)";
    document.getElementById("theme2").style.transform = "rotate(360deg)";
    // document.getElementById("theme").style.transition = 'transform 1s ,margin-bottom .25s';

    themes = 1;
  } else {
    document.body.style.backgroundColor = "white";
    document.documentElement.style.setProperty("--text_color", "#000");
    document.documentElement.style.setProperty("--text_color2", "#fff");
    document.documentElement.style.setProperty("--nav_color", "#fff");
    document.documentElement.style.setProperty(
      "--scroll-color",
      "rgb(155, 155, 155)"
    );

    document.getElementById("theme").src =
      "https://i.ibb.co/zrK9B08/theme-d.png";
    document.getElementById("theme2").src =
      "https://i.ibb.co/zrK9B08/theme-d.png";
    document.getElementById("theme").style.transform = "rotate(0deg)";
    document.getElementById("theme2").style.transform = "rotate(0deg)";
    // document.getElementById("theme").style.transition = 'transform 1s,margin-bottom .25s';
    themes = 0;
  }
}

let old_id = "2003";
let old_color = "1";
function display_on(id, color) {
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

function scroll_w(top) {
  window.scroll({
    top: top,
    behavior: "smooth",
  });
}

