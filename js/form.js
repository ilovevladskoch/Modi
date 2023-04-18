let textArea = document.getElementById('myTextArea');
textArea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

const emailInput = document.getElementById("email");
const noticeMessage = document.querySelector(".notice__message");

emailInput.addEventListener("input", () => {
    const email = emailInput.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        noticeMessage.classList.remove("notice--active");
    } else {
        noticeMessage.classList.add("notice--active");
    }
});

const myTextArea = document.getElementById('myTextArea');
const notice = document.querySelector('.notice__message:last-child');

myTextArea.addEventListener('input', function() {
    if (myTextArea.value.length < 25) {
        notice.classList.add('notice--active');
    } else {
        notice.classList.remove('notice--active');
    }
});



// const form = document.querySelector('.footer__form');
// const emailInput = form.querySelector('#email');
// const messageInput = form.querySelector('#myTextArea');
// const button = form.querySelector('button[type="submit"]');
// const notices = form.querySelectorAll('.notice__message');

// // отображение сообщения об ошибке
// function showErrorMessage(input, notice) {
//   input.classList.add('error');
//   notice.classList.remove('notice--hidden');
// }

// // скрытие сообщения об ошибке
// function hideErrorMessage(input, notice) {
//   input.classList.remove('error');
//   notice.classList.add('notice--hidden');
// }

// // проверка email
// function validateEmail() {
//   const email = emailInput.value.trim();
//   const emailNotice = notices[0];

//   if (email === '') {
//     showErrorMessage(emailInput, emailNotice);
//     return false;
//   }

//   hideErrorMessage(emailInput, emailNotice);
//   return true;
// }

// // проверка сообщения
// function validateMessage() {
//   const message = messageInput.value.trim();
//   const messageNotice = notices[1];

//   if (message === '' || message.length < 25) {
//     showErrorMessage(messageInput, messageNotice);
//     return false;
//   }

//   hideErrorMessage(messageInput, messageNotice);
//   return true;
// }

// // проверка всех полей
// function validateForm() {
//   let isValid = true;

//   if (!validateEmail()) {
//     isValid = false;
//   }

//   if (!validateMessage()) {
//     isValid = false;
//   }

//   return isValid;
// }

// // обработка клика на кнопку
// button.addEventListener('click', (event) => {
//   event.preventDefault();

//   if (validateForm()) {
//     // показываем попап

//     const pop = document.querySelector('.popup-thanks');
//     const buttonPop = document.querySelector('.btn-open-popup');

//     buttonPop.addEventListener('click', function () {
//         pop.classList.add('popup-thanks--active');
//     });

//     // сброс формы
//     form.reset();
//     notices.forEach((notice) => {
//       hideErrorMessage(emailInput, notice);
//     });
//     checkboxes.forEach((checkbox) => {
//       checkbox.checked = false;
//     });
//   }
// });