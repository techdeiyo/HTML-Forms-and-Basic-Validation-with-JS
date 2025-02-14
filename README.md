# Registration Form with Validation

This project is a simple registration form with client-side validation implemented using **HTML**, **CSS**, and **JavaScript**. It ensures that user inputs are validated before submission and provides feedback for invalid inputs.

---

## Features

- **Form Fields**:
  - Username
  - Email
  - Password
  - Confirm Password

- **Validation Rules**:
  - Username: Required field.
  - Email: Required and must be in a valid email format.
  - Password: Required and must be at least 6 characters long.
  - Confirm Password: Required and must match the password field.

- **Error Handling**:
  - Displays error messages below the respective input fields if validation fails.
  - Error messages are styled in red and appear dynamically.

- **Success Alert**:
  - Displays an alert box with a success message if all validations pass.

---

## Technologies Used

- **HTML**: Structure of the form.
- **CSS**: Styling for the form and error messages.
- **JavaScript**: Client-side validation logic.

---

## Files in the Project

1. **`index.html`**: Contains the HTML structure of the registration form.
2. **`styles.css`**: Contains the CSS styles for the form and error messages.
3. **`script.js`**: Contains the JavaScript code for form validation and success alert.

---

## Code Overview

### HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Registration Form</h2>
        <form id="registrationForm" onsubmit="return validateForm()">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">
                <small class="error-message" id="usernameError"></small>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                <small class="error-message" id="emailError"></small>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password">
                <small class="error-message" id="passwordError"></small>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword">
                <small class="error-message" id="confirmPasswordError"></small>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS (`styles.css`)
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

.error-message {
    color: red;
    font-size: 0.875em;
    display: none;
}
```

### JavaScript (`script.js`)
```javascript
function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(el) {
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
        // Optionally, reset the form after successful submission
        document.getElementById('registrationForm').reset();
    }

    return isValid;
}
```

---

## How to Run the Project

1. **Download the Files**:
   - Download the `index.html`, `styles.css`, and `script.js` files.

2. **Open the Project**:
   - Open the `index.html` file in a web browser.

3. **Test the Form**:
   - Fill out the form and test the validation rules.
   - Submit the form to see the success alert or error messages.

---

## Customization

- **Add More Fields**:
  - You can add more fields to the form and extend the validation logic in `script.js`.

- **Enhance Styling**:
  - Modify `styles.css` to change the appearance of the form and error messages.

- **Server-Side Validation**:
  - For production use, always implement server-side validation in addition to client-side validation.
