const firstNameRegex = /^[A-Za-z]+$/;
const lastNameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const userNameRegex = /^(?!.*\s)(?=.*[a-z]).{3,}/;
const passwordRegex = /^(?!.*\s)(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
// const passwordConfirmRegex = /^(?!.*\s)(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
const firstNameTextErr = 'first name must be string';
const lastNameTextErr = 'last name must be string';
const emailTextErr = 'Email Syntax Is Wrong';
const userNameTextErr = 'userName must includes lowercase character and not include spaces'
const passwordTextErr = 'Must contain at least one number ,uppercase ,lowercase and character letter, and at least 8 or more characters not including spaces.';
const passwordConfirmTextErr = "two passwords doesn't match";

exports.handleValidation = (input, value, passValue = '') => {
    let regex = '';
    if (input !== 'passwordConfirm') {
        regex = eval(`${input}Regex`);
    }
    if (!value) {
        return `${input} Is Required`
    }
    else if (input === 'passwordConfirm') {
        return !passValue ? 'password Required first' : !passValue.match(passwordRegex) ? 'password doesn\'t match' : (passValue !== value) ? 'Two Passwords doesn\'t Match.' : null;
    }
    else if (!value.match(regex)) {
        return eval(`${input}TextErr`);
    }
    else {
        return null;
    }
}




