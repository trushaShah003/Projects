"use strict";

const btnSwitch = document.querySelector(".switch-btn");
const videoCon = document.querySelector(".video-container");
const preLoader = document.querySelector(".preloader");

// console.log(btnSwitch, videoCon);

// preloader
window.addEventListener("load", function () {
  preLoader.classList.add("hide-preloader");
});

btnSwitch.addEventListener("click", function () {
  btnSwitch.classList.toggle("slide");

  if (!btnSwitch.classList.contains("slide")) videoCon.play();
  if (btnSwitch.classList.contains("slide")) videoCon.pause();
});
