function validateSignupForm() {
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear previous error messages and success message
    document.getElementById("signupEmailError").innerText = "";
    document.getElementById("signupPasswordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("signupSuccess").innerText = "";

    // Check if email is empty or not valid
    if (email.trim() === '' || !emailRegex.test(email)) {
        document.getElementById("signupEmailError").innerText = "Veuillez entrer une adresse email valide.";
        return false;
    }

    // Check if password is empty or shorter than 6 characters
    if (password.trim() === '' || password.length < 6) {
        document.getElementById("signupPasswordError").innerText = "Veuillez entrer un mot de passe d'au moins 6 caractères.";
        return false;
    }

    // Check if confirm password matches password
    if (confirmPassword.trim() !== password.trim()) {
        document.getElementById("confirmPasswordError").innerText = "Les mots de passe ne correspondent pas.";
        return false;
    }

    // If validation passes, show signup success message
    document.getElementById("signupSuccess").innerText = "Inscription réussie.";

}
