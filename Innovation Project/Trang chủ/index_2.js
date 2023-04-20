const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(function (slideshow) {
  let slideIndex = 0;
  const slides = slideshow.querySelectorAll('.slide');
  const intervalTime =5000;
  const switchInterval = setInterval(nextSlide, intervalTime);

  function nextSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }
});

const boxes = document.querySelectorAll('.box1');

boxes.forEach(function (slideshow) {
  let slideIndex = 0;
  const slides = slideshow.querySelectorAll('.slide');
  const intervalTime = 5000;
  const switchInterval = setInterval(nextSlide, intervalTime);

  function nextSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }
});

const messages = document.querySelectorAll('.message');
const texts = ['Xin chào', 'Đây là', 'GoBook'];

let index = 0;

setInterval(() => {
  messages.forEach((message) => {
    message.textContent = texts[index];
  });

  index = (index + 1) % texts.length;
}, 5000);









