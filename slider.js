const sliderList = document.querySelector(".slider__list");
const sliderImages = ["js", "react", "node", "angular", "git", "mongo-db"];

sliderImages.forEach((img, index) => {
  const flexValue = index === 0 ? 10 : 2;
  const sliderItem = `<li class="slider__item" style="background-image: url(./assets/slider-images/${img}.jpg); flex: ${flexValue}"></li>`;
  sliderList.insertAdjacentHTML("beforeend", sliderItem);
});

sliderList.addEventListener("onmouseover", (e) => {
  if (e.target.classList.contains("slider__item")) {
    const sliders = document.querySelectorAll(".slider__item");
    firstSliderItem.style.flex = "2";
    sliders.style.flex = "2";
    e.target.style.flex = "10";
    console.log(e.target);
  }
});
