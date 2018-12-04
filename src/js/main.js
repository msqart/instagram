'use strict';

const popup = document.querySelectorAll('.popup');
const header = document.querySelector('.header');

const btnLogIn = document.querySelectorAll('.log_in');
const btnSignUp = document.querySelectorAll('.sign_up');
const btnRecovery = document.querySelectorAll('.recovery');
const btnNo = document.querySelector('.btn_no');
const burgerBtn = document.querySelector('.burger_menu');


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

function clsNav(elem, block) {
    elem.addEventListener('click', (even) => {
        even.preventDefault();
        block.classList.remove('active');
    });

}


if (closeNav !== null) {
    clsNav(closeNav, navBlock);
}

burgerBtn.addEventListener('click', (even) => {
    even.preventDefault();
    navBlock.classList.add('active');
});

if (btnNo !== null) {
    btnNo.addEventListener('click', (even) => {
        even.preventDefault();
        popupBfirst.classList.add('active');
    });

    closeBf.addEventListener('click', (even) => {
        even.preventDefault();
        popupBfirst.classList.remove('active');
        popupBsecond.classList.add('active');
    });

    closeBs.addEventListener('click', (even) => {
        even.preventDefault();
        popupBsecond.classList.remove('active');
        popupBthird.classList.add('active');
    });

    closeBt.addEventListener('click', (even) => {
        even.preventDefault();
        popupBthird.classList.remove('active');
    });
}


check(btnCheck);

if (!(/how.html/.test(window.location.href)) && !(/blog.html/.test(window.location.href))) {
    popupEnter.classList.add('active');
}

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
            popup[i].classList.remove('active');
        }
        popupLogin.classList.toggle('active');
    });
}

for (let i = 0; i < btnSignUp.length; i++) {
    btnSignUp[i].addEventListener('click', (even) => {
        even.preventDefault();
        for (let i = 0; i < popup.lenght; i++) {
            popup[i].classList.remove('active');
        }
        popupSignUp.classList.toggle('active');
    });
}

for (let i = 0; i < btnRecovery.length; i++) {
    btnRecovery[i].addEventListener('click', (even) => {
        even.preventDefault();
        for (let i = 0; i < popup.lenght; i++) {
            popup[i].classList.remove('active');
        }
        popupRecovery.classList.toggle('active');
    });
}


for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener('click', (even) => {
        even.preventDefault();
        popupLogin.classList.remove('active');
        popupSignUp.classList.remove('active');
        popupRecovery.classList.remove('active');
        popupEnter.classList.remove('active');
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
