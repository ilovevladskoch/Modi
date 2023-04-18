const popBtn = document.querySelectorAll('.open-poup'),
popupBlock = document.querySelector('.popup'),
btnClose = document.querySelector('.button-close');
for(item of popBtn) {
    item.addEventListener('click', function () {
        popupBlock.classList.add('popup--active');
    });
    btnClose.addEventListener('click', function () {
        popupBlock.classList.remove('popup--active');

    });
}

const btnThanks = document.querySelector('.button-thanks-popup'),
popupThanks = document.querySelector('.popup-thanks'),
closeThanks = document.querySelector('.button-thanks-close');

btnThanks.addEventListener('click', function () {
    popupThanks.classList.add('popup-thanks--active');
    });
    closeThanks.addEventListener('click', function () {
    popupThanks.classList.remove('popup-thanks--active');
});

const btnVideo = document.querySelector('.button-video-popup'),
popupVideo = document.querySelector('.popup-video'),
closeVideo = document.querySelector('.button-video-close');

btnVideo.addEventListener('click', function () {
    popupVideo.classList.add('popup-video--active');
    });
    closeVideo.addEventListener('click', function () {
    popupVideo.classList.remove('popup-video--active');
});

