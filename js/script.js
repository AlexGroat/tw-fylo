const themeToggle = document.getElementById("theme-toggle");
const themeDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeLightIcon.classList.remove("hidden");
} else {
  themeDarkIcon.classList.remove("hidden");
}

themeToggle.addEventListener("click", toggleTheme);

function toggleTheme() {
  themeDarkIcon.classList.toggle("hidden");
  themeLightIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    // If light, make dark and save to local storage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If not in local storage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
