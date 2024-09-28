const form = document.getElementById('userForm');

const usernameLabel = document.createElement('label');
usernameLabel.htmlFor = 'username';
usernameLabel.textContent = 'Username: ';
form.insertBefore(usernameLabel, document.getElementById('username'));

const passwordLabel = document.createElement('label');
passwordLabel.htmlFor = 'password';
passwordLabel.textContent = 'Password: ';
form.insertBefore(passwordLabel, document.getElementById('password'));

const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.htmlFor = 'confirmPassword';
confirmPasswordLabel.textContent = 'Confirm Password: ';
form.insertBefore(confirmPasswordLabel, document.getElementById('confirmPassword'));

form.addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    let isValid = true;

    const username = document.getElementById('username');
    if (username.value.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        isValid = false;
    }

    const password = document.getElementById('password');
    if (password.value.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    }

    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value.trim() === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
        isValid = false;
    }

    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false; // This ensures form does not submit but does not disable the submit button.
    }

    if (isValid) {
        alert('Registration successful!');
    }
});

function checkFormValidity() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (username !== '' && password !== '' && confirmPassword !== '') {
        document.getElementById('submitBtn').disabled = false;
    } else {
        document.getElementById('submitBtn').disabled = true;
    }
}

document.getElementById('username').addEventListener('input', checkFormValidity);
document.getElementById('password').addEventListener('input', checkFormValidity);
document.getElementById('confirmPassword').addEventListener('input', checkFormValidity);

          //...............mid...................
document.getElementById('username').addEventListener('blur', function () {
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
    } else {
        document.getElementById('usernameError').textContent = '';
    }
});

document.getElementById('password').addEventListener('blur', function () {
    const password = document.getElementById('password').value.trim();
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
    } else {
        document.getElementById('passwordError').textContent = '';
    }
});

document.getElementById('confirmPassword').addEventListener('blur', function () {
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }
});
