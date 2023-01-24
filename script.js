
const button = document.getElementById("submit");

const error = {
  name: true,
  email: true,
  gender: true,
  phNumber: true,
}


function inputValueChange() {
  var firstName = document.getElementById("fname");
  var LastName = document.getElementById("lname");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var phNumber = document.getElementById("ph_number");
  var bio = document.getElementById("bio");




  // First Name
  var helperTextName = document.getElementById("helperTextName");

  if (firstName.value === "") {
    error.name = true;
    helperTextName.innerText = "";

  } else if (firstName.value.length < 3 || firstName.value.length > 16) {
    error.name = true;
    helperTextName.innerText = `First name must be contain 3-16 characters`;

  } else if ((!(/^[a-zA-Z\s]+$/.test(firstName.value)))) {
    error.name = true;
    helperTextName.innerText = `First name must be alphanumeric`;

  } else {
    error.name = false;
    helperTextName.innerText = "";
    firstName.style.border = "none";

  }


  // Last Name

  var helperTextLastName = document.getElementById('helperTextLastName');

  if (LastName.value === "") {
    error.name = true;
    helperTextLastName.innerText = "";

  } else if (LastName.value.length < 3 || LastName.value.length > 16) {
    error.name = true;
    helperTextLastName.innerText = `Last name must be contain 3-16 characters`;

  } else if ((!(/^[a-zA-Z\s]+$/.test(LastName.value)))) {
    error.name = true;
    helperTextLastName.innerText = `Last name must be alphanumeric`;

  } else {
    error.name = false;
    helperTextLastName.innerText = "";
    LastName.style.border = "none";


  }

  // Email

  var helperTextEmail = document.getElementById('helperTextEmail');

  if (email.value === "") {
    error.name = true;
    helperTextEmail.innerText = "";

  } else if ((/^[a-zA-Z\s]+$/.test(email.value))) {
    error.name = true;
    helperTextEmail.innerText = `Email must be a valid address,e.g example@gmail.com`;

  } else {
    error.name = false;
    helperTextEmail.innerText = "";
    email.style.border = "none";


  }

  // Password

  var helperTextPassword = document.getElementById('helperTextPassword');

  var passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


  if (password.value === "") {
    error.name = true;
    helperTextPassword.innerText = "";
  } else if (!(password.value.match(passwordValid))) {
    error.name = true;
    helperTextPassword.innerText = `password must be alphanumeric(@,_and- are also allowed) and between 6-20 characters`;

  } else {
    error.name = false;
    helperTextPassword.innerText = "";
    password.style.border = "none";


  }

  // Phone number

  var helperTextPhone = document.getElementById('helperTextPhone');
  const phoneno = /^\d{10}$/;


  if (phNumber.value === "") {
    error.phNumber = true;
    helperTextPhone.innerText = "";
  } else if (!(phNumber.value.match(phoneno))) {
    error.name = true;
    helperTextPhone.innerText = `A valid Phone number contains 10 digits`;

  } else {
    error.phNumber = false;
    helperTextPhone.innerText = "";
    phNumber.style.border = "none";


  }


  // Bio

  var helperTextBio = document.getElementById('helperTextBio');


  if (bio.value === "") {
    error.bio = true;
    helperTextBio.innerText = "";
  } else if (bio.value.length <= 8 || bio.value.length >= 50) {
    error.name = true;
    helperTextBio.innerText = `Bio must be contain 8-50 characters`;

  } else if ((!(/^[a-zA-Z\s]+$/.test(bio.value)))) {
    error.name = true;
    helperTextBio.innerText = `Bio must be alphanumeric`;
  }
  else {
    error.bio = false;
    helperTextBio.innerText = "";
    bio.style.border = "none";


  }
}



function submitData() {
  var firstName = document.getElementById("fname");
  var LastName = document.getElementById("lname");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var phNumber = document.getElementById("ph_number");
  var bio = document.getElementById("bio");

  if (error.name === true || error.email === true || error.gender === true || error.phNumber === true) {
    console.log("errors are there");
    firstName.style.border = "1px solid red";
    LastName.style.border = "1px solid red";
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    phNumber.style.border = "1px solid red";
    bio.style.border = "1px solid red";
  } else {
    console.log("button clicked");

  }
}
