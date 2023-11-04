(function dropdown() {
  const dropDown = document.querySelectorAll(".dropdown");

  dropDown.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("show");
    });
  });
})();

(function showMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const menuItems = document.querySelector(".menu-items");
  const mainContent = document.querySelector("section");
  const body = document.querySelector("body");

  menuIcon.addEventListener("click", () => {
    menuItems.classList.toggle("hidden");
    mainContent.classList.toggle("hidden");

    if (menuIcon.alt === "menu") {
      menuIcon.src = "/graphics/close-icon.svg";
      menuIcon.alt = "close";
      body.style.backgroundColor = "var(--background-blue)";
    } else {
      menuIcon.src = "/graphics/menu-icon.svg";
      menuIcon.alt = "menu";
      body.style.backgroundColor = "transparent";
    }
  });

  // menuIcon.src = "/graphics/close.svg";

  // if (menuIcon.textContent === "arrow_drop_down") {
  //   menuIcon.textContent = "arrow_drop_up";
  // } else {
  //   menuIcon.textContent = "arrow_drop_down";
  // }
})();
