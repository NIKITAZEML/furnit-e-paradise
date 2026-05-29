const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

/*
|--------------------------------------------------------------------------
| PHONE MASK
|--------------------------------------------------------------------------
*/

const phoneInput = document.querySelector('input[type="tel"]');

Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false
}).mask(phoneInput);

/*
|--------------------------------------------------------------------------
| FORM
|--------------------------------------------------------------------------
*/

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    if (phoneInput.inputmask.unmaskedvalue().length < 10) {
        alert('Введите корректный номер телефона');
        return;
    }

    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
});

/*
|--------------------------------------------------------------------------
| BURGER MENU
|--------------------------------------------------------------------------
*/

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {

    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    document.body.classList.toggle('menu-open');

});

document.querySelectorAll('.mobile-menu a').forEach(link => {

    link.addEventListener('click', () => {

        burger.classList.remove('active');
        mobileMenu.classList.remove('active');

        document.body.classList.remove('menu-open');

    });

});