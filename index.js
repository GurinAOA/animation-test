"use strict";
const h1 = document.querySelector("h1"),
  h2 = document.querySelector("h2"),
  imgLeftTop = document.querySelector(".first"),
  imgLeftBottom = document.querySelector(".second"),
  imgRightTop = document.querySelector(".third"),
  imgBottomRight = document.querySelector(".fourth");

let start = null;
let current_rotation = 0;

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  h2.style.transform = "translateY(" + Math.min(progress / 10, 200) + "px)";
  // h2.style.transform = "scale(1.2)";
  h1.style.transform = "translateX(" + Math.min(progress / 10, 200) + "px)";
  //   window.addEventListener("click", function () {
  //     current_rotation += 15;
  //     imgLeftTop.style.transform = "rotate(" + current_rotation + "deg)";
  //     imgLeftBottom.style.transform = "rotate(" + current_rotation + "deg)";
  //     imgRightTop.style.transform = "rotate(" + current_rotation + "deg)";
  //     imgBottomRight.style.transform = "rotate(" + current_rotation + "deg)";
  //   }

  // );

  if (progress < 500) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

var a = 1,
  b = 0,
  c = 0,
  d = 1,
  tx = 0,
  ty = 0,
  angle = 0,
  currentAngle;

function getAngleToRAD() {
  if (angle === 360) {
    angle = 0;
  }

  return (angle++ * Math.PI) / 90;
}

function update() {
  currentAngle = getAngleToRAD();
  imgLeftTop.style.transform =
    "matrix(" +
    Math.cos(currentAngle) +
    "," +
    Math.sin(currentAngle) +
    "," +
    -Math.sin(currentAngle) +
    "," +
    Math.cos(currentAngle) +
    "," +
    tx +
    "," +
    tx +
    ")";
  imgLeftBottom.style.transform =
    "matrix(" +
    Math.cos(currentAngle) +
    "," +
    Math.sin(currentAngle) +
    "," +
    -Math.sin(currentAngle) +
    "," +
    Math.cos(currentAngle) +
    "," +
    tx +
    "," +
    tx +
    ")";
  imgBottomRight.style.transform =
    "matrix(" +
    Math.cos(currentAngle) +
    "," +
    Math.sin(currentAngle) +
    "," +
    -Math.sin(currentAngle) +
    "," +
    Math.cos(currentAngle) +
    "," +
    tx +
    "," +
    tx +
    ")";
  imgRightTop.style.transform =
    "matrix(" +
    Math.cos(currentAngle) +
    "," +
    Math.sin(currentAngle) +
    "," +
    -Math.sin(currentAngle) +
    "," +
    Math.cos(currentAngle) +
    "," +
    tx +
    "," +
    tx +
    ")";
  window.requestAnimationFrame(update);
}

update();

let id = requestAnimationFrame(step);
cancelAnimationFrame(id);
