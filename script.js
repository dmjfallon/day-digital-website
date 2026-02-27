function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  const favicon = document.getElementById("site-favicon");
  favicon.href =
    theme === "dark"
      ? "favicon-dark-32x32.png"
      : "favicon-light-32x32.png";
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme("light"); // default
});