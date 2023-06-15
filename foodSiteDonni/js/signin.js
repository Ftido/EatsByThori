// Sign In js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform your login validation here
    
  
    // Redirect to index.html if the login is successful
    if (username === "your_username" && password === "your_password") {
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });