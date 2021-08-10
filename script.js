"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));


btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// =================== create, select, delete dom ====================
// console.log(document.documentElement)

// const allSections = document.querySelectorAll(".section");

// console.log(allSections)
// const header = document.querySelector(".header");

// const message = document.createElement('div');

// message.classList.add("cookie-message");
// message.innerHTML = "We use cookies for modern browsers. <button class='btn btn--close-cookie'>Got it!</button>";

// header.append(message);

// const btnClose = document.querySelector(".btn--close-cookie");

// btnClose.addEventListener("click", () => {
//   message.remove();
// });