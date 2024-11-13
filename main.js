// main.js

// Check if user is logged in and display appropriate options in navbar
const loggedIn = true; // Change to false if you want to simulate a logged-out state
if (loggedIn) {
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("userDropdown").style.display = "block";
}

// Add event listener for 'Start' button to check if user is logged in before proceeding
document.querySelectorAll("#startButton").forEach(button => {
    button.addEventListener("click", function (event) {
        if (!loggedIn) {
            alert("Please log in.");
            window.location.href = "login.html"; // Redirect to login page if not logged in
            event.preventDefault(); // Prevents the link from navigating
        }
    });
});
