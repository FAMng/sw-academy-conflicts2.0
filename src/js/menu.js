document.querySelector('.menu').addEventListener('click', function (){
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('open');
    document.querySelector('body').classList.toggle('off-scroll')
    document.querySelector('.header__menu-items').classList.toggle('open__menu-style')
})