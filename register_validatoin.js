//validate login form
function validateLoginForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Clear previous error messages and success message
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("loginSuccess").innerText = "";
  
    // Check if email is empty or not valid
    if (email.trim() === '' || !emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Veuillez entrer une adresse email valide.";
      return false;
    }
  
    // Check if password is empty or shorter than 6 characters
    if (password.trim() === '' || password.length < 6) {
      document.getElementById("passwordError").innerText = "Veuillez entrer un mot de passe d'au moins 6 caractères.";
      return false;
    }
  
    // If validation passes, show login success message
    document.getElementById("loginSuccess").innerText = "Connexion réussie.";
  
    // If validation passes, you can proceed with form submission
    return true;
  }
  
//validate signup form
