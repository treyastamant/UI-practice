const forEach = require("for-each");

// document.getElementById("1").classList.toggle("show");
const dropDown = document.querySelectorAll(".dropdown");

dropDown.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("show");
  });
});
console.log("one");
