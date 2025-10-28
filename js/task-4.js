const formElement = document.querySelector('.login-form');
const inputElements = formElement.elements;


formElement.addEventListener('submit', e => {
    e.preventDefault();

    if (!formElement.elements.email.value || !formElement.elements.password.value) {
        alert('All form fields must be filled in');
    } else {
        const userData = {
        email: formElement.elements.email.value,
        password: formElement.elements.password.value,
        }
        console.log(userData);
    }

    formElement.reset();
})