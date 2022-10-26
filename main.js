/* настройка навигации нажатие по клику бургера меню */

const btnNavEl = document.querySelector('.btn__mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle('nav__open');
})

/* плавная прокрутка для браузеров сафари и микрософт */

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link) {
  link.addEventListener('click',function(e){
    e.preventDefault();
    const href = link.getAttribute('href')
    /* scroll back to top */
    if (href === "#") window.scrollTo({
      top:0,
      behavior: 'smooth',
    });

    /* sroll to links */
    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: 'smooth'});
    }

    /* close mobile nav */
    if(link.classList.contains('menu__link'))
    headerEl.classList.toggle('nav__open');
  });
});