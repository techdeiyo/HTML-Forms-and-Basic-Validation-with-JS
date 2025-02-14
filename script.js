function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function (el) {
        el.style.display = 'none';
    });

    // Validate Username
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value.trim();
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, show success alert
    if (isValid) {
        alert('Registration successful!');
        // Optionally, you can reset the form after successful submission
        document.getElementById('registrationForm').reset();
    }

    return isValid;
}