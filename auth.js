// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password match the predefined values
    if (email === 'user@example.com' && password === 'password123') {
        // Redirect to the dashboard page upon successful login
        window.location.href = 'dashboard.html'; 
    } else {
        // Show an error message if the credentials don't match
        alert('Incorrect email or password. Please try again.');
    }
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can add code here to actually store the user's info if needed
    alert('Account created successfully!');

    // Redirect the user to the login page after successful signup
    window.location.href = 'login.html';
});
