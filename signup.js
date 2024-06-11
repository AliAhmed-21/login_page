function signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userData = {
      username: username,
      email: email,
      password: password
    };
  
    
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Add new user to the array
    users.push(userData);
  
    // Store the updated array in local storage
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("You have successfully signed up!");
    window.location.href = "login.html";
  }