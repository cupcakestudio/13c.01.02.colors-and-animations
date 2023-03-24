let theme = localStorage.getItem("data-theme");
console.log(theme);
// Change theme to dark by adding the `dark` classname to html element.
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); //set theme to dark
  localStorage.setItem("data-theme", "dark"); //save theme item to value
};

// Reset the html class to default
const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); //set theme to light
  localStorage.setItem("data-theme", "light");
};

// Get the element based on ID
const toggleBtn = document.getElementById("switch");
// Apply retrived them to the website
toggleBtn.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
    console.log("I give you dark");
  } else {
    changeThemeToDark();
    console.log("I give you light");
  }
});

//animations
import { animate, scroll } from "https://cdn.skypack.dev/motion";
// from motion dev : https://codesandbox.io/s/motion-one-fade-in-out-on-scroll-692she?from-embed=&file=/index.js

document.querySelectorAll("article > section").forEach((item) => {
  scroll(animate(item, { opacity: [0, 0.5, 1, 0.5, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"],
  });
});
