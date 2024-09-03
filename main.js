

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Redirect to user-details.html with query parameters
    window.location.href = `user.html?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
});
function forgotPassword(){
    forgotPassword =prompt("Enter the email");
    alert("Verification code sent to your email");
    return;
}
