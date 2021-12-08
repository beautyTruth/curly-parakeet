// const slider = document.querySelector(".container");
// let isDown = false;
// let startx;
// let scrollToLeft;

// slider.addEventListener("mousedown", function (e) {
//   isDown = true;
//   slider.classList.add("active");

//   // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
//   startx = e.pageX - slider.offsetLeft;
//   // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
//   scrollToLeft = slider.scrollLeft;
// });

// slider.addEventListener("mouseup", function () {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mouseleave", function () {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mousemove", function (e) {
//   if (!isDown) return;
//   e.preventDefault();

//   const distanceX = e.pageX - slider.offsetLeft;
//   const walk = distanceX - startx;
//   slider.scrollLeft = scrollToLeft - walk;
// });

// fortune favors the bold

/*
my code below
*/

const slider = document.querySelector(".container");
let isDown = false;
let startx;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");

  startx = e.pageX - slider.offsetLeft;

  // console.log(e);
  // console.log(slider.offsetLeft);
  console.log(startx);
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
