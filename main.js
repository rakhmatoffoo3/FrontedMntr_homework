const iconMenu = document.querySelector('.iconMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.closeMenu');

iconMenu.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 770) {
    mobileMenu.classList.remove('active');
  }
});