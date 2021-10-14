let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let slide = document.querySelectorAll(".slide");
slide.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

prevBtn.addEventListener("click", function () {
  counter--;
  console.log(counter);
  carasouel();
});
nextBtn.addEventListener("click", function () {
  counter++;
  console.log(counter);
  carasouel();
});
function carasouel() {
  if (counter < slide.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slide.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
