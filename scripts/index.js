const mapLink = document.getElementById('map-link');
const closeMapIcon = document.getElementById('close-map-icon');
const closeFormIcon = document.getElementById('close-form-icon');
const popupWindowMap = document.getElementById('popup-window-map');
const popupWindowForm = document.getElementById('popup-window-form');
const phoneLink = document.getElementById('phone-link');
const formCheckbox = document.getElementById('popup-window-phone-form-checkbox');
const formButton = document.getElementById('popup-window-form-button');
const popupWindowMessage = document.getElementById('popup-window-message');
const phoneInput = document.getElementById('popup-window-phone-form-input');
const header = document.getElementById('header');
const headerInfo = document.getElementById('header-info');
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');
const headerHeight = 65;

mapLink.addEventListener('click', () => {
    popupWindowMap.classList.remove('popup-window-background-hidden');
    document.body.classList.toggle('lock');
});

closeMapIcon.addEventListener('click', () => {
    popupWindowMap.classList.add('popup-window-background-hidden');
    document.body.classList.toggle('lock');
});

phoneLink.addEventListener('click', () => {
    popupWindowForm.classList.remove('popup-window-background-hidden');
    document.body.classList.toggle('lock');
});

closeFormIcon.addEventListener('click', () => {
    popupWindowForm.classList.add('popup-window-background-hidden');
    document.body.classList.toggle('lock');
});

formCheckbox.addEventListener("click", () => {
    if(formCheckbox.checked) {
        formButton.removeAttribute('disabled');
        formButton.classList.remove('popup-window-form-button-disabled');
    } else {
        formButton.setAttribute('disabled', 'disabled');
        formButton.classList.add('popup-window-form-button-disabled');
    }
});

popupWindowForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!phoneInput.value.includes('_')) {
        document.body.classList.toggle('lock');
        phoneInput.value = '';
        formCheckbox.checked = false;
        formButton.setAttribute('disabled', 'disabled');
        formButton.classList.add('popup-window-form-button-disabled');
        popupWindowForm.classList.add('popup-window-background-hidden');
        popupWindowMessage.classList.remove('popup-window-background-hidden');
        setTimeout(() => popupWindowMessage.classList.add('popup-window-background-hidden'), 1500);
    }
});

function setHeader() {
    const scrollPoint = window.pageYOffset + headerHeight;

    if (window.screen.width < 480) {
        if (scrollPoint > headerHeight) {
            header.classList.remove('transparent');
            headerInfo.classList.remove('white');
            hamburger.classList.remove('white');
            header.classList.add('gradient');
            headerInfo.classList.add('black');
            hamburger.classList.add('black');
        } else if (!hamburger.classList.contains('active')) {
            header.classList.remove('gradient');
            headerInfo.classList.remove('black');
            hamburger.classList.remove('black');
            header.classList.add('transparent');
            headerInfo.classList.add('white');
            hamburger.classList.add('white');
        }
        window.requestAnimationFrame(setHeader);
    }
}
  
window.requestAnimationFrame(setHeader);

hamburger.addEventListener('click', () => {
    header.classList.remove('transparent');
    headerInfo.classList.remove('white');
    hamburger.classList.remove('white');
    header.classList.add('gradient');
    headerInfo.classList.add('black');
    hamburger.classList.add('black');
    hamburger.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    headerInfo.classList.toggle('active');
    document.body.classList.toggle('lock');
})

$("#popup-window-phone-form-input").mask("+7 (999) 999-99-99", {autoclear: false});
