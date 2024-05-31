document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Dummy validation for example purposes
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect to another page or perform other actions on successful login
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
