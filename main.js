const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Show line
// Have bug in offsetLeft
const line = $$('.line');
const languageItems = $$('.language__item');
const languageLinks = $$('.language__link');

languageItems.forEach(function(languageItem, index) {
    languageItem.onmouseover = function() {
        line[index].style.width = languageLinks[index].offsetWidth + 'px';
    }
    languageItem.onmouseout = function() {
        line[index].style.width = 0;
    }
})


// Show Header Modal
const headerModal = $('.header-top__modal');
const user = $('.auth-container');
const headerOverlay = $('.header-top__modal-overlay');

user.onclick = function() {
    headerModal.classList.add('modal--actived');
}

headerOverlay.onclick = function(event) {
    headerModal.classList.remove('modal--actived');
    event.stopPropagation();
}

// Switching between Login and Register
const signIn = $('.auth-form__sign-in-container');
const register = $('.auth-form__register-container');

function showRegisterModal() {
    signIn.classList.remove('auth-form__container--actived');
    register.classList.add('auth-form__container--actived');
}

function showSignInModal() {
    register.classList.remove('auth-form__container--actived');
    signIn.classList.add('auth-form__container--actived')
}


// Show sub Option searching
const subOptionModal = $('.sub-options__modal');
const subOptionOverlay = $('.sub-options__modal-overlay');

function showSubOptionModal() {
    subOptionModal.classList.add('modal--actived'); 
}

subOptionOverlay.onclick = function(event) {
    subOptionModal.classList.remove('modal--actived');
    event.stopPropagation();
}

// Show sub option Menu
const supOptionOverlay = $('.sub-options__overlay');
const supOptionMenu = $('.sub-options__menu');
const openSubOptionBtn = $('.sub-options__icon.ti-layout-grid3');
const closeSubOptionBtn = $('.sub-options__menu-icon.ti-close');

function openSupOption() {
    supOptionOverlay.classList.add('actived');
    supOptionMenu.classList.add('sub-options__menu--actived');
}
function closeSupOption() {
    supOptionOverlay.classList.remove('actived');  
    supOptionMenu.classList.remove('sub-options__menu--actived');
}


// slider__travel-time
const sliderTravelTime = $('.slider__travel-time');
const sliderTravelType = $('.slider__travel-type');
var isSliderTravelTime = false;
var isSliderTravelType = false;
var isSliderActive = false;
sliderTravelTime.onclick = function() {
    if (!isSliderTravelTime) {
        $('.slider__travel-time-lists').style.display = 'block';
        isSliderTravelTime = true;
    }
    else {
        $('.slider__travel-time-lists').style.display = 'none';
        isSliderTravelTime = false;
    }
}
sliderTravelType.onclick = function() {
    if (!isSliderTravelType) {
        $('.slider__travel-type-lists').style.display = 'block';
        isSliderTravelType = true;
    }
    else {
        $('.slider__travel-type-lists').style.display = 'none';
        isSliderTravelType = false;
    }
}


sliderTravelTime.querySelectorAll('li').forEach((month, index) => {
    month.onclick = function() {
        sliderTravelTime.querySelector('.slider__travel-default').textContent = month.textContent;
        for (let value of sliderTravelTime.querySelectorAll('li')) {
            if (value.classList.contains('slider__active')) {
                value.classList.remove('slider__active');
            }
        }
        month.classList.add('slider__active');
    }
})
sliderTravelType.querySelectorAll('li').forEach((type, index) => {
    type.onclick = function() {
        sliderTravelType.querySelector('.slider__travel-default').textContent = type.textContent;
        for (let value of sliderTravelType.querySelectorAll('li')) {
            if (value.classList.contains('slider__active')) {
                value.classList.remove('slider__active');
            }
        }
        type.classList.add('slider__active')
    }
})



// Show line header navbar item
const blueLine = $$('.line.line-blue')
const headerNavItems = $$('.header-navbar__items');
const headerNavLinks = $$('.header-navbar__items p');

const headerNavSubLists = $$('.header-navbar__sub-lists')

headerNavItems.forEach((headerNavItem, index) => {
    headerNavItem.onmouseover = function() {
        blueLine[index].style.width = headerNavLinks[index].offsetWidth + 'px';
    }
    headerNavItem.onmouseout = function() {
        blueLine[index].style.width = 0;
    }
})


// ScrollTop
const headerNavbar = $('.header-navbar');
const SCROLL_NAVBAR = 933;
document.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= SCROLL_NAVBAR) {
        headerNavbar.style.position = 'fixed';
        headerNavbar.style.top = '0';
    }
    else {
        headerNavbar.style.position = null;
        $('.header-navbar').style.top = null;
    }
}