// Registartion js
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform registration process
    
    console.log("connected")
    window.location.href = "index.html";
  });