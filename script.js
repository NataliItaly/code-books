const booksContainer = document.querySelector(".books");

const sliderList = document.querySelector(".slider__list");
const sliderImages = ["js", "react", "node", "angular", "git", "mongo-db"];

fetch("books.json") // 🕵️‍♀️ Поиск файла
  .then((response) => response.json()) // 📬 Загрузка
  .then((data) => {
    data.books.forEach((book) => {
      const bookImage =
        book.image !== "" ? book.image : "./assets/image-not-found.png";
      const bookItem = `<li class="books__item"><div class="books__picture"><img src=${bookImage} alt=${book.title} class="books__img"></div><div class="books__info"><h3 class="books__title">${book.title}</h3><h4 class="books__author">${book.author}</h4></div><div  class="books__order"><p class="books__price">$${book.price}</p><button class="button">View</button></div></li>`;
      booksContainer.insertAdjacentHTML("beforeend", bookItem);
    });
  });

sliderImages.forEach((img) => {
  const sliderItem = `<li class="slider__item"><img src="./assets/slider-images/${img}.jpg" alt=${img} class="slider__img" width="800"/></li>`;
  sliderList.insertAdjacentHTML("beforeend", sliderItem);
});
