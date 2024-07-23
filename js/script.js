"use strict";

/*
-preload
-loading will end after the document is loaded
*/

const preloader = document.querySelector(".preload");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/*
-Menu icon
-handle menu icon for sidenavbar
*/

let clicked = false;

const menuIcon = document.querySelector(".nav-open-btn");
const sideNavBar = document.querySelector(".side-navbar");
const colseIcon = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", function () {
  sideNavBar.classList.add("show");
  overlay.classList.add("show");
  clicked = true;
});

colseIcon.addEventListener("click", function () {
  sideNavBar.classList.remove("show");
  overlay.classList.remove("show");
  clicked = false;
});

overlay.addEventListener("click", function () {
  sideNavBar.classList.remove("show");
  overlay.classList.remove("show");
  clicked = false;
});

window.addEventListener("resize", function checkScreenSize() {
  if (clicked) {
    if (window.matchMedia("(min-width: 1080px)").matches) {
      sideNavBar.classList.remove("show");
      overlay.classList.remove("show");
    } else {
      overlay.classList.add("show");
      sideNavBar.classList.add("show");
    }
  }
});

/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector(".header");
const topbar = document.querySelector(".topbar");

let lastScrollPos = 0;
window.addEventListener("scroll", function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (window.scrollY > 100) {
    topbar.classList.add("hide");
    if (isScrollBottom) {
      header.classList.add("hide");
      header.classList.remove("active");
    } else {
      header.classList.remove("hide");
      header.classList.add("active");
    }
    lastScrollPos = window.scrollY;
  } else {
    topbar.classList.remove("hide");
    header.classList.remove("active");
  }
});

/**
 * Hero
 */

const items = document.querySelectorAll(".item");
let currentIndex = 0;
let interval;

function showItem(index) {
  items[currentIndex].classList.remove("active");

  currentIndex = (index + items.length) % items.length;

  items[currentIndex].classList.add("active");
}

function showNextItem() {
  showItem(currentIndex + 1);
}

function showPrevItem() {
  showItem(currentIndex - 1);
}

items[currentIndex].classList.add("active");

interval = setInterval(showNextItem, 5000);

document.querySelector(".hero .next").addEventListener("click", function () {
  clearInterval(interval);
  showNextItem();
  interval = setInterval(showNextItem, 5000);
});

document.querySelector(".hero .prev").addEventListener("click", function () {
  clearInterval(interval);
  showPrevItem();
  interval = setInterval(showNextItem, 5000);
});

// handle click on date feild
document
  .querySelector("input[type='date']")
  .addEventListener("click", function (event) {
    event.target.showPicker();
  });

// totop icon
const totop = document.querySelector(".totop");

totop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
});
