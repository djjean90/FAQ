//Script.js

// const btnOpen = document.querySelectorAll(".fa-chevron-down");
// const divs = document.querySelectorAll(".faq");
// const btnCLose = document.querySelectorAll(".fa-times");

// btnOpen.forEach((btn, i) =>
//   btn.addEventListener("click", function () {
//     divs.forEach((div) => div.classList.remove("active"));
//     divs[i].classList.toggle("active");
//     // divs.forEach((div) => console.log(div[0]));
//   })
// );

// btnCLose.forEach((btn, i) =>
//   btn.addEventListener("click", function () {
//     divs.forEach((div) => div.classList.remove("active"));
//   })
// );

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.closest(".faq").classList.toggle("active");
  });
});
