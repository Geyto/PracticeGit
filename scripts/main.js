document.addEventListener('DOMContentLoaded', function () {
    const regForm = document.getElementById('regForm');
    const link = document.getElementById('label5');
    const formFields = {
        name: document.getElementById('fullName'),
        username: document.getElementById("userName"),
        mail: document.getElementById('mail'),
        passwordOne: document.getElementById('passwordOne'),
        passwordTwo: document.getElementById('passwordTwo'),
        check: document.getElementById('checkbox-agree'),
    };
    const items = {
        title: document.getElementById('title'),
        submit: document.getElementById('submit'),
        popup: document.getElementById('popup'),
        btn: document.getElementById('btn__popup'),
        name: document.getElementById('label1'),
        mail: document.getElementById('label2'),
        password: document.getElementById('label3'),
    };
    const onRegisterSubmit = (event) => {
        if (!formFields.name.value) {
            alert('Введите ваше имя');
            event.preventDefault();
            return
        } else if (!formFields.username.value) {
            alert('Введите Логин');
            event.preventDefault();
            return
        } else if (!formFields.mail.value) {
            alert('Введите вашу почту');
            event.preventDefault();
            return
        } else if (formFields.passwordOne.value.length < 8) {
            alert("Пароль должен состоять из 8 символов");
            event.preventDefault();
            return
        } else if (!formFields.passwordOne.value) {
            alert('Введите пароль');
            event.preventDefault();
            return
        } else if (!formFields.passwordTwo.value) {
            alert('Введите пароль повторно');
            event.preventDefault();
            return
        } else if (formFields.passwordOne.value !== formFields.passwordTwo.value) {
            alert('Пароли не совпадают');
            event.preventDefault();
            return
        }
        if (!formFields.check.checked) {
            alert("Подтвердите согласие");
            event.preventDefault();
            return
        } else {
            items.popup.classList.add('popup__active');
            event.preventDefault();
        }
        regForm.onsubmit = onLoginSubmit;
    }
    formFields.name.onkeydown = (event) => {
        let string = parseInt(event.key);
        if (!isNaN(string)) {
            event.preventDefault();
        }
    }
    formFields.username.onkeydown = (event) => {
        if (event.key === "." || event.key === ",") {
            event.preventDefault();
        }
    }
    const onLoginSubmit = (event) => {
        if (!formFields.username.value) {
            alert('Введите Логин');
            event.preventDefault();
            return
        } else if (!formFields.passwordOne.value) {
            alert('Введите пароль');
            event.preventDefault();
            return
        } else if (formFields.passwordOne.value.length < 8) {
            alert("Пароль должен состоять из 8 символов");
            event.preventDefault();
            return
        } else if (!formFields.check.checked) {
            alert("Подтвердите согласие");
            event.preventDefault();
            return
        } else {
            alert("Добро пожаловать " + formFields.username.value);
            event.preventDefault();
        }
    }
    regForm.onsubmit = onRegisterSubmit;


    let func = (event) => {
        items.popup.classList.remove('popup__active');
        items.title.textContent = "Log in to the system";
        items.submit.textContent = "Sign In";
        regForm.onsubmit = onLoginSubmit;
        items.name.remove();
        items.mail.remove();
        items.password.remove();
        formFields.username.value = "";
        formFields.passwordOne.value = "";
    }

    link.onclick = func;
    items.btn.onclick = func;

}, false);

console.log("Hello Admin");
console.log("Im fine");
console.log("How are you");

