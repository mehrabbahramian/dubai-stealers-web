const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    validateInputs();
})
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const isValidEmail = (email) => {
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
const validateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email address field cannot be empty.');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address!');
    }else{
        setSuccess(email);
    }

    if (phoneValue === ''){
        setError(phone, "Phone number can't be blank.");
    }else{
        setSuccess(phone);
    }
}

const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});