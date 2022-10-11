const hamburgerBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('display');
  hamburgerBtn.childNodes[1].src = mobileNav.classList.contains('display') ? 'img/close.png' : 'img/menu.png';
});

mobileNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') mobileNav.classList.remove('display');
  hamburgerBtn.childNodes[1].src = 'img/menu.png';
});