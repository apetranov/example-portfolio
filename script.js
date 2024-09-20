document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const modeSwitch = document.querySelector(".modeSwitch");
  const modeSwitch2 = document.querySelector(".modeSwitch2");
  const lightBtn = document.querySelector(".light");
  const darkBtn = document.querySelector(".dark");
  const link = document.querySelector(".link");
  const menu = document.querySelector(".menu");
  const links = document.querySelector(".links");
  const close = document.querySelector(".close");
  const mobile = document.querySelector(".mobile");
  const lightBtn2 = document.querySelector(".light2");
  const darkBtn2 = document.querySelector(".dark2");

  // Check localStorage on load to apply saved theme
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
    applyDarkMode();
  } else {
    applyLightMode();
  }

  menu.addEventListener("click", () => {
    console.log("Menu clicked");
    mobile.style.visibility = "visible";
  });

  close.addEventListener("click", () => {
    mobile.style.visibility = "hidden";
  });

  modeSwitch.addEventListener("click", () => {
    if (!lightBtn.classList.contains("hidden")) {
      applyDarkMode();
      localStorage.setItem("theme", "dark"); // Save dark mode preference
    } else {
      applyLightMode();
      localStorage.setItem("theme", "light"); // Save light mode preference
    }
  });

  modeSwitch2.addEventListener("click", () => {
    if (!lightBtn2.classList.contains("hidden")) {
      applyDarkMode();
      localStorage.setItem("theme", "dark"); // Save dark mode preference
    } else {
      applyLightMode();
      localStorage.setItem("theme", "light"); // Save light mode preference
    }
  });

  // Function to apply dark mode
  function applyDarkMode() {
    lightBtn.classList.add("hidden");
    darkBtn.classList.remove("hidden");
    lightBtn2.classList.add("hidden");
    darkBtn2.classList.remove("hidden");
    modeSwitch.style.backgroundColor = "gray";
    modeSwitch2.style.backgroundColor = "gray";
    modeSwitch2.style.padding = "5px";
    modeSwitch2.style.borderRadius = "100%";
    body.classList.add("dark-mode");
    link.style.color = "white";
    close.style.backgroundColor = "gray";
    close.style.padding = "5px";
    close.style.borderRadius = "100%";
  }

  // Function to apply light mode
  function applyLightMode() {
    darkBtn.classList.add("hidden");
    lightBtn.classList.remove("hidden");
    darkBtn2.classList.add("hidden");
    lightBtn2.classList.remove("hidden");
    body.classList.remove("dark-mode");
    link.style.color = "black";
    modeSwitch.style.backgroundColor = "white";
    modeSwitch2.style.backgroundColor = "white";
    close.style.backgroundColor = "white";
  }
});
