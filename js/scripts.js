const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton')

btnElement.addEventListener('click', () => {
  btnElement.classList.toggle('open');
  navElement.classList.toggle('open');
})

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'slide',
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 5000,
  }
});