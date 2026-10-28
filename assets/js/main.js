// main.js

let grid = doculment.querySelectorAll(".grid-container");
let divs = doculment.querySelectorAll(".grid-container div");

function randomize() {
  console.log(divs.length, "randomize!")

  //affects the while grid
  grid(0).style.transform = 'rotate(${Math.random() * 360}deg)';

  //just the grid divs
  divs.forEach(function (div) {
              let scale = randomNumber(.5, 1.2);
  }
 )
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
