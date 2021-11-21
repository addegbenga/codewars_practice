const slide = document.querySelectorAll(".slider");

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const slideWidth = Array.from(slide)[0].getBoundingClientRect().width;

console.log(slideWidth);
let slideInd = 0;

slide.forEach((item, ind) => {
  item.style.left = ind * slideWidth + "px";
});

let initial = 0;
let amount = slideWidth;

leftBtn.addEventListener("click", () => {
  initial += amount;
  slide.forEach((item, ind) => {
    item.style.transform = "translateX(" + -initial + "px)";
  });
  console.log(initial);
});
