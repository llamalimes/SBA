// Get a reference to the main content div
const mainContent = document.getElementById("main-content");

// Pull Down Menu html
function updateContent(mainContent, selectedItem) {
  switch (selectedItem) {
    case "item1":
      mainContent.innerHTML = `
        <h1 style="text-align: center;">St. Vincent</h1><br>
        <table style="margin:0 auto;">
          <thead>
            <tr>
              <th colspan="2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RYJxPg6quL4" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Artist Name:</td>
              <td>St. Vincent</td>
            </tr>
            <tr>
              <td>Song Name:</td>
              <td>Broken Man</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Art Rock</td>
            </tr>
            <tr>
              <td>Album:</td>
              <td>All Born Screaming</td>
            </tr>
            <tr>
              <td>Release Date:</td>
              <td>February 29th, 2024</td>
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>`;
      break;
    case "item2":
      mainContent.innerHTML = `
        <h1 style="text-align: center;">Caroline Polachek</h1><br>
        <table style="margin:0 auto;">
          <thead>
            <tr>
              <th colspan="2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6UsIcDivsls?si=Ng9pIVmEQBK0kNVs" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Artist Name:</td>
              <td>Caroline Polachek</td>
            </tr>
            <tr>
              <td>Song Name:</td>
              <td>Dang</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Aleternative/Indie</td>
            </tr>
            <tr>
              <td>Album:</td>
              <td>Desire, I Want To Turn Into You: Everasking Edition</td>
            </tr>
            <tr>
              <td>Release Date:</td>
              <td>October 17th, 2023</td>
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>`;
      break;
    case "item3":
      mainContent.innerHTML = `
        <h1 style="text-align: center;">Panda Bear</h1><br>
        <table style="margin:0 auto;">
          <thead>
            <tr>
              <th colspan="2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/prBaZzYmQrI?si=pHGQpknO8jbmiJpB" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Artist Name:</td>
              <td>Panda Bear</td>
            </tr>
            <tr>
              <td>Song Name:</td>
              <td>Boys Latin</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>Experimental</td>
            </tr>
            <tr>
              <td>Album:</td>
              <td>Panda Bear Meets The Grim Reaper</td>
            </tr>
            <tr>
              <td>Release Date:</td>
              <td>December 14th, 2014</td>
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>`;
      break;
    default:
      mainContent.innerHTML = "<h1>Main Content</h1><p>Please select an item from the dropdown menu.</p>";
  }
}

// Event listener for the dropdown menu
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', event => {
    const selectedItem = event.target.getAttribute('data-item');
    updateContent(mainContent, selectedItem);
  });
});

//Form validation via regex
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var nameRegex = /^[A-Za-z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^[0-9]{10}$/;

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

//jquery navbar links
$(document).ready(function() {
  // Load home page content by default
  $('#main-content').load('home.html');

  // Load contact page content when contact link is clicked
  $('#contactLink').click(function(e) {
    e.preventDefault();
    $('#main-content').load('contact.html');
  });
  //Load services page content when services link is clicked
  $('#sercivesLink').click(function(e) {
    e.preventDefault();
    $('#main-content').load('services.html');
  });
  // Load home page content when home link is clicked
  $('#homeLink').click(function(e) {
    e.preventDefault();
    $('#main-content').load('home.html');
  });
});
