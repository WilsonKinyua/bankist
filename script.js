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


//======================= styles, attributes, classes ===============================
const header = document.querySelector(".header");

const message = document.createElement('div');

message.classList.add("cookie-message");
message.innerHTML = "We use cookies for modern browsers. <button class='btn btn--close-cookie'>Got it!</button>";

header.append(message);

const btnClose = document.querySelector(".btn--close-cookie");

btnClose.addEventListener("click", () => {
  message.remove();
});

message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

document.documentElement.style.setProperty('--color-primary', 'yellow');

// attributes
const logo = document.querySelector(".nav__logo");
logo.src = "https://cdn.hubilo.com/logo/1402283/300/1596_9068_763672001621839178.jpg";
console.log(logo.src);