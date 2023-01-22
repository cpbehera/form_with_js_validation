
const button = document.getElementById("submit");

const error = {
  name: true,
  email: true,
  gender: true,
  phNumber: true,
}

function inputValueChange() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var gender = document.getElementById("gender");
  var phNumber = document.getElementById("ph_number");



  const typeOfname = Number(name.value);

  const phoneno = /^\d{10}$/;
  var helperTextName = document.getElementById("helperTextName");

  if(name.value === ""){
    error.name = true;
    name.classList.add("error");
    helperTextName.innerText = `Name Can't be blank`;

  }else if(name.value.length < 3){
    error.name = true;
    name.classList.add("error");
    helperTextName.innerText = `Name must be greater than 2 characters`;

  }else if((!(/^[a-zA-Z\s]+$/.test(name.value)))){
    error.name = true;
    name.classList.add("error");
    helperTextName.innerText = `Please enter a valid Name`;

  }else{
    error.name = false;
    name.classList.remove("error");
    helperTextName.innerText = "";

  }

  if(email.value === ""){
    error.email = true;
    email.classList.add("error");
  }else if((!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))){
    error.email = true;
    email.classList.add("error");
  }else{
    error.email = false;
    email.classList.remove("error");
  }

 
  // if (email.value === "" || (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))) {
  //   error.email = true;
  //   email.classList.add("error");
  // } else {
  //   error.email = false;
  //   email.classList.remove("error");

  // }
  if (gender.value === "" || (gender.value.toLowerCase() != "male" && gender.value.toLowerCase() != "female")) {
    error.gender = true;
    gender.classList.add("error");
  } else {
    error.gender = false;
    gender.classList.remove("error");


  }
  if ((phNumber.value === "" || !(phNumber.value.match(phoneno)))) {
    error.phNumber = true;
    phNumber.classList.add("error");


  } else {
    error.phNumber = false;
    phNumber.classList.remove("error");


  }
}



function submitData() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var gender = document.getElementById("gender");
  var phNumber = document.getElementById("ph_number");

  if (error.name === true || error.email === true || error.gender === true || error.phNumber === true) {
    console.log("errors are there");
    name.classList.add("error");
    email.classList.add("error");
    gender.classList.add("error");
    phNumber.classList.add("error");
  } else {
    console.log("button clicked");
  }
}
