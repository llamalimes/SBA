//Form validation via regex
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  let nameRegex = /^[A-Za-z\s]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^[0-9]{10}$/;

  if (!name.match(nameRegex)) {
    document.getElementById("error").innerHTML = "Invalid name format. Please use only letters and spaces.";
    return false;
  }

  if (!email.match(emailRegex)) {
    document.getElementById("error").innerHTML = "Invalid email format.";
    return false;
  }

  if (!phone.match(phoneRegex)) {
    document.getElementById("error").innerHTML = "Invalid phone number format. Please enter 10 digits.";
    return false;
  }

  if (message.trim() === "") {
    document.getElementById("error").innerHTML = "Please enter a message.";
    return false;
  }

  return true;
}
