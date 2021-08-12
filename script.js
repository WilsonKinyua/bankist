"use strict";

const btnToScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnToScrollTo.addEventListener("click", function () {
  const sec1coord = section1.getBoundingClientRect();
  console.log(sec1coord);

  // method 1======>>>>>
  // scroll to specified section
  // window.scrollTo(
  //   sec1coord.left + window.pageXOffset,
  //   sec1coord.top + window.pageYOffset
  // );

  // method 2======>>>>>
  // window.scrollTo({
  //   left: sec1coord.left + window.pageXOffset,
  //   top: sec1coord.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // method 3======>>>>>
  section1.scrollIntoView({ behavior: "smooth" });
});

// ====================== page navigation to scroll down ==================

document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
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

const message = document.createElement("div");

message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies for modern browsers. <button class='btn btn--close-cookie'>Got it!</button>";

header.append(message);

const btnClose = document.querySelector(".btn--close-cookie");

btnClose.addEventListener("click", () => {
  message.remove();
});

// message.style.backgroundColor = "#37383d";
// // message.style.width = "120%";

// document.documentElement.style.setProperty('--color-primary', 'yellow');

// // attributes
// const logo = document.querySelector(".nav__logo");
// logo.src = "https://cdn.hubilo.com/logo/1402283/300/1596_9068_763672001621839178.jpg";
// console.log(logo.src);

// event handlers
// const h1 = document.querySelector("h1");
// window.addEventListener("online", function(e){
//   alert("You are now connected to the network.");
// });

// generate random color

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// // console.log(randomColor(0,255))

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
