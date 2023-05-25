const container = document.querySelector('.services-container');
const prevButton = document.querySelector('.scroll-prev');
const nextButton = document.querySelector('.scroll-next');

prevButton.addEventListener('click', () => {
  container.scrollBy({
    left: -100, 
    behavior: 'smooth' 
  });
});

nextButton.addEventListener('click', () => {
  container.scrollBy({
    left: 100, 
    behavior: 'smooth' 
  });
});