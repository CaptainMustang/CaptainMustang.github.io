// scroll spy function for checking if the page is scrolled upto certain scroll length or not
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("scrollSpy").className = "icon-bar";
  } else {
    document.getElementById("scrollSpy").className = "hide";
  }
}

// checking registration input box for empty inputs
function check(){
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var dateOfBirth = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    if(fName == ""){
    document.getElementById("errorFname").innerHTML = "Name Error";
    }
    if(lName == ""){
      document.getElementById("errorLname").innerHTML = "Last name Error";
    }
    if(dateOfBirth== null || dateOfBirth== ''){
      document.getElementById("errorDate").innerHTML = "Date Error";
    }
    if(email == ""){
      document.getElementById("errorEmail").innerHTML = "Email error";
    }
    return false;
}