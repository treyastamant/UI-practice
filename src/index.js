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

  menuIcon.addEventListener("click", () => {
    console.log(menuIcon.src);
    if (menuIcon.src === "http://../graphics/menu-icon.svg") {
      menuIcon.src = "http://../graphics/close-icon.svg";
    } else {
      menuIcon.src = "http://../graphics/menu-icon.svg";
    }
  });

  const menuItems = document.querySelector(".menu-items");

  menuItems.classList.toggle("hidden");
  // menuIcon.src = "/graphics/close.svg";

  // if (menuIcon.textContent === "arrow_drop_down") {
  //   menuIcon.textContent = "arrow_drop_up";
  // } else {
  //   menuIcon.textContent = "arrow_drop_down";
  // }
})();
