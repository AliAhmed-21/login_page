function login() {
    var loginUsername = document.getElementById("username").value;
    var loginPassword = document.getElementById("password").value;
  
    
    var users = JSON.parse(localStorage.getItem("users"));//to get user data
  
    
    
      
        // Checking if the user exists in the array
        var foundUser = null;
        for (var i = 0; i < users.length; i++) {
          if (users[i].username === loginUsername) {
            foundUser = users[i];
            break;
          }
        }
      
        // Check if the user exists and the password is correct
        if (foundUser && foundUser.password === loginPassword) {
          alert("Login successful!");
        } else if (foundUser) {
          alert("Incorrect password");
        } else {
          alert("Please sign up first");
        }
      }
    
   
  