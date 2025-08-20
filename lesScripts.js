// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle('active', i === index);
//   });
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slides.length;
//   showSlide(currentIndex);
// }

// setInterval(nextSlide, 2000); 

// Change every 4 seconds

//   const slides = document.querySelectorAll('.slide');
//   const dots = document.querySelectorAll('.dot');
//   const prev = document.querySelector('.prev');
//   const next = document.querySelector('.next');
//   let currentIndex = 0;
//   let interval = setInterval(nextSlide, 4000); 

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.classList.toggle('active', i === index);
//     });
//     dots.forEach((dot, i) => {
//       dot.classList.toggle('active', i === index);
//     });
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

//   function currentSlide(index) {
//     currentIndex = index;
//     showSlide(currentIndex);
//   }

//   next.addEventListener('click', () => {
//     nextSlide();
//     resetInterval();
//   });

//   prev.addEventListener('click', () => {
//     prevSlide();
//     resetInterval();
//   });

//   function resetInterval() {
//     clearInterval(interval);
//     interval = setInterval(nextSlide, 4000);
//   }




