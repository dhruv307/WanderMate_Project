// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Example: Perform AJAX request to authenticate user
    // Placeholder code, replace with actual authentication logic
    if (username === 'demo' && password === 'demo') {
        window.location.href = 'dashboard.html'; // Redirect to dashboard on successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Function to handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Perform AJAX request to register new user
    // Placeholder code, replace with actual registration logic
    alert('User registered successfully!'); // Placeholder alert, replace with actual feedback to user
});

// Function to handle settings form submission
document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const bio = document.getElementById('bio').value;

    // Example: Perform AJAX request to update user settings
    // Placeholder code, replace with actual update logic
    alert('Settings saved successfully!'); // Placeholder alert, replace with actual feedback to user
});