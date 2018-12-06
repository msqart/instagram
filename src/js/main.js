'use strict';

const popup = document.querySelectorAll('.popup');
const header = document.querySelector('.header');

const btnLogIn = document.querySelectorAll('.log_in');
const btnSignUp = document.querySelectorAll('.sign_up');
const btnRecovery = document.querySelectorAll('.recovery');
const btnNo = document.querySelector('.btn_no');
const burgerBtn = document.querySelector('.burger_menu');
const burgerBtnMobile = document.querySelector('.burger_menu_mobile');
const btnArr = document.querySelectorAll('.btn');


const btnCheck = document.querySelectorAll('.btn_check');

const popupLogin = document.querySelector('.p_log_in');
const popupSignUp = document.querySelector('.p_sign_up');
const popupRecovery = document.querySelector('.p_recovery');
const popupEnter = document.querySelector('.p_enter');

const navBlock = document.querySelector('.header_nav');

const popupBfirst = document.querySelector('.b_first');
const popupBsecond = document.querySelector('.b_second');
const popupBthird = document.querySelector('.b_third');


const closePopup = document.querySelectorAll('.close');
const closeBf = document.querySelector('.cls_f');
const closeBs = document.querySelector('.cls_s');
const closeBt = document.querySelector('.cls_t');
const closeNav = document.querySelector('.cls_nav');


(function () {
    let screenWidth = document.body.clientWidth;
    if (screenWidth > 768 && (!(/how.html/.test(window.location.href)) && !(/blog.html/.test(window.location.href)))) {
        popupEnter.classList.add('p_active');
    } else {
        popupEnter.classList.remove('p_active');
    }
    console.log(screenWidth);
})();
window.addEventListener('resize', (even) => {
    let screenWidth = document.body.clientWidth;
    if (screenWidth > 768 && (!(/how.html/.test(window.location.href)) && !(/blog.html/.test(window.location.href)))) {
        popupEnter.classList.add('p_active');
    } else {
        popupEnter.classList.remove('p_active');
    }
    console.log(screenWidth);
});

function clsNav(elem, block) {
    elem.addEventListener('click', (even) => {
        even.preventDefault();
        block.classList.remove('active');
    });

}


window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
};

if (closeNav !== null) {
    clsNav(closeNav, navBlock);
}
const section = document.querySelectorAll('section');

if (burgerBtn !== null) {
    burgerBtn.addEventListener('click', (even) => {
        even.preventDefault();
        navBlock.classList.toggle('active');
        burgerBtn.classList.toggle('active');
        blur();
    });

    burgerBtnMobile.addEventListener('click', (even) => {
        even.preventDefault();
        navBlock.classList.toggle('active');
        burgerBtnMobile.classList.toggle('active');
        blur();
    });
}


function blur() {
    for (let i = 0; i < section.length; i++) {
        section[i].classList.toggle('blur');
    }
}

if (btnNo !== null) {
    btnNo.addEventListener('click', (even) => {
        even.preventDefault();
        popupBfirst.classList.add('p_active');
    });

    closeBf.addEventListener('click', (even) => {
        even.preventDefault();
        popupBfirst.classList.remove('p_active');
        popupBsecond.classList.add('p_active');
    });

    closeBs.addEventListener('click', (even) => {
        even.preventDefault();
        popupBsecond.classList.remove('p_active');
        popupBthird.classList.add('p_active');
    });

    closeBt.addEventListener('click', (even) => {
        even.preventDefault();
        popupBthird.classList.remove('p_active');
    });
}


check(btnCheck);


function check(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', (even) => {
            even.preventDefault();
            for (let i = 0; i < elem.length; i++) {
                elem[i].classList.remove('active');
            }
            elem[i].classList.add('active');
        });
    }
}


for (let i = 0; i < btnLogIn.length; i++) {
    btnLogIn[i].addEventListener('click', (even) => {
        even.preventDefault();
        for (let i = 0; i < popup.lenght; i++) {
            popup[i].classList.remove('p_active');
        }
        popupLogin.classList.toggle('p_active');
    });
}

for (let i = 0; i < btnSignUp.length; i++) {
    btnSignUp[i].addEventListener('click', (even) => {
        even.preventDefault();
        for (let i = 0; i < popup.lenght; i++) {
            popup[i].classList.remove('p_active');
        }
        popupSignUp.classList.toggle('p_active');
    });
}

for (let i = 0; i < btnRecovery.length; i++) {
    btnRecovery[i].addEventListener('click', (even) => {
        even.preventDefault();
        for (let i = 0; i < popup.lenght; i++) {
            popup[i].classList.remove('p_active');
        }
        popupRecovery.classList.toggle('p_active');
    });
}


for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener('click', (even) => {
        even.preventDefault();
        popupLogin.classList.remove('p_active');
        popupSignUp.classList.remove('p_active');
        popupRecovery.classList.remove('p_active');
        popupEnter.classList.remove('p_active');
    });
}


import Glide from '@glidejs/glide';

const glideSlider = document.querySelector('.glide');
const blogSlider = document.querySelector('.b_f_box');

if (glideSlider !== null) {
    const glide = new Glide('.glide', {
        gap: 0,
        type: 'carousel',
        startAt: 1,
        perView: 3,
        focusAt: 1,
        setActive: 'active',
        classes: {
            activeNav: 'active',
            activeSlide: 'active'
        },
        breakpoints: {
            1170: {
                perView: 2,
                startAt: 0,
            },
            900: {
                perView: 1,
                startAt: 0,
            },
            320: {
                perView: 1,
                startAt: 0,
            }
        }
    });
    glide.mount();
}

if (blogSlider !== null) {
    const glide = new Glide('.b_f_box', {
        gap: 30,
        type: 'carousel',
        startAt: 1,
        perView: 3,
        focusAt: 1,
        autoplay: 2000,
        setActive: 'active',
        classes: {
            activeNav: 'active',
            activeSlide: 'active'
        },
        breakpoints: {
            1170: {
                perView: 2,
                startAt: 0,
            },
            900: {
                perView: 1,
                startAt: 0,
            },
            320: {
                perView: 1,
                startAt: 0,
            }
        }
    });
    glide.mount();
}

/* Скрывать шапку */
/*
setInterval(headerRemove, 500);

function headerRemove() {
    const popActive = document.querySelectorAll('.p_active');
    if (popActive.length !== 0) {
        header.classList.add('no_active');
    } else {
        header.classList.remove('no_active');
    }
}
*/



