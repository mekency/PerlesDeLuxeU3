function validateAndSubmit() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
    var fullNameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;
  
    var fullNameError = document.getElementById("fullNameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
  
    fullNameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
  
    var isValid = true;
  
    if (!fullNameRegex.test(fullName)) {
      fullNameError.innerText = "Veuillez entrer un nom valide.";
      isValid = false;
    }
  
    if (!emailRegex.test(email)) {
      emailError.innerText = "Veuillez entrer une adresse email valide.";
      isValid = false;
    }
  
    if (!phoneRegex.test(phone)) {
      phoneError.innerText = "Veuillez entrer un numéro de téléphone valide (10 chiffres sans espaces ni caractères spéciaux).";
      isValid = false;
    }
  
    if (!isValid) {
      return;
    }
  
    // Simulating form submission
    setTimeout(function() {
      var successMessage = document.getElementById("successMessage");
      successMessage.innerText = "Message envoyé avec succès.";
      // You can reset the form or redirect to a success page here
    }, 1000);
  }
  
  